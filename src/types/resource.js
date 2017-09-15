'use strict'

var http = require('../services/http/http-client.js')
var ApiError = require('./api.error.js')
var noop = require('../utils/noop.js')
var api

function Resource(options) {
	api = api || require('../services/api.js')
	options = options || {}
	if (options.deprecated) {
		console.warn(options.url + ' resource is deprecated')
	}
	this.url = options.url
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
		UNINTIALIZED: 0,
		FETCHING: 1,
		READY: 2,
		ERROR: 3
	},

	/**
	 * @private
	 */
	startListening: function () {
		var resource = this
		this.stopListening()
		//start periodic requests
		this.intervalId = setInterval(function () {
			resource.options()
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
		var request = (this.method === api.METHOD.POST) ? http.post : http.get

		callback = callback || noop
		errorCallback = errorCallback || noop
		resource.state = resource.STATE.FETCHING
		request({
			url: this.url,
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
	}
}

module.exports = Resource