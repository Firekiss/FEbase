const {Builder, By, Key, until} = require('selenium-webdriver');

let currentPage = 1;
let maxPage;

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  await driver.get('https://www.lagou.com');
  
	// await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
	await driver.findElement(By.css('#changeCityBox .checkTips .tab.focus')).click();
	await driver.findElement(By.id('search_input')).sendKeys('前端', Key.RETURN);
	await driver.sleep(2000);
	maxPage = Number(await driver.findElement(By.css('.lg-pagination li:nth-last-of-type(2) a')).getText())
	getData(driver)
})();

async function getData(driver) {
	console.log(`------ 当前正在获取第${currentPage}页面的数据, 总共有${maxPage}页 ------`)
	await driver.sleep(2000);
	let results = []
	let items = await driver.findElements(By.css('#jobList .item__10RTO'))
	for (let i = 0; i < items.length; i++) {
		let item = items[i]
		let title = await item.findElement(By.css('.p-top__1F7CL a')).getText();
		results.push({
			title
		})
	}

	console.log(results);
	currentPage++;
	if (currentPage <= maxPage) {
		await driver.findElement(By.css('.lg-pagination-next')).click();
		getData(driver)
	}
}