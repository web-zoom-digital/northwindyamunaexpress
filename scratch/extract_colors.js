const https = require('https');
const http = require('http');

function get(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function main() {
  try {
    const html = await get('https://www.northwindestates.com/about-us');
    console.log('HTML length:', html.length);
    
    // Find style tags and linked css files
    const cssLinks = [...html.matchAll(/<link[^>]+rel=["']stylesheet["'][^>]+href=["']([^"']+)["']/gi)].map(m => m[1]);
    console.log('CSS Links:', cssLinks);
    
    // Look for inline hex colors in HTML
    const hexes = [...new Set(html.match(/#[0-9a-fA-F]{3,8}\b/g))];
    console.log('HTML Hexes:', hexes);

    // Fetch CSS files to analyze color declarations
    for (let link of cssLinks) {
      let fullUrl = link;
      if (!fullUrl.startsWith('http')) {
        if (fullUrl.startsWith('/')) fullUrl = 'https://www.northwindestates.com' + fullUrl;
        else fullUrl = 'https://www.northwindestates.com/' + fullUrl;
      }
      try {
        const css = await get(fullUrl);
        const cssHexes = [...new Set(css.match(/#[0-9a-fA-F]{3,8}\b/g))];
        const rgb = [...new Set(css.match(/rgba?\([^)]+\)/g))];
        const cssVars = [...new Set(css.match(/--[a-zA-Z0-9_-]+:\s*[^;]+/g))];
        console.log('\n--- CSS File:', link, '---');
        console.log('Hexes:', cssHexes);
        console.log('RGBs:', rgb);
        console.log('CSS Variables:', cssVars);
      } catch(e) {
        console.log('Failed css fetch:', link, e.message);
      }
    }

    // Also check home page or other pages if needed
    const mainHtml = await get('https://www.northwindestates.com/');
    const mainHexes = [...new Set(mainHtml.match(/#[0-9a-fA-F]{3,8}\b/g))];
    console.log('\nMain HTML Hexes:', mainHexes);

  } catch(e) {
    console.error('Error:', e);
  }
}

main();
