'use strict'

module.exports = function getResponseHeaders(xhr){
	return {
		'X-Api-Version': xhr.getResponseHeader('X-Api-Version'),
		'ETag': xhr.getResponseHeader('ETag'),
		'Content-Language': xhr.getResponseHeader('Content-Language')
	}
}