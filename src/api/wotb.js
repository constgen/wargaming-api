'use strict'

var protocol = require('../utils/protocol.js')
var api = require('../services/api.js')
var endpoint = api.endpoint
var GET = api.METHOD.GET
var POST = api.METHOD.POST

function WorldOfTanksBlitz(realm) {
	var realmUrl = WorldOfTanksBlitz.realms[realm]
	var apiUrl = protocol + '//' + realmUrl + '/wotb'
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
			}),
			achievements: endpoint({
				url: apiUrl + '/account/achievements'
			}),
			stats: endpoint({
				url: apiUrl + '/account/tankstats'
			})
		},
		encyclopedia: {
			vehicles: endpoint({
				url: apiUrl + '/encyclopedia/vehicles'
			}),
			tankCharacteristics: endpoint({
				url: apiUrl + '/encyclopedia/vehicleprofile'
			}),
			modules: endpoint({
				url: apiUrl + '/encyclopedia/vehiclepackages'
			}),
			provisions: endpoint({
				url: apiUrl + '/encyclopedia/provisions'
			}),
			info: endpoint({
				url: apiUrl + '/encyclopedia/info'
			}),
			achievements: endpoint({
				url: apiUrl + '/encyclopedia/achievements'
			}),
			crew: endpoint({
				url: apiUrl + '/encyclopedia/crewroles'
			}),
			tankUpgrades: endpoint({
				url: apiUrl + '/encyclopedia/vehicleprofiles'
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
				url: apiUrl + '/clans/accountinfo'
			}),
			glossary: endpoint({
				url: apiUrl + '/clans/glossary'
			})
		},
		tanks: {
			stats: endpoint({
				url: apiUrl + '/tanks/stats'
			}),
			achievements: endpoint({
				url: apiUrl + '/tanks/achievements'
			})
		},
		message: {
			list: endpoint({
				url: apiUrl + '/clanmessages/messages'
			}),
			create: endpoint({
				url: apiUrl + '/clanmessages/create'
			}),
			delete: endpoint({
				url: apiUrl + '/clanmessages/delete'
			}),
			toggleLike: endpoint({
				url: apiUrl + '/clanmessages/like'
			}),
			likes: endpoint({
				url: apiUrl + '/clanmessages/likes'
			}),
			update: endpoint({
				url: apiUrl + '/clanmessages/update'
			})
		},
		tournament: {
			list: endpoint({
				url: apiUrl + '/tournaments/list'
			}),
			info: endpoint({
				url: apiUrl + '/tournaments/info'
			}),
			teams: endpoint({
				url: apiUrl + '/tournaments/teams'
			}),
			stages: endpoint({
				url: apiUrl + '/tournaments/stages'
			}),
			matches: endpoint({
				url: apiUrl + '/tournaments/matches'
			})
		}
	})
}

WorldOfTanksBlitz.realms = {
	'ru': 'api.wotblitz.ru',
	'eu': 'api.wotblitz.eu',
	'na': 'api.wotblitz.com',
	//'kr': 'api.wotblitz.kr',
	'asia': 'api.wotblitz.asia'
}

module.exports = WorldOfTanksBlitz