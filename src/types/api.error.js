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

ApiError.prototype.CODE = {
		AUTH_CANCEL: 401,
	FIELD_NOT_SPECIFIED: 402,
			SEARCH_NOT_SPECIFIED: 402,
		AUTH_EXPIRED: 403,
	FIELD_NOT_FOUND: 404,
	METHOD_NOT_FOUND: 404,
	METHOD_DISABLED: 405,
	FIELD_LIST_LIMIT_EXCEEDED: 407,
	APPLICATION_IS_BLOCKED: 407,
	INVALID_FIELD: 407,
	INVALID_APPLICATION_ID: 407,
	INVALID_IP_ADDRESS: 407,
	REQUEST_LIMIT_EXCEEDED: 407,
			NOT_ENOUGH_SEARCH_LENGTH: 407,
		AUTH_ERROR: 410,
	SOURCE_NOT_AVAILABLE: 504
}

module.exports = ApiError