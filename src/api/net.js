'use strict'

var protocol = require('../utils/protocol.js')
var getRealmsListing = require('../utils/get-realms-listing.js')
var api = require('../services/api.js')
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
	var realmUrl = WargamingNet.realms[realm]
	var apiUrl = protocol + '//' + realmUrl + '/wgn'
	var helpUrl = 'https://developers.wargaming.net/reference/all/wgn'

	if (!realmUrl) {
		throw new ReferenceError('Selected realm "' + realm + '" is not supported for this API. Use one of ' + getRealmsListing(REALMS))
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