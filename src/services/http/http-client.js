'use strict'

var url = require('../../utils/url.js')
var xhr = require('./xhr.adapter.js')
var http = require('./http.adapter.js')
var nodejsEnv = (typeof process !== 'undefined' && !process.browser)
var request = nodejsEnv ? http : xhr

var service = {
	METHOD: {
		GET: 'GET',
		POST: 'POST'
  	},
	/**
	 * HTTP request.
	 * @param {Object} options={} - Request config.
	 */
	request: function (options, resolve, reject) {
		var payload
		var requestUrl = options.url
		var method = options.method
		var data = options.params
		var ETag = options.ETag
		var headers = {
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
			'If-None-Match': ETag
		}
	
		switch (true) {
			case !data:
				payload = null
				break
			case method === service.METHOD.POST:
				payload = url.format({ query: data }).slice(1)
				break
			default:
				requestUrl += url.format({ query: data })
		}
	
		request({
			method: method, 
			url: requestUrl, 
			headers: headers, 
			body: payload
		}).then(function (response) {
			var body = response.body ? JSON.parse(response.body) : undefined
			
			if (body) {
				body.ETag = response.headers.ETag
			}
			resolve(body)
		}).catch(reject)
	}
}

module.exports = service