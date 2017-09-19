'use strict'

var getRealmsListing = require('../utils/get-realms-listing.js')

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