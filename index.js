const { Worker } = require("worker_threads");
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  
  const page = await browser.newPage();
  await page.goto("chrome://extensions");

  await page.click('cr-toggle[aria-labelledby="devModeLabel"]')

})();