const { Worker } = require("worker_threads");
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  
  const page = await browser.newPage();
  await page.goto("https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo");

  await page.click('div[class^="dd-Va g-c-wb g-eg-ua-Uc-c-za g-c-Oc-td-jb-oa"]')

})();