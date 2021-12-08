const { Worker } = require("worker_threads");
const { launch } = require("puppeteer");

(async () => {
  const browser = await launch({
    headless: false,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
});