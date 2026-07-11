import sharp from 'sharp';
import { readdirSync, statSync, mkdirSync } from 'fs';
import { join, extname, basename, dirname, relative } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const assetsDir = join(__dirname, '..', 'assets');

const MAX_WIDTH = 1920;
const JPEG_QUALITY = 78;
const PNG_QUALITY = 80;

let totalBefore = 0;
let totalAfter = 0;
let count = 0;

function getAllImages(dir) {
  const results = [];
  for (const item of readdirSync(dir)) {
    const fullPath = join(dir, item);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      results.push(...getAllImages(fullPath));
    } else {
      const ext = extname(item).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

async function compressImage(filePath) {
  const ext = extname(filePath).toLowerCase();
  const sizeBefore = statSync(filePath).size;
  totalBefore += sizeBefore;

  const img = sharp(filePath);
  const meta = await img.metadata();

  // Resize kalau lebih lebar dari MAX_WIDTH
  let pipeline = img;
  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  let outputBuffer;
  if (ext === '.png') {
    outputBuffer = await pipeline
      .png({ quality: PNG_QUALITY, compressionLevel: 9, palette: false })
      .toBuffer();
  } else {
    // jpg, jpeg, webp
    outputBuffer = await pipeline
      .jpeg({ quality: JPEG_QUALITY, mozjpeg: true, progressive: true })
      .toBuffer();
  }

  // Hanya replace kalau hasilnya lebih kecil
  if (outputBuffer.length < sizeBefore) {
    const { writeFileSync, renameSync, unlinkSync } = await import('fs');
    const tmpPath = filePath + '.tmp';
    writeFileSync(tmpPath, outputBuffer);
    try { unlinkSync(filePath); } catch {}
    renameSync(tmpPath, filePath);
    totalAfter += outputBuffer.length;
    const saved = ((sizeBefore - outputBuffer.length) / sizeBefore * 100).toFixed(1);
    const relPath = relative(assetsDir, filePath);
    console.log(`✓ ${relPath.padEnd(55)} ${(sizeBefore/1024).toFixed(0).padStart(7)} KB → ${(outputBuffer.length/1024).toFixed(0).padStart(6)} KB  (-${saved}%)`);
  } else {
    totalAfter += sizeBefore;
    const relPath = relative(assetsDir, filePath);
    console.log(`- ${relPath.padEnd(55)} already optimized, skipped`);
  }
  count++;
}

console.log('🔧 Compressing images in assets/...\n');
console.log(`${'File'.padEnd(57)} ${'Before'.padStart(9)}   ${'After'.padStart(7)}   Saved`);
console.log('-'.repeat(90));

const images = getAllImages(assetsDir);
for (const img of images) {
  await compressImage(img);
}

console.log('-'.repeat(90));
console.log(`\n✅ Done! ${count} files processed`);
console.log(`   Total before : ${(totalBefore/1024/1024).toFixed(2)} MB`);
console.log(`   Total after  : ${(totalAfter/1024/1024).toFixed(2)} MB`);
console.log(`   Total saved  : ${((totalBefore-totalAfter)/1024/1024).toFixed(2)} MB  (${((totalBefore-totalAfter)/totalBefore*100).toFixed(1)}%)`);
