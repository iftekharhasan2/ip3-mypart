import { v2 as cloudinary } from 'cloudinary';

const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || '';
const API_KEY = process.env.CLOUDINARY_API_KEY || '';
const API_SECRET = process.env.CLOUDINARY_API_SECRET || '';
export const DEFAULT_FOLDER = process.env.CLOUDINARY_FOLDER || 'ip3';

export const isCloudinaryConfigured = () => Boolean(CLOUD_NAME && API_KEY && API_SECRET);

if (isCloudinaryConfigured()) {
  cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET,
    secure: true,
  });
}

export function cdnConfig() {
  return {
    configured: isCloudinaryConfigured(),
    cloudName: CLOUD_NAME || null,
    folder: DEFAULT_FOLDER,
  };
}

/**
 * Signs a browser-side upload. The API secret stays on the server; the file
 * itself goes straight from the browser to Cloudinary, so a 100 MB video never
 * passes through this function.
 */
export function signUpload({ folder = DEFAULT_FOLDER, resourceType = 'image' } = {}) {
  if (!isCloudinaryConfigured()) {
    throw Object.assign(new Error('Cloudinary is not configured on the server.'), {
      status: 503,
      code: 'CDN_NOT_CONFIGURED',
    });
  }

  const timestamp = Math.floor(Date.now() / 1000);
  const type = resourceType === 'video' ? 'video' : 'image';
  const signature = cloudinary.utils.api_sign_request({ folder, timestamp }, API_SECRET);

  return {
    apiKey: API_KEY,
    cloudName: CLOUD_NAME,
    timestamp,
    signature,
    folder,
    resourceType: type,
    uploadUrl: `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/${type}/upload`,
  };
}

/** Removes the asset from the CDN when it is deleted from the library. */
export async function destroyAsset(publicId, resourceType = 'image') {
  if (!isCloudinaryConfigured() || !publicId) return { result: 'skipped' };
  return cloudinary.uploader.destroy(publicId, {
    resource_type: resourceType === 'video' ? 'video' : 'image',
    invalidate: true,
  });
}

/** A poster frame for videos, derived from the same public id. */
export function videoThumbnail(publicId) {
  if (!isCloudinaryConfigured() || !publicId) return undefined;
  return cloudinary.url(publicId, {
    resource_type: 'video',
    format: 'jpg',
    transformation: [{ width: 640, crop: 'scale', quality: 'auto' }],
  });
}

export default cloudinary;
