'use strict'

var url = require('../../utils/url.js')
var xhr = require('./xhr.adapter.js')
var http = require('./http.adapter.js')
var nodejsEnv = Boolean(require('url').parse)
var request = nodejsEnv ? http : xhr

function httpRequest(options, resolve, reject) {
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
		case method === 'POST':
			payload = url.format({ query: data }).slice(1)
			break
		default:
			requestUrl += url.format({ query: data })
	}

	request(method, requestUrl, headers, payload).then(function (response) {
		var body = response.body ? JSON.parse(response.body) : undefined
		
		if (body) {
			body.ETag = response.headers.ETag
		}
		resolve(body)
	}, reject)
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