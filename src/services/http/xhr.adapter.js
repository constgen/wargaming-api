'use strict'

var getXhrHeaders = require('../../utils/get-xhr-headers.js')

module.exports = function(options){
	var method = options.method
	var requestUrl = options.url
	var headers = options.headers
	var payload = options.body
	var header
	var xhr = new XMLHttpRequest()

	xhr.open(method, requestUrl, true)
	for (header in headers) {
		xhr.setRequestHeader(header, headers[header])
	}
	xhr.responseType = 'text'

	return new Promise(function(resolve, reject){
		xhr.onreadystatechange = function () {
			if (this.readyState !== this.DONE) return

			if (
				(this.status >= 200 && this.status < 300)
				|| (this.status === 0 && this.responseText) //local
			) {
				resolve({
					body: this.responseText,
					headers: getXhrHeaders(this)
				})
			}
			else if (this.status === 304) {
				resolve({
					body: undefined,
					headers: getXhrHeaders(this)
				})
			}
			else {
				reject(new Error(this.statusText))
			}
			this.onreadystatechange = null
			xhr = undefined
		}

		try {
			xhr.send(payload)
		}
		//crossdomain
		catch(err){
			reject(err)
		}
	})
}