'use strict'

var protocol = require('../utils/protocol.js')
var Endpoint = require('../types/endpoint.js')

function WorldOfTanksConsole(realm){
	var realmUrl = WorldOfTanksConsole.realms[realm]
	var apiUrl = protocol + '//' + realmUrl + '/wotx'
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
			psninfo: new Endpoint({
				url: apiUrl + '/account/psninfo'
			}),
			xuidinfo: new Endpoint({
				url: apiUrl + '/account/xuidinfo'
			})
		},
		auth: {
			login: new Endpoint({
				url: apiUrl + '/auth/login'
			}),
			logout: new Endpoint({
				url: apiUrl + '/auth/logout'
			}),
			prolongate: new Endpoint({
				url: apiUrl + '/auth/prolongate'
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
		encyclopedia: {
			crew: new Endpoint({
				deprecated: true,
				url: apiUrl + '/encyclopedia/crewroles'
			}),
			vehicles: new Endpoint({
				url: apiUrl + '/encyclopedia/vehicles'
			}),
			modules: new Endpoint({
				url: apiUrl + '/encyclopedia/vehiclepackages'
			}),
			tankUpgrades: new Endpoint({
				url: apiUrl + '/encyclopedia/vehicleupgrades'
			}),
			achievements: new Endpoint({
				url: apiUrl + '/encyclopedia/achievements'
			}),
			info: new Endpoint({
				url: apiUrl + '/encyclopedia/info'
			})
		},
		rating: {
			types: new Endpoint({
				url: apiUrl + '/ratings/types'
			}),
			dates: new Endpoint({
				url: apiUrl + '/ratings/dates'
			}),
			player: new Endpoint({
				url: apiUrl + '/ratings/accounts'
			}),
			neighbors: new Endpoint({
				url: apiUrl + '/ratings/neighbors'
			}),
			top: new Endpoint({
				url: apiUrl + '/ratings/top'
			})
		},
		tanks: {
			stats: new Endpoint({
				url: apiUrl + '/tanks/stats'
			}),
			achievements: new Endpoint({
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