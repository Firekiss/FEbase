const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://www.google.com.tw/?hl=zh_TW');
    await driver.findElement(By.name('q')).sendKeys('王一博', Key.RETURN);
    // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    // await driver.quit();
  }
})();