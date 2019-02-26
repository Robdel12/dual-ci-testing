const puppeteer = require('puppeteer');
const {percySnapshot} = require('@percy/puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    // for CI
    args: ['–no-sandbox', '–disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  await page.goto('https://robertdelu.ca');
  await percySnapshot(page, 'homepage');
  await page.goto('https://robertdelu.ca/blog');
  await percySnapshot(page, 'blog page');
  await browser.close();
})()
