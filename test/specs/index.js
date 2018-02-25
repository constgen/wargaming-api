'use strict'

var wg = require('../../src/index.js')
var manifest = require('../../package.json')

it('wg ' + manifest.version, function(){
	expect(wg).toBeDefined()
})


