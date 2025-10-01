// Image optimization script: generates WebP for profile and an OG image.
// Requires: sharp (already in devDependencies)

import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const publicDir = path.resolve(process.cwd(), 'public');
const profileJpg = path.join(publicDir, 'profile.jpg');
const profileWebp = path.join(publicDir, 'profile.webp');
const ogImage = path.join(publicDir, 'og-image.jpg');

async function ensureFileExists(file, friendlyName) {
  try {
    await fs.promises.access(file, fs.constants.F_OK);
  } catch {
    console.warn(`[optimize-images] ${friendlyName} not found at ${file}. Skipping related tasks.`);
    return false;
  }
  return true;
}

async function createProfileWebp() {
  if (!(await ensureFileExists(profileJpg, 'profile.jpg'))) return;
  try {
    await sharp(profileJpg)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(profileWebp);
    console.log(`[optimize-images] Generated ${path.basename(profileWebp)}`);
  } catch (err) {
    console.error('[optimize-images] Failed to create profile.webp:', err);
  }
}

async function createOgImage() {
  if (!(await ensureFileExists(profileJpg, 'profile.jpg'))) return;
  try {
    // 1200x630 Open Graph image
    await sharp(profileJpg)
      .resize(1200, 630, { fit: 'cover', position: 'attention' })
      .jpeg({ quality: 85, mozjpeg: true })
      .toFile(ogImage);
    console.log(`[optimize-images] Generated ${path.basename(ogImage)}`);
  } catch (err) {
    console.error('[optimize-images] Failed to create og-image.jpg:', err);
  }
}

async function run() {
  await createProfileWebp();
  await createOgImage();
  console.log('[optimize-images] Done');
}

run();
