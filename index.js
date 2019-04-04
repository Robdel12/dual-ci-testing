const puppeteer = require('puppeteer');
const {percySnapshot} = require('@percy/puppeteer');

throw 'FAIL THE BUILD'
process.exit()

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    // for CI
    args: ['–no-sandbox', '–disable-setuid-sandbox', '--single-process']
  });
  const page = await browser.newPage();

  await page.goto('https://percy.io');
  await page.waitFor(2000);
  await percySnapshot(page, 'homepage');

  await page.goto('https://percy.io/pricing');
  await page.waitFor(4000);
  await percySnapshot(page, 'pricing page');

  await browser.close();
})()
