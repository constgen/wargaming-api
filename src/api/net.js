'use strict'

var config = require('config')
var protocol = require('../utils/protocol.js')
var Endpoint = require('../types/endpoint.js')

function WargamingNet(realm){
	var realmUrl = WargamingNet.realms[realm]
	var apiUrl = protocol + '//' + realmUrl + '/wgn'
	if (!realmUrl) {
		throw new ReferenceError('Requested realm "' + realm + '" is not supported for this API')
	}

	Object.assign(this, {
		account: {
			players: new Endpoint({
				url: apiUrl + '/account/list'
			}),
			player: new Endpoint({
				url: apiUrl + '/account/info'
			})
		},
		wargag: {
			content: new Endpoint({
				url: apiUrl + '/wargag/content'
			}),
			search: new Endpoint({
				url: apiUrl + '/wargag/search'
			}),
			comments: new Endpoint({
				url: apiUrl + '/wargag/comments'
			}),
			categories: new Endpoint({
				url: apiUrl + '/wargag/categories'
			}),
			rate: new Endpoint({
				url: apiUrl + '/wargag/rate'
			}),
			createComment: new Endpoint({
				url: apiUrl + '/wargag/newcomment'
			}),
			deleteComment: new Endpoint({
				url: apiUrl + '/wargag/deletecomment'
			})
		},
		league: {
			list: new Endpoint({
				url: apiUrl + '/league/leagues'
			}),
			tournaments: new Endpoint({
				url: apiUrl + '/league/tournaments'
			}),
			grid: new Endpoint({
				url: apiUrl + '/league/grid'
			}),
			tournamentMatches: new Endpoint({
				url: apiUrl + '/league/matches'
			}),
			teams: new Endpoint({
				url: apiUrl + '/league/teams'
			}),
			teamInfo: new Endpoint({
				url: apiUrl + '/league/teaminfo'
			}),
			hallOfFame: new Endpoint({
				url: apiUrl + '/league/halloffame'
			}),
			players: new Endpoint({
				url: apiUrl + '/league/players'
			}),
			playerInfo: new Endpoint({
				url: apiUrl + '/league/playerinfo'
			})
		},
		clan: {
			list: new Endpoint({
				url: apiUrl + '/clans/list'
			}),
			info: new Endpoint({
				url: apiUrl + '/clans/info'
			}),
			playerInfo: new Endpoint({
				url: apiUrl + '/clans/membersinfo'
			}),
			glossary: new Endpoint({
				url: apiUrl + '/clans/glossary'
			}),
			messageboard: new Endpoint({
				url: apiUrl + '/clans/messageboard'
			})
		},
		wgTv: {
			tags: new Endpoint({
				url: apiUrl + '/wgtv/tags'
			}),
			videos: new Endpoint({
				url: apiUrl + '/wgtv/videos'
			}),
			vehicles: new Endpoint({
				url: apiUrl + '/wgtv/vehicles'
			})
		},
		server: {
			info: new Endpoint({
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