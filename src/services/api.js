'use strict'

var Resource = require('../types/resource.js')
var http = require('../services/http/http-client.js')

var service = {
	DEFAULT_UPDATE_INTERVAL: 15000,
	METHOD: http.METHOD,

	endpoint: function (config) {
		config = config || {}
		config.url = config.url + '/' //needs trailing slash for correct work
		config.method = config.method || service.METHOD.GET
		if (!(config.method in service.METHOD)) {
			throw new Error('Unsupported endpoint method "'+ config.method + '" for '+ config.url)
		}
		config.interval = config.interval || service.DEFAULT_UPDATE_INTERVAL
		return function (params) {
			var options = Object.assign({}, config, { params: params })
			return new Resource(options)
		}
	}
}

module.exports = service