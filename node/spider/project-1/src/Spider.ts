const https = require('https')
import SpiderOptions from "./interfaces/SpiderOption"

export default class Spider {
	options: SpiderOptions

	constructor(options: SpiderOptions) {
		this.options = options
		this.start()
	}

	start() {
		let req = https.request(this.options.url, {
			headers: this.options.headers,
			method: this.options.method ? this.options.method : 'get'
		}, (res: any) => {
			let chunks: any[] = []
			res.on('data', (c: any) => chunks.push(c))
			res.on('end', () => {
				let result: string = Buffer.concat(chunks).toString('utf-8')
				console.log(result)
			})
		})

		req.end()
	}
}