const fs = require('fs');
const path = require('path');

const darkPath = path.join(__dirname, '..', 'public', 'images', 'dark-logo.svg');
const lightPath = path.join(__dirname, '..', 'public', 'images', 'light-logo.svg');

const darkSvg = fs.readFileSync(darkPath, 'utf8');
const lightSvg = darkSvg.replace(/fill="#0D3829"/gi, 'fill="#FFFCEC"');
fs.writeFileSync(lightPath, lightSvg);
console.log('Saved light-logo.svg successfully');
