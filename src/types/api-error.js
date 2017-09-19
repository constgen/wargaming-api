'use strict'

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