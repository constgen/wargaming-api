'use strict'

module.exports = function(realms) {
	return Object
		.keys(realms)
		.map(function(key){
			return '"' + key + '"'
		})
		.join(', ')
}