/**
 * Vercel serverless entry point.
 *
 * vercel.json rewrites every /api/* request here; the Express app below owns
 * the routing from that point on. Keeping the app in ../server means Vercel
 * bundles it as a dependency rather than turning each file into its own
 * function.
 */
import app from '../server/app.js';

export default app;
