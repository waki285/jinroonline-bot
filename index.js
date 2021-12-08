const { Worker } = require("worker_threads");
const puppeteer = require("puppeteer");

const sleep = async (ms) => {
  return new Promise(r => setTimeout(r, ms));
}

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  
  const page = await browser.newPage();
  await page.goto("chrome://extensions");

  await sleep(1000);

  await page.click('cr-toggle[aria-labelledby="devModeLabel"]')

})();