import mongoose from 'mongoose';

/**
 * Serverless-safe MongoDB connection.
 * Vercel reuses a warm lambda between invocations, so the connection (and the
 * in-flight promise) are cached on globalThis to avoid opening a new pool on
 * every request.
 */

const MONGODB_URI = process.env.MONGODB_URI || '';
const MONGODB_DB = process.env.MONGODB_DB || 'ip3';

let cached = globalThis.__ip3Mongoose;
if (!cached) {
  cached = globalThis.__ip3Mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (!MONGODB_URI) {
    throw Object.assign(new Error('MONGODB_URI is not set.'), { status: 500, code: 'DB_NOT_CONFIGURED' });
  }

  if (cached.conn && mongoose.connection.readyState === 1) return cached.conn;

  if (!cached.promise) {
    mongoose.set('strictQuery', true);
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        dbName: MONGODB_DB,
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 10000,
        socketTimeoutMS: 45000,
      })
      .then((m) => m.connection);
  }

  try {
    cached.conn = await cached.promise;
  } catch (err) {
    cached.promise = null;
    throw err;
  }

  return cached.conn;
}

export function dbState() {
  return ['disconnected', 'connected', 'connecting', 'disconnecting'][mongoose.connection.readyState] || 'unknown';
}

export async function dbPing() {
  try {
    await mongoose.connection.db.admin().ping();
    return 'ok';
  } catch {
    return 'failed';
  }
}

export default connectDB;
