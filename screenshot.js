const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(`file://${process.env.GITHUB_WORKSPACE}/index.html`);

  const screenshotPath = `${process.env.GITHUB_WORKSPACE}/screenshot.png`;
  await page.screenshot({ path: screenshotPath });

  console.log(`Screenshot saved to ${screenshotPath}`);

  await browser.close();
})();
