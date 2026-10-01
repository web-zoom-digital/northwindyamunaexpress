const https = require('https');

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function main() {
  const css = await get('https://www.northwindestates.com/_next/static/chunks/0pq8vbizl0kz9.css');
  
  const colorsOfInterest = [
    '0D3829', '0d3829',
    '1E3A2B', '1e3a2b',
    '173A2C', '173a2c',
    '2B5E47', '2b5e47',
    'ACC78C', 'acc78c',
    'A5C284', 'a5c284',
    'D8D2B4', 'd8d2b4',
    'E7E2CE', 'e7e2ce',
    'B9A148', 'b9a148',
    'FFFCEC', 'fffcec',
    'F4F1DF', 'f4f1df',
    'E6E1CD', 'e6e1cd'
  ];

  console.log('--- Matching CSS Rules ---');
  // split CSS by }
  const rules = css.split('}');
  for (const rule of rules) {
    for (const c of colorsOfInterest) {
      if (rule.includes('#' + c)) {
        console.log(`[Color #${c}] rule:`, rule.trim().slice(-200));
        break;
      }
    }
  }
}

main();
