'use strict'

var protocol = require('../utils/protocol.js')
var api = require('../services/api.js')
var endpoint = api.endpoint
var GET = api.METHOD.GET
var POST = api.METHOD.POST

function WargamingNet(realm){
	var realmUrl = WargamingNet.realms[realm]
	var apiUrl = protocol + '//' + realmUrl + '/wgn'
	if (!realmUrl) {
		throw new ReferenceError('Requested realm "' + realm + '" is not supported for this API')
	}

	Object.assign(this, {
		account: {
			players: endpoint({
				url: apiUrl + '/account/list'
			}),
			player: endpoint({
				url: apiUrl + '/account/info'
			})
		},
		wargag: {
			content: endpoint({
				url: apiUrl + '/wargag/content'
			}),
			search: endpoint({
				url: apiUrl + '/wargag/search'
			}),
			comments: endpoint({
				url: apiUrl + '/wargag/comments'
			}),
			categories: endpoint({
				url: apiUrl + '/wargag/categories'
			}),
			rate: endpoint({
				url: apiUrl + '/wargag/rate'
			}),
			createComment: endpoint({
				url: apiUrl + '/wargag/newcomment'
			}),
			deleteComment: endpoint({
				url: apiUrl + '/wargag/deletecomment'
			})
		},
		clan: {
			list: endpoint({
				url: apiUrl + '/clans/list'
			}),
			info: endpoint({
				url: apiUrl + '/clans/info'
			}),
			playerInfo: endpoint({
				url: apiUrl + '/clans/membersinfo'
			}),
			glossary: endpoint({
				url: apiUrl + '/clans/glossary'
			}),
			messageboard: endpoint({
				url: apiUrl + '/clans/messageboard'
			})
		},
		wgTv: {
			tags: endpoint({
				url: apiUrl + '/wgtv/tags'
			}),
			videos: endpoint({
				url: apiUrl + '/wgtv/videos'
			}),
			vehicles: endpoint({
				url: apiUrl + '/wgtv/vehicles'
			})
		},
		server: {
			info: endpoint({
				url: apiUrl + '/servers/info'
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