'use strict'

var url = require('../utils/url.js')

function httpRequest(options, resolve, reject) {
	var xhr = new XMLHttpRequest()
	var payload
	var requestUrl = options.url
	var method = options.method
	var data = options.params
	var ETag = options.ETag

	switch (true) {
		case !data:
			payload = null
			break
		case method === 'POST':
			payload = url.format({ query: data }).slice(1)
			break
		default:
			requestUrl += url.format({ query: data })
	}

	try {
		xhr.open(method, requestUrl, true)
		xhr.responseType = 'text'
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
		xhr.setRequestHeader('If-None-Match', ETag)
		xhr.onreadystatechange = function () {
			if (this.readyState === this.DONE) {
				if (
					(this.status >= 200 && this.status < 300)
					|| (this.status === 0 && this.responseText) //local
				) {
					var response = this.responseText
					response = response ? JSON.parse(response) : undefined
					if (response) {
						response.ETag = xhr.getResponseHeader('ETag')
					}
					resolve(response)
				}
				else if (this.status === 304) {
					console.warn(this.status, this.statusText)
					resolve(response)
				}
				else {
					reject(new Error(this.statusText))
				}
				this.onreadystatechange = null
				xhr = undefined
			}
		};
		xhr.send(payload)
	}
	//crossdomain
	catch (err) {
		reject(err)
	}
}

module.exports = {
	/**
	 * HTTP GET request.
	 * @param {string} url - URL to be requested.
	 */
	get: function (options, done, fail) {
		options.method = 'GET'
		httpRequest(options, done, fail)
	},
	/**
	 * HTTP POST request.
	 * @param {string} url - URL to be requested.
	 * @param {Object} [data={}] - Data, that will be sent to the service.
	 */
	post: function (options, done, fail) {
		options.method = 'POST'
		httpRequest(options, done, fail)
	},
	/**
	 * HTTP HEAD request.
	 * @param {string} url - URL to be requested.
	 */
	head: function (options, done, fail) {
		options.method = 'HEAD'
		httpRequest(options, done, fail)
	}
}