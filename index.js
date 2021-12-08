const { Worker } = require("worker_threads");
const { launch } = require("puppeteer");

(async () => {
  const browser = await launch({
    headless: false,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  
  const page = await browser.newPage();
  page.goto("https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo");

})();