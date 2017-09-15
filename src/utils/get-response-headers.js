'use strict'

module.exports = function getResponseHeaders(response){
	return {
		'X-Api-Version': response.headers['x-api-version'],
		'ETag': response.headers['etag'],
		'Content-Language': response.headers['content-language']
	}
}