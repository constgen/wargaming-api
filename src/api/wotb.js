'use strict'

var protocol = require('../utils/protocol.js')
var Endpoint = require('../types/endpoint.js')

function WorldOfTanksBlitz(realm) {
	var realmUrl = WorldOfTanksBlitz.realms[realm]
	var apiUrl = protocol + '//' + realmUrl + '/wotb'
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
			}),
			achievements: new Endpoint({
				url: apiUrl + '/account/achievements'
			}),
			stats: new Endpoint({
				url: apiUrl + '/account/tankstats'
			})
		},
		encyclopedia: {
			vehicles: new Endpoint({
				url: apiUrl + '/encyclopedia/vehicles'
			}),
			tankCharacteristics: new Endpoint({
				url: apiUrl + '/encyclopedia/vehicleprofile'
			}),
			modules: new Endpoint({
				url: apiUrl + '/encyclopedia/vehiclepackages'
			}),
			provisions: new Endpoint({
				url: apiUrl + '/encyclopedia/provisions'
			}),
			info: new Endpoint({
				url: apiUrl + '/encyclopedia/info'
			}),
			achievements: new Endpoint({
				url: apiUrl + '/encyclopedia/achievements'
			}),
			crew: new Endpoint({
				url: apiUrl + '/encyclopedia/crewroles'
			}),
			tankUpgrades: new Endpoint({
				url: apiUrl + '/encyclopedia/vehicleprofiles'
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
				url: apiUrl + '/clans/accountinfo'
			}),
			glossary: new Endpoint({
				url: apiUrl + '/clans/glossary'
			})
		},
		tanks: {
			stats: new Endpoint({
				url: apiUrl + '/tanks/stats'
			}),
			achievements: new Endpoint({
				url: apiUrl + '/tanks/achievements'
			})
		},
		message: {
			list: new Endpoint({
				url: apiUrl + '/clanmessages/messages'
			}),
			create: new Endpoint({
				url: apiUrl + '/clanmessages/create'
			}),
			delete: new Endpoint({
				url: apiUrl + '/clanmessages/delete'
			}),
			toggleLike: new Endpoint({
				url: apiUrl + '/clanmessages/like'
			}),
			likes: new Endpoint({
				url: apiUrl + '/clanmessages/likes'
			}),
			update: new Endpoint({
				url: apiUrl + '/clanmessages/update'
			})
		},
		tournament: {
			list: new Endpoint({
				url: apiUrl + '/tournaments/list'
			}),
			info: new Endpoint({
				url: apiUrl + '/tournaments/info'
			}),
			teams: new Endpoint({
				url: apiUrl + '/tournaments/teams'
			}),
			stages: new Endpoint({
				url: apiUrl + '/tournaments/stages'
			}),
			matches: new Endpoint({
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