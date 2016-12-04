'use strict'

var url = require('url')

module.exports = function(method, requestUrl, headers, payload){
	var request
	var location = url.parse(requestUrl)
	var hostname = location.hostname
	var port = location.port
	var urlPath = location.path
	var protocol = location.protocol

	var http = require((protocol === 'https:') ? 'https' : 'http')

	var options = {
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

	request = http.get(options, function (response) {
		if ([301, 302].indexOf(response.statusCode) > -1) {
			//redirect
			return loadOverHttp(response.headers.location, destinationPath);
		}
		else if (response.statusCode === 200) {
			response.on('end', function () {
				//done
			});
		}
		else {
			//error
			return;
		}
	}).on('error', function (err) {
		reject(err); //error
	});
}



