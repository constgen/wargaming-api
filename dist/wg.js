(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("url"), require("https"), require("http"));
	else if(typeof define === 'function' && define.amd)
		define(["url", "https", "http"], factory);
	else if(typeof exports === 'object')
		exports["wg"] = factory(require("url"), require("https"), require("http"));
	else
		root["wg"] = factory(root["url"], root["https"], root["http"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_16__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// module.exports = config.requestProtocol ? (config.requestProtocol + ':') : 'http:'

module.exports = 'http:'

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getRealmsListing = __webpack_require__(8)

function RealmReferenceError(realm, realms) {
	Error.call(this)
	if (Error.captureStackTrace) {
		Error.captureStackTrace(this, this.constructor)
	}
	else {
		this.stack = (new Error()).stack
	}
	this.name = 'RealmReferenceError'
	this.message = 'Selected realm "' + realm + '" is not supported for this API. Use one of ' + getRealmsListing(realms)
}
RealmReferenceError.prototype = Object.create(ReferenceError.prototype)
RealmReferenceError.prototype.constructor = RealmReferenceError

module.exports = RealmReferenceError

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Resource = __webpack_require__(9)
var http = __webpack_require__(3)

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
        var endpoint = function (params) {
            var options = Object.assign({}, config, { params: params })
            return new Resource(options)
        }
        return endpoint
    }
}

module.exports = service

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var url = __webpack_require__(4)
var xhr = __webpack_require__(10)
var http = __webpack_require__(12)
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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	//currentlu supports only location.query{}
	format: function(location){
		var href = ''
		var search = ''
		var query = location.query

		if (typeof query === 'object') {
			search = (function(){
				var params = Object.keys(query)
				var i = -1
				var param
				var search = []
				while(++i in params) {
					param = params[i]
					search.push(param + '=' + query[param])
				}
				return search.length ? ('?' + encodeURI(search.join('&'))) : ''
			}())
		}
		
		return href + search
	}
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Wot = __webpack_require__(7)
var Wotb = __webpack_require__(20)
var Wotx = __webpack_require__(21)
var Wows = __webpack_require__(22)
var Wowp = __webpack_require__(23)
var Net = __webpack_require__(24)

module.exports = {
    version: '1.14.0',
    revision: 'aug2017',
    //Tanks
    WorldOfTanks: Wot,
    Wot: Wot,
    //Tanks Blitz
    WorldOfTanksBlitz: Wotb,
    Wotb: Wotb,
    //Tanks Consoles
    WorldOfTanksConsole: Wotx,
    Wotx: Wotx,
    //Planes
    WorldOfWarplanes: Wowp,
    Wowp: Wowp,
    //Ships
    WorldOfWarships: Wows,
    Wows: Wows,
    //Net
    WargimingNet: Net,
    Net: Net
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var protocol = __webpack_require__(0)
var RealmReferenceError = __webpack_require__(1)
var api = __webpack_require__(2)
var endpoint = api.endpoint
var GET = api.METHOD.GET
var POST = api.METHOD.POST

var REALMS = {
	'ru': 'api.worldoftanks.ru',
	'eu': 'api.worldoftanks.eu',
	'na': 'api.worldoftanks.com',
	'kr': 'api.worldoftanks.kr',
	'asia': 'api.worldoftanks.asia'
}

function WorldOfTanks(realm){
	var realmUrl = REALMS[realm]
	var apiUrl = protocol + '//' + realmUrl + '/wot'
	var helpUrl = 'https://developers.wargaming.net/reference/all/wot'

	if (!realmUrl) {
		throw new RealmReferenceError(realm, REALMS)
	}

	Object.assign(this, {
		account: {
			/**
			 * Players
			 */
			list: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'account/list'
			}),
			/**
			 * Player
			 */
			info: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'account/info'
			}),
			achievements: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'account/achievements'
			}),
			statsbydate: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'account/statsbydate'
			})
		},
		auth: {
			login: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'auth/login'
			}),
			logout: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'auth/logout'
			}),
			prolongate: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'auth/prolongate'
			})
		},
		stronghold: {
			claninfo: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'stronghold/claninfo'
			})
		},
		globalmap: {
			fronts: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/fronts'
			}),
			provinces: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/provinces'
			}),
			info: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/info'
			}),
			events: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/events'
			}),
			eventclaninfo: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/eventclaninfo'
			}),
			eventaccountinfo: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/eventaccountinfo'
			}),
			eventaccountratings: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/eventaccountratings'
			}),
			eventaccountratingneighbors: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/eventaccountratingneighbors'
			}),
			eventrating: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/eventrating'
			}),
			eventratingneighbors: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/eventratingneighbors'
			}),
			claninfo: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/claninfo'
			}),
			clanprovinces: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url:  'globalmap/clanprovinces'
			}),
			clanbattles: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/clanbattles'
			}),
			seasons: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/seasons'
			}),
			seasonclaninfo: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/seasonclaninfo'
			}),
			seasonaccountinfo: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/seasonaccountinfo'
			}),
			seasonrating: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/seasonrating'
			}),
			seasonratingneighbors: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/seasonratingneighbors'
			})
		},
		encyclopedia: {
			tanks: endpoint({
				deprecated: true,
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/tanks'
			}),
			tankinfo: endpoint({
				deprecated: true,
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/tankinfo'
			}),
			vehicles: endpoint({
				url: 'encyclopedia/vehicles'
			}),
			vehicleprofile: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/vehicleprofile'
			}),
			vehicleprofiles: endpoint({
				url: 'encyclopedia/vehicleprofiles'
			}),
			tankengines: endpoint({
				deprecated: true,
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/tankengines'
			}),
			tankturrets: endpoint({
				deprecated: true,
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/tankturrets'
			}),
			tankradios: endpoint({
				deprecated: true,
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/tankradios'
			}),
			tankchassis: endpoint({
				deprecated: true,
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/tankchassis'
			}),
			tankguns: endpoint({
				deprecated: true,
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/tankguns'
			}),
			achievements: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/achievements'
			}),
			info: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/info'
			}),
			arenas: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/arenas'
			}),
			provisions: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/provisions'
			}),
			personalmissions: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/personalmissions'
			}),
			boosters: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/boosters'
			}),
			/**
			 * Tank upgrades
			 */
			vehicleprofiles: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/vehicleprofiles'
			}),
			modules: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/modules'
			})
		},
		ratings: {
			types: endpoint({
				deprecated: true,
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'ratings/types'
			}),
			dates: endpoint({
				deprecated: true,
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'ratings/dates'
			}),
			/**
			 * Players
			 */
			accounts: endpoint({
				deprecated: true,
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'ratings/accounts'
			}),
			neighbors: endpoint({
				deprecated: true,
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'ratings/neighbors'
			}),
			top: endpoint({
				deprecated: true,
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'ratings/top'
			})
		},
		clanratings: {
			types: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clanratings/types'
			}),
			dates: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clanratings/dates'
			}),
			clan: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clanratings/clans'
			}),
			neighbors: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clanratings/neighbors'
			}),
			top: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clanratings/top'
			})
		},
		tanks: {
			stats: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'tanks/stats'
			}),
			achievements: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'tanks/achievements'
			})
		}
	})
}

WorldOfTanks.realms = REALMS

module.exports = WorldOfTanks

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(realms) {
	return Object
		.keys(realms)
		.map(function(key){
			return '"' + key + '"'
		})
		.join(', ')
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var http = __webpack_require__(3)
var ApiError = __webpack_require__(17)
var noop = __webpack_require__(18)
var logError = __webpack_require__(19)
var url = __webpack_require__(4)

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
		errorCallback = errorCallback || logError
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

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getXhrHeaders = __webpack_require__(11)

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




/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function getXhrHeaders(xhr){
	return {
		'X-Api-Version': xhr.getResponseHeader('X-Api-Version'),
		'ETag': xhr.getResponseHeader('ETag'),
		'Content-Language': xhr.getResponseHeader('Content-Language')
	}
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var url = __webpack_require__(13)

var getResponseHeaders = __webpack_require__(14)

module.exports = function httpAdapter(options) {
	var method = options.method
	var requestUrl = options.url
	var headers = options.headers
	var payload = options.body
	var location = url.parse(requestUrl)
	var hostname = location.hostname
	var port = location.port
	var urlPath = location.path
	var protocol = location.protocol
	var http = __webpack_require__((protocol === 'https:') ? 15 : 16)
	var httpOptions = {
		hostname: hostname,
		port: port,
		path: urlPath,
		method: method.toUpperCase(),
		agent: new http.Agent({
			//rejectUnauthorized: true,
			//maxSockets: 20,
			keepAlive: true,
			headers: headers
		})
	}

	return new Promise(function (resolve, reject) {
		var request = http.request(httpOptions, function (response) {
			var body = []
			
			switch (response.statusCode){
				case 301:
				case 302:
					//redirect
					httpAdapter(method, response.headers.location, headers, payload).then(resolve, reject)
					break
				case 304:
					resolve({
						body: undefined,
						headers: getResponseHeaders(response)
					})
					break
				case 200:
					response.on('data', function (chunk) {
						//progress
						body.push(chunk)
					});
					response.on('end', function () {
						//done
						resolve({
							body: body.join(''),
							headers: getResponseHeaders(response)
						})
					})
					break
				default:
					//error
					reject(new Error('Status code ' + response.statusCode))
			}
		}).on('error', function (err) {
			reject(err) //error
		})

		if (payload) {
			request.write(payload)
		}

		request.end()
	})
}





/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function getResponseHeaders(response){
	return {
		'X-Api-Version': response.headers['x-api-version'],
		'ETag': response.headers['etag'],
		'Content-Language': response.headers['content-language']
	}
}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ApiError(error) {
	this.name = 'ApiError'
	this.message = error.message
	this.code = error.code
	this.field = error.field
	this.value = error.value
}
ApiError.prototype = Object.create(Error.prototype)
ApiError.prototype.constructor = ApiError

module.exports = ApiError

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(){}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(err){
	console.error(err)
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var protocol = __webpack_require__(0)
var RealmReferenceError = __webpack_require__(1)
var api = __webpack_require__(2)
var endpoint = api.endpoint

var REALMS = {
	'ru': 'api.wotblitz.ru',
	'eu': 'api.wotblitz.eu',
	'na': 'api.wotblitz.com',
	//'kr': 'api.wotblitz.kr',
	'asia': 'api.wotblitz.asia'
}

function WorldOfTanksBlitz(realm) {
	var realmUrl = REALMS[realm]
	var apiUrl = protocol + '//' + realmUrl + '/wotb'
	var helpUrl = 'https://developers.wargaming.net/reference/all/wotb'

	if (!realmUrl) {
		throw new RealmReferenceError(realm, REALMS)
	}

	Object.assign(this, {
		account: {
			/**
			 * Players
			 */
			list: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'account/list'
			}),
			/**
			 * Player
			 */
			info: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'account/info'
			}),
			achievements: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'account/achievements'
			}),
			tankstats: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'account/tankstats'
			})
		},
		encyclopedia: {
			vehicles: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/vehicles'
			}),
			/**
			 * Tank characteristics
			 */
			vehicleprofile: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/vehicleprofile'
			}),
			/**
			 * Modules
			 */
			vehiclepackages: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/vehiclepackages'
			}),
			provisions: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/provisions'
			}),
			info: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/info'
			}),
			achievements: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/achievements'
			}),
			/**
			 * Crew
			 */
			crewroles: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/crewroles'
			}),
			/**
			 * Tank upgrades
			 */
			vehicleprofiles: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/vehicleprofiles'
			})
		},
		clans: {
			list: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clans/list'
			}),
			info: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clans/info'
			}),
			/**
			 * Player info
			 */
			accountinfo: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clans/accountinfo'
			}),
			glossary: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clans/glossary'
			})
		},
		tanks: {
			stats: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'tanks/stats'
			}),
			achievements: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'tanks/achievements'
			})
		},
		clanmessages: {
			messages: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clanmessages/messages'
			}),
			create: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clanmessages/create'
			}),
			delete: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clanmessages/delete'
			}),
			/**
			 * Toggle like
			 */
			like: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clanmessages/like'
			}),
			likes: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clanmessages/likes'
			}),
			update: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clanmessages/update'
			})
		},
		tournaments: {
			list: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'tournaments/list'
			}),
			info: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'tournaments/info'
			}),
			teams: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'tournaments/teams'
			}),
			stages: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'tournaments/stages'
			}),
			matches: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'tournaments/matches'
			})
		}
	})
}

WorldOfTanksBlitz.realms = REALMS

module.exports = WorldOfTanksBlitz

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var protocol = __webpack_require__(0)
var RealmReferenceError = __webpack_require__(1)
var api = __webpack_require__(2)
var endpoint = api.endpoint
var GET = api.METHOD.GET
var POST = api.METHOD.POST

var REALMS = {
	'xbox': 'api-xbox-console.worldoftanks.com',
	'ps4': 'api-ps4-console.worldoftanks.com'
}

function WorldOfTanksConsole(realm){
	var realmUrl = REALMS[realm]
	var apiUrl = protocol + '//' + realmUrl + '/wotx'
	var helpUrl = 'https://developers.wargaming.net/reference/all/wotx'

	if (!realmUrl) {
		throw new RealmReferenceError(realm, REALMS)
	}

	Object.assign(this, {
		account: {
			/**
			 * Players
			 */
			list: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'account/list'
			}),
			/**
			 * Player
			 */
			info: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'account/info'
			}),
			achievements: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'account/achievements'
			}),
			psninfo: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'account/psninfo'
			}),
			xuidinfo: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'account/xuidinfo'
			})
		},
		auth: {
			login: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'auth/login'
			}),
			logout: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'auth/logout'
			}),
			prolongate: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'auth/prolongate'
			})
		},
		clans: {
			list: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clans/list'
			}),
			info: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clans/info'
			}),
			/**
			 * Player info
			 */
			accountinfo: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clans/accountinfo'
			}),
			glossary: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clans/glossary'
			})
		},
		encyclopedia: {
			/**
			 * Crew
			 */
			crewroles: endpoint({
				deprecated: true,
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/crewroles'
			}),
			vehicles: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/vehicles'
			}),
			/**
			 * Modules
			 */
			vehiclepackages: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/vehiclepackages'
			}),
			/**
			 * Tank upgrades
			 */
			vehicleupgrades: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/vehicleupgrades'
			}),
			achievements: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/achievements'
			}),
			info: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/info'
			})
		},
		ratings: {
			types: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'ratings/types'
			}),
			dates: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'ratings/dates'
			}),
			/**
			 * Players
			 */
			accounts: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'ratings/accounts'
			}),
			neighbors: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'ratings/neighbors'
			}),
			top: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'ratings/top'
			})
		},
		tanks: {
			stats: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'tanks/stats'
			}),
			achievements: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'tanks/achievements'
			})
		}
	})
}

WorldOfTanksConsole.realms = REALMS

module.exports = WorldOfTanksConsole

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var protocol = __webpack_require__(0)
var RealmReferenceError = __webpack_require__(1)
var api = __webpack_require__(2)
var endpoint = api.endpoint

var REALMS = {
	'ru': 'api.worldofwarships.ru',
	'eu': 'api.worldofwarships.eu',
	'na': 'api.worldofwarships.com',
	//'kr': 'api.worldofwarships.kr',
	'asia': 'api.worldofwarships.asia'
}

function WorldOfWarships(realm){
	var realmUrl = REALMS[realm]
	var apiUrl = protocol + '//' + realmUrl + '/wows'
	var helpUrl = 'https://developers.wargaming.net/reference/all/wows'

	if (!realmUrl) {
		throw new RealmReferenceError(realm, REALMS)
	}

	Object.assign(this, {
		account: {
			/**
			 * Players
			 */
			list: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'account/list'
			}),
			/**
			 * Player
			 */
			info: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'account/info'
			}),
			achievements: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'account/achievements'
			}),
			statsbydate: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'account/statsbydate'
			})
		},
		ships: {
			stats: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'ships/stats'
			})
		},
		encyclopedia: {
			ships: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/ships'
			}),
			/**
			 * Ship info
			 */
			shipprofile: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/shipprofile'
			}),
			modules: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/modules'
			}),
			consumables: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/consumables'
			}),
			accountlevels: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/accountlevels'
			}),
			/**
			 * Commanders
			 */
			crews: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/crews'
			}),
			/**
			 * Commander skills
			 */
			crewskills: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/crewskills'
			}),
			/**
			 * Commander ranks
			 */
			crewranks: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/crewranks'
			}),
			battletypes: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/battletypes'
			}),
			achievements: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/achievements'
			}),
			info: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/info'
			}),
			collections: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/collections'
			}),
			/**
			 * Collection items
			 */
			collectioncards: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/collectioncards'
			})
		},
		seasons: {
			/**
			 * Seasons list
			 */
			info: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'seasons/info'
			}),
			shipstats: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'seasons/shipstats'
			}),
			/**
			 * Player stats
			 */
			accountinfo: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'seasons/accountinfo'
			})
		},
		clans: {
			list: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clans/list'
			}),
			info: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clans/info'
			}),
			accountinfo: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clans/accountinfo'
			}),
			glossary: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clans/glossary'
			})
		}
	})
}

WorldOfWarships.realms = REALMS

module.exports = WorldOfWarships

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var protocol = __webpack_require__(0)
var RealmReferenceError = __webpack_require__(1)
var api = __webpack_require__(2)
var endpoint = api.endpoint

var REALMS = {
	'ru': 'api.worldofwarplanes.ru',
	'eu': 'api.worldofwarplanes.eu',
	'na': 'api.worldofwarplanes.com'
	//'kr': 'api.worldofwarplanes.kr',
	//'asia': 'api.worldofwarplanes.asia'
}

function WorldOfWarplanes(realm) {
	var realmUrl = REALMS[realm]
	var apiUrl = protocol + '//' + realmUrl + '/wowp'
	var helpUrl = 'https://developers.wargaming.net/reference/all/wowp'

	if (!realmUrl) {
		throw new RealmReferenceError(realm, REALMS)
	}

	Object.assign(this, {
		account: {
			/**
			 * Players
			 */
			list: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'account/list'
			}),
			/**
			 * Player
			 */
			info: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'account/info'
			}),
			planes: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'account/planes'
			})
		},
		encyclopedia: {
			planes: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/planes'
			}),
			planeinfo: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/planeinfo'
			}),
			planemodules: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/planemodules'
			}),
			planeupgrades: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/planeupgrades'
			}),
			planespecification: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/planespecification'
			}),
			achievements: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/achievements'
			}),
			info: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/info'
			})
		},
		ratings: {
			types: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'ratings/types'
			}),
			/**
			 * Player
			 */
			accounts: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'ratings/accounts'
			}),
			neighbors: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'ratings/neighbors'
			}),
			top: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'ratings/top'
			}),
			dates: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'ratings/dates'
			})
		}
	})
}

WorldOfWarplanes.realms = REALMS

module.exports = WorldOfWarplanes

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var protocol = __webpack_require__(0)
var RealmReferenceError = __webpack_require__(1)
var api = __webpack_require__(2)
var endpoint = api.endpoint
var GET = api.METHOD.GET
var POST = api.METHOD.POST

var REALMS = {
	'ru': 'api.worldoftanks.ru',
	'eu': 'api.worldoftanks.eu',
	'na': 'api.worldoftanks.com',
	'kr': 'api.worldoftanks.kr',
	'asia': 'api.worldoftanks.asia'
}

function WargamingNet(realm){
	var realmUrl = REALMS[realm]
	var apiUrl = protocol + '//' + realmUrl + '/wgn'
	var helpUrl = 'https://developers.wargaming.net/reference/all/wgn'

	if (!realmUrl) {
		throw new RealmReferenceError(realm, REALMS)
	}

	Object.assign(this, {
		account: {
			/**
			 * Players
			 */
			list: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'account/list'
			}),
			/**
			 * Player
			 */
			info: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'account/info'
			})
		},
		wargag: {
			content: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'wargag/content'
			}),
			search: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'wargag/search'
			}),
			comments: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'wargag/comments'
			}),
			categories: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'wargag/categories'
			}),
			rate: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'wargag/rate'
			}),
			newcomment: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'wargag/newcomment'
			}),
			deletecomment: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'wargag/deletecomment'
			})
		},
		clans: {
			list: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clans/list'
			}),
			info: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clans/info'
			}),
			membersinfo: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clans/membersinfo'
			}),
			glossary: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clans/glossary'
			}),
			messageboard: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clans/messageboard'
			})
		},
		wgtv: {
			tags: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'wgtv/tags'
			}),
			videos: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'wgtv/videos'
			}),
			vehicles: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'wgtv/vehicles'
			})
		},
		servers: {
			info: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'servers/info'
			})
		}
	})
}

WargamingNet.realms = REALMS

module.exports = WargamingNet

/***/ })
/******/ ]);
});
//# sourceMappingURL=wg.js.map