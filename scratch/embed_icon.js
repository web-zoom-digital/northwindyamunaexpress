const fs = require('fs');
const path = require('path');

const logoPath = path.join(__dirname, '../public/logo-s.webp');
const iconSvgPath = path.join(__dirname, '../app/icon.svg');

const b64 = fs.readFileSync(logoPath).toString('base64');
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <image href="data:image/webp;base64,${b64}" x="0" y="0" width="512" height="512" />
</svg>
`;

fs.writeFileSync(iconSvgPath, svgContent, 'utf-8');
console.log('Successfully updated app/icon.svg with embedded base64 image!');
