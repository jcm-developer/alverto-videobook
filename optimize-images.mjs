import sharp from 'sharp';
import { readdirSync, mkdirSync, existsSync } from 'fs';
import { join, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputDir = join(__dirname, 'src/assets/book');
const outputDir = join(__dirname, 'src/assets/book-optimized');

// Create output directory if it doesn't exist
if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
}

// Get all jpg files
const files = readdirSync(inputDir).filter(f => f.toLowerCase().endsWith('.jpg'));

console.log(`Found ${files.length} images to optimize...`);

for (const file of files) {
    const inputPath = join(inputDir, file);
    const outputPath = join(outputDir, file);

    try {
        await sharp(inputPath)
            .resize(1200, null, { // Max width 1200px, maintain aspect ratio
                withoutEnlargement: true
            })
            .jpeg({
                quality: 80,
                mozjpeg: true
            })
            .toFile(outputPath);

        console.log(`✓ Optimized: ${file}`);
    } catch (err) {
        console.error(`✗ Error with ${file}:`, err.message);
    }
}

console.log('\nDone! Optimized images saved to src/assets/book-optimized/');
console.log('Replace the original folder with the optimized one when ready.');
