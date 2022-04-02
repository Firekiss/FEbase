const axios = require('axios');
const cheerio = require('cheerio');
const download = require('download');
const fs = require('fs');
const path = require('path');

class Spider {
	options
	info

	constructor(options) {
		this.options = options;
	}

	async startAll() {
		console.log('===== 开始爬取所有漫画 =====')
		// 获取初始页面的html
		const res = await axios.get(this.options.url);
		// 开始解析html
		const $ = cheerio.load(res.data);
		// 获取漫画基本信息
		console.log('===== 开始解析漫画信息 =====')
		this.info = this.getComicInfo($);
		console.log('漫画基本信息', this.info);
		console.log(`===== 创建《${this.info.title}》文件夹 =====`)
		this.createFolder();
		// 解析漫画列表
		console.log(`===== 解析《${this.info.title}》漫画列表 =====`)
		const chapters = this.getChapters($);
		// 找到已经下载的章节索引继续往下下载
		let i = this.getCountineChapter(chapters);
		for (; i < chapters.length; i++) {
			// 下载下一话前休息5秒钟😁，让服务器也休息一下
			await this.wait(5000);
			await this.startOne(chapters[i]);
			console.log(`***************************************************************`);
			console.log(`        进度${Math.ceil(i / (chapters.length) * 100)}%`);
			console.log(`***************************************************************`)
		}

		console.log('===== 全部下载完毕！开始享用漫画! ======');
	}

	async startOne(chapter) {
		let flag = true;
		while(true) {
			try {
				// 获取漫画详情页面html
				console.log(`===== 开始爬取 ${chapter.title} =====`);
				const res = await axios.get(chapter.link, {
					timeout: 20000
				});
				const $ = cheerio.load(res.data);
				// 获取漫画章节所有图片列表
				const images = this.getImages($);
				for (let i = 0; i < images.length; i++) {
					const currentImage = images[i];
					if (!this.isImageHasDownloaded(currentImage)) {
						await this.downloadImage(currentImage);
					} else {
						console.log(`√√√√√ 图片${currentImage.url}已经存在,跳过下载`);
					}
				}
				flag = true;
			} catch (error) {
				flag = false;
			} finally {
				if (flag) break;
			}
		}
	}

	getDir() {
		return path.join(this.options.dist, this.info.title);
	}

	getComicInfo($) {
		const title = $('h2.site-red-dot-box').text().trim();
		const cover = $('.site-thumbnail-box img').attr('src');
		const author = $('.text-muted').text().trim();
		
		return {
			title,
			cover,
			author,
		}
	}

	getChapters($) {
		const chapters = []
		$('#site-manga-all .row').each((index, row) => {
			$(row).find('.site-manga').each((index, chapter) => {
				const $chapter = $(chapter)
				const title = $chapter.find('a').text().trim();
				const link = $chapter.find('a').attr('href').trim();

				chapters.push({
					title,
					link
				});
			});
		});

		return chapters;
	}

	getImages($) {
		const images = [];
		$('.site-page-slide-horizontal').each((index, img) => {
			const url =	$(img).attr('data-src') || $(img).attr('src');
			const title = $(img).attr('alt');
			
			images.push({
				url,
				title
			}); 
		});

		return images;
	}

	createFolder() {
		const dir = this.getDir();
		// 新建漫画文件夹
		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir);
			console.log(`√√√√√ 文件夹${this.info.title}创建成功!`)
		} else {
			console.log(`√√√√√ 文件夹${this.info.title}已经存在,无需重复创建`);
		}
	}

	isImageHasDownloaded(image) {
		const filePath = path.join(this.options.dist, this.info.title, `${image.title}.jpg`);
		return fs.existsSync(filePath);
	}

	async downloadImage(image) {
		let flag = true;
		while(true) {
			try {
				// 等待2秒后再开始下图
				await this.wait(1000);
				console.log(`-----> 下载 ${image.url}`);
				await this.pTimeout(download(image.url, this.getDir(), {
					filename: `${image.title}.jpg`
				}), 30000, `××××× 哎呀, ${image.url}下载超时, 重新开始下载`);
				flag = true;
			} catch (error) {
				flag = false;
				console.log(`${image.url}下载失败`);
			} finally {
				if (flag) break;
			}
		}
	}

	// 模拟其他语言中的sleep方法
	wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
	}

	// 如果传入的promise超时则抛出错误
	pTimeout(p, timeout, reason) {
		return new Promise((resolve, reject) => {
			p.then(() => resolve());
			setTimeout(() => {
				reject(reason);
			}, timeout);
		});	
	}

	// 获取自动断点续传的章节索引
	getCountineChapter(chapters) {
		const dir = this.getDir();
		const lastFile = fs.readdirSync(dir)[0];
		
		if (lastFile) {
			const countineChapter = chapters.find(c => lastFile.indexOf(c.title) > -1);
			if (countineChapter) {
				return chapters.indexOf(countineChapter);
			}
		}
		return 0;
	}
}

module.exports = Spider;