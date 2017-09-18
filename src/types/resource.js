'use strict'

var http = require('../services/http/http-client.js')
var ApiError = require('./api.error.js')
var noop = require('../utils/noop.js')
var url = require('../utils/url.js')

function Resource(options) {
	options = options || {}
	if (options.deprecated) {
		console.warn(options.url + ' resource is deprecated')
	}
	this.url = options.baseUrl + '/' + options.url
	this.helpUrl = options.baseHelpUrl + '/' + options.url + url.format({ query: options.params })
	this.method = options.method
	this.params = options.params
	this.listeners = []
	this.value = undefined
	this.state = this.STATE.UNINTIALIZED
	this.intervalId = -1
	this.fetchInterval = options.interval
}

Resource.prototype = {
	constructor: Resource,

	STATE: {
		UNINTIALIZED: 'UNINTIALIZED',
		FETCHING: 'FETCHING',
		READY: 'READY',
		ERROR: 'ERROR'
	},

	/**
	 * @private
	 */
	startListening: function () {
		var resource = this
		this.stopListening()
		//start periodic requests
		this.intervalId = setInterval(function () {
			resource.get()
		}, this.fetchInterval)
	},

	/**
	 * @private
	 */
	stopListening: function () {
		clearInterval(this.intervalId)
	},

	/**
	 * @public
	 */
	set: function (newValue) {
		var i = -1
		var listeners = this.listeners
		var oldValue = this.value

		newValue = newValue || {}
		this.state = this.STATE.READY
		this.value = newValue
		if ((oldValue && oldValue.ETag) !== newValue.ETag) {
			while (++i in listeners) {
				listeners[i](newValue)
			}
		}
		return this
	},

	/**
	 * @public
	 */
	get: function (callback, errorCallback) {
		var resource = this

		callback = callback || noop
		errorCallback = errorCallback || noop
		resource.state = resource.STATE.FETCHING
		http.request({
			url: this.url,
			method: this.method,
			params: this.params,
			ETag: this.value && this.value.ETag
		}, function (response) {
			if (response === undefined) {
				response = resource.value
			}
			if (response.status === 'ok') {
				resource.set(response)
				callback(response)
			}
			else {
				//api error
				resource.state = resource.STATE.ERROR
				errorCallback(new ApiError(response.error))
			}
		}, function (err) {
			//network error
			resource.state = resource.STATE.READY
			errorCallback(err)
		})

		return this
	},

	/**
	 * @public
	 */
	subscribe: function (callback) {
		var listeners = this.listeners

		if (typeof callback === 'function') {
			if (!listeners.length) {
				this.startListening()
			}
			listeners.push(callback)
			switch (this.state) {
				case this.STATE.UNINTIALIZED:
					this.get()
					break
				case this.STATE.READY:
					this.get(callback)
					break
				case this.STATE.ERROR:
					break
			}
		}

		return this
	},

	/**
	 * @public
	 */
	unsubscribe: function (callback) {
		var index
		var listeners = this.listeners
		//unsubscribe all
		if (callback === undefined) {
			listeners.length = 0
		}
		//unsubscribe a certain listeners
		else {
			index = listeners.indexOf(callback)
			while (~index) {
				listeners.splice(index, 1)
				index = listeners.indexOf(callback)
			}
		}
		//stop periodic requests if there are no listeners
		if (!listeners.length) {
			this.stopListening()
		}
		return this
	},

	/**
	 * @public
	 */
	help: function(){
		// If `console.table` is supported, then colors are also supported
		if (console.table) {
			console.log('%cResource Reference: %c' + this.helpUrl, 'font-weight: bold', 'color: blue')
		}
		else {
			console.log('Resource Reference: ' + this.helpUrl)
		}
		return this
	}
}

module.exports = Resource