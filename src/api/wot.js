'use strict'

var protocol = require('../utils/protocol.js')
var api = require('../services/api.js')
var endpoint = api.endpoint
var GET = api.METHOD.GET
var POST = api.METHOD.POST

function WorldOfTanks(realm){
	var realmUrl = WorldOfTanks.realms[realm]
	var apiUrl = protocol + '//' + realmUrl + '/wot'
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
				url: apiUrl + '/account/statsbydate'
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
		stronghold: {
			claninfo: endpoint({
				url: apiUrl + '/stronghold/claninfo'
			})
		},
		globalmap: {
			fronts: endpoint({
				url: apiUrl + '/globalmap/fronts'
			}),
			provinces: endpoint({
				url: apiUrl + '/globalmap/provinces'
			}),
			info: endpoint({
				url: apiUrl + '/globalmap/info'
			})
		},
		event: {
			list: endpoint({
				url: apiUrl + '/globalmap/events'
			}),
			clanInfo: endpoint({
				url: apiUrl + '/globalmap/eventclaninfo'
			}),
			playerInfo: endpoint({
				url: apiUrl + '/globalmap/eventaccountinfo'
			}),
			playerRating: endpoint({
				url: apiUrl + '/globalmap/eventaccountratings'
			}),
			playerNeighborsRating: endpoint({
				url: apiUrl + '/globalmap/eventaccountratingneighbors'
			}),
			clanRating: endpoint({
				url: apiUrl + '/globalmap/eventrating'
			}),
			clanNeighborsRating: endpoint({
				url: apiUrl + '/globalmap/eventratingneighbors'
			})
		},
		clan: {
			info: endpoint({
				url: apiUrl + '/globalmap/claninfo'
			}),
			rovinces: endpoint({
				url: apiUrl + '/globalmap/clanprovinces'
			}),
			battles: endpoint({
				url: apiUrl + '/globalmap/clanbattles'
			})
		},
		season: {
			list: endpoint({
				url: apiUrl + '/globalmap/seasons'
			}),
			clanInfo: endpoint({
				url: apiUrl + '/globalmap/seasonclaninfo'
			}),
			playerInfo: endpoint({
				url: apiUrl + '/globalmap/seasonaccountinfo'
			}),
			clanRating: endpoint({
				url: apiUrl + '/globalmap/seasonrating'
			}),
			clanNeighborsRating: endpoint({
				url: apiUrl + '/globalmap/seasonratingneighbors'
			})
		},
		encyclopedia: {
			tanks: endpoint({
				deprecated: true,
				url: apiUrl + '/encyclopedia/tanks'
			}),
			tankInfo: endpoint({
				deprecated: true,
				url: apiUrl + '/encyclopedia/tankinfo'
			}),
			vehicles: endpoint({
				url: apiUrl + '/encyclopedia/vehicles'
			}),
			vehicleProfile: endpoint({
				url: apiUrl + '/encyclopedia/vehicleprofile'
			}),
			vehicleConfigurations: endpoint({
				url: apiUrl + '/encyclopedia/vehicleprofiles'
			}),
			tankEngines: endpoint({
				deprecated: true,
				url: apiUrl + '/encyclopedia/tankengines'
			}),
			tankTurrets: endpoint({
				deprecated: true,
				url: apiUrl + '/encyclopedia/tankturrets'
			}),
			tankRadios: endpoint({
				deprecated: true,
				url: apiUrl + '/encyclopedia/tankradios'
			}),
			tankChassis: endpoint({
				deprecated: true,
				url: apiUrl + '/encyclopedia/tankchassis'
			}),
			tankWeapons: endpoint({
				deprecated: true,
				url: apiUrl + '/encyclopedia/tankguns'
			}),
			achievements: endpoint({
				url: apiUrl + '/encyclopedia/achievements'
			}),
			info: endpoint({
				url: apiUrl + '/encyclopedia/info'
			}),
			arenas: endpoint({
				url: apiUrl + '/encyclopedia/arenas'
			}),
			provisions: endpoint({
				url: apiUrl + '/encyclopedia/provisions'
			}),
			personalMissions: endpoint({
				url: apiUrl + '/encyclopedia/personalmissions'
			}),
			boosters: endpoint({
				url: apiUrl + '/encyclopedia/boosters'
			}),
			tankUpgrades: endpoint({
				url: apiUrl + '/encyclopedia/vehicleprofiles'
			}),
			modules: endpoint({
				url: apiUrl + '/encyclopedia/modules'
			})
		},
		rating: {
			types: endpoint({
				deprecated: true,
				url: apiUrl + '/ratings/types'
			}),
			dates: endpoint({
				deprecated: true,
				url: apiUrl + '/ratings/dates'
			}),
			player: endpoint({
				deprecated: true,
				url: apiUrl + '/ratings/accounts'
			}),
			neighbors: endpoint({
				deprecated: true,
				url: apiUrl + '/ratings/neighbors'
			}),
			top: endpoint({
				deprecated: true,
				url: apiUrl + '/ratings/top'
			})
		},
		clanRating: {
			types: endpoint({
				url: apiUrl + '/clanratings/types'
			}),
			dates: endpoint({
				url: apiUrl + '/clanratings/dates'
			}),
			clan: endpoint({
				url: apiUrl + '/clanratings/clans'
			}),
			neighbors: endpoint({
				url: apiUrl + '/clanratings/neighbors'
			}),
			top: endpoint({
				url: apiUrl + '/clanratings/top'
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

WorldOfTanks.realms = {
	'ru': 'api.worldoftanks.ru',
	'eu': 'api.worldoftanks.eu',
	'na': 'api.worldoftanks.com',
	'kr': 'api.worldoftanks.kr',
	'asia': 'api.worldoftanks.asia'
}

module.exports = WorldOfTanks