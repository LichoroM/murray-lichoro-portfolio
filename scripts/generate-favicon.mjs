import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

async function main() {
  const src = path.resolve('public/profile.jpg');
  const outDir = path.resolve('public');

  try {
    await fs.access(src);
  } catch {
    console.error(`Source image not found: ${src}`);
    console.error('Please ensure public/profile.jpg exists.');
    process.exit(1);
  }

  await fs.mkdir(outDir, { recursive: true });

  const sizes = [16, 32];
  const pngPaths = [];
  for (const size of sizes) {
    const outPath = path.join(outDir, `favicon-${size}x${size}.png`);
    await sharp(src)
      .resize(size, size, { fit: 'cover' })
      .png({ compressionLevel: 9 })
      .toFile(outPath);
    pngPaths.push(outPath);
    console.log(`✓ Wrote ${outPath}`);
  }

  const pngBuffers = await Promise.all(pngPaths.map((p) => fs.readFile(p)));
  const icoBuffer = await pngToIco(pngBuffers);
  const icoPath = path.join(outDir, 'favicon.ico');
  await fs.writeFile(icoPath, icoBuffer);
  console.log(`✓ Wrote ${icoPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
