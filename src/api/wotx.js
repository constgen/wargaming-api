'use strict'

var protocol = require('../utils/protocol.js')
var api = require('../services/api.js')
var endpoint = api.endpoint
var GET = api.METHOD.GET
var POST = api.METHOD.POST

function WorldOfTanksConsole(realm){
	var realmUrl = WorldOfTanksConsole.realms[realm]
	var apiUrl = protocol + '//' + realmUrl + '/wotx'
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
			psninfo: endpoint({
				url: apiUrl + '/account/psninfo'
			}),
			xuidinfo: endpoint({
				url: apiUrl + '/account/xuidinfo'
			})
		},
		auth: {
			login: endpoint({
				url: apiUrl + '/auth/login'
			}),
			logout: endpoint({
				url: apiUrl + '/auth/logout'
			}),
			prolongate: endpoint({
				url: apiUrl + '/auth/prolongate'
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
		encyclopedia: {
			crew: endpoint({
				deprecated: true,
				url: apiUrl + '/encyclopedia/crewroles'
			}),
			vehicles: endpoint({
				url: apiUrl + '/encyclopedia/vehicles'
			}),
			modules: endpoint({
				url: apiUrl + '/encyclopedia/vehiclepackages'
			}),
			tankUpgrades: endpoint({
				url: apiUrl + '/encyclopedia/vehicleupgrades'
			}),
			achievements: endpoint({
				url: apiUrl + '/encyclopedia/achievements'
			}),
			info: endpoint({
				url: apiUrl + '/encyclopedia/info'
			})
		},
		rating: {
			types: endpoint({
				url: apiUrl + '/ratings/types'
			}),
			dates: endpoint({
				url: apiUrl + '/ratings/dates'
			}),
			player: endpoint({
				url: apiUrl + '/ratings/accounts'
			}),
			neighbors: endpoint({
				url: apiUrl + '/ratings/neighbors'
			}),
			top: endpoint({
				url: apiUrl + '/ratings/top'
			})
		},
		tanks: {
			stats: endpoint({
				url: apiUrl + '/tanks/stats'
			}),
			achievements: endpoint({
				url: apiUrl + '/tanks/achievements'
			})
		}
	})
}

WorldOfTanksConsole.realms = {
	'xbox': 'api-xbox-console.worldoftanks.com',
	'ps4': 'api-ps4-console.worldoftanks.com'
}

module.exports = WorldOfTanksConsole