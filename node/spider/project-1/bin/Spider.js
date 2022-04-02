"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const https = require('https');
class Spider {
    constructor(options) {
        this.options = options;
        this.start();
    }
    start() {
        let req = https.request(this.options.url, {
            headers: this.options.headers,
            method: this.options.method ? this.options.method : 'get'
        }, (res) => {
            let chunks = [];
            res.on('data', (c) => chunks.push(c));
            res.on('end', () => {
                let result = Buffer.concat(chunks).toString('utf-8');
                console.log(result);
            });
        });
        req.end();
    }
}
exports.default = Spider;
