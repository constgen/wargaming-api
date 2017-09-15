'use strict'

var url = require('url')

var getResponseHeaders = require('../../utils/get-response-headers.js')

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
	var http = require((protocol === 'https:') ? 'https' : 'http')
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



