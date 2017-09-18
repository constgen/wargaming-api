'use strict'

var protocol = require('../utils/protocol.js')
var api = require('../services/api.js')
var endpoint = api.endpoint
var GET = api.METHOD.GET
var POST = api.METHOD.POST

function WargamingNet(realm){
	var realmUrl = WargamingNet.realms[realm]
	var apiUrl = protocol + '//' + realmUrl + '/wgn'
	var helpUrl = 'https://developers.wargaming.net/reference/all/wgn'

	if (!realmUrl) {
		throw new ReferenceError('Requested realm "' + realm + '" is not supported for this API')
	}

	Object.assign(this, {
		account: {
			players: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'account/list'
			}),
			player: endpoint({
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
			createComment: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'wargag/newcomment'
			}),
			deleteComment: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'wargag/deletecomment'
			})
		},
		clan: {
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
			playerInfo: endpoint({
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
		wgTv: {
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
		server: {
			info: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'servers/info'
			})
		}
	})
}

WargamingNet.realms = {
	'ru': 'api.worldoftanks.ru',
	'eu': 'api.worldoftanks.eu',
	'na': 'api.worldoftanks.com',
	'kr': 'api.worldoftanks.kr',
	'asia': 'api.worldoftanks.asia'
}

module.exports = WargamingNet