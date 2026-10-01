const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function generateFavicons() {
  const logoPath = path.join(__dirname, '../public/logo-s.webp');
  
  // 1. Generate app/icon.png (32x32 PNG)
  await sharp(logoPath)
    .resize(32, 32)
    .toFile(path.join(__dirname, '../app/icon.png'));
    
  // 2. Generate public/favicon.png (32x32 PNG)
  await sharp(logoPath)
    .resize(32, 32)
    .toFile(path.join(__dirname, '../public/favicon.png'));

  // 3. Generate public/apple-touch-icon.png (180x180 PNG)
  await sharp(logoPath)
    .resize(180, 180)
    .toFile(path.join(__dirname, '../public/apple-touch-icon.png'));

  // 4. Update app/icon.svg with embedded base64 data URI
  const b64 = fs.readFileSync(logoPath).toString('base64');
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <image href="data:image/webp;base64,${b64}" x="0" y="0" width="512" height="512" />
</svg>
`;
  fs.writeFileSync(path.join(__dirname, '../app/icon.svg'), svgContent, 'utf-8');

  console.log('All favicons (PNG, SVG, Apple Touch Icon) successfully generated!');
}

generateFavicons().catch(console.error);
