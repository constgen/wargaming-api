'use strict'

var protocol = require('../utils/protocol.js')
var Endpoint = require('../types/endpoint.js')

function WorldOfTanks(realm){
	var realmUrl = WorldOfTanks.realms[realm]
	var apiUrl = protocol + '//' + realmUrl + '/wot'
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
				url: apiUrl + '/account/statsbydate'
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
		stronghold: {
			info: new Endpoint({
				url: apiUrl + '/stronghold/info'
			}),
			buildings: new Endpoint({
				url: apiUrl + '/stronghold/buildings'
			}),
			playerStats: new Endpoint({
				url: apiUrl + '/stronghold/accountstats'
			}),
			battles: new Endpoint({
				url: apiUrl + '/stronghold/plannedbattles'
			})
		},
		globalmap: {
			fronts: new Endpoint({
				url: apiUrl + '/globalmap/fronts'
			}),
			provinces: new Endpoint({
				url: apiUrl + '/globalmap/provinces'
			}),
			info: new Endpoint({
				url: apiUrl + '/globalmap/info'
			})
		},
		event: {
			list: new Endpoint({
				url: apiUrl + '/globalmap/events'
			}),
			clanInfo: new Endpoint({
				url: apiUrl + '/globalmap/eventclaninfo'
			}),
			playerInfo: new Endpoint({
				url: apiUrl + '/globalmap/eventaccountinfo'
			}),
			playerRating: new Endpoint({
				url: apiUrl + '/globalmap/eventaccountratings'
			}),
			playerNeighborsRating: new Endpoint({
				url: apiUrl + '/globalmap/eventaccountratingneighbors'
			}),
			clanRating: new Endpoint({
				url: apiUrl + '/globalmap/eventrating'
			}),
			clanNeighborsRating: new Endpoint({
				url: apiUrl + '/globalmap/eventratingneighbors'
			})
		},
		clan: {
			info: new Endpoint({
				url: apiUrl + '/globalmap/claninfo'
			}),
			rovinces: new Endpoint({
				url: apiUrl + '/globalmap/clanprovinces'
			}),
			battles: new Endpoint({
				url: apiUrl + '/globalmap/clanbattles'
			})
		},
		season: {
			list: new Endpoint({
				url: apiUrl + '/globalmap/seasons'
			}),
			clanInfo: new Endpoint({
				url: apiUrl + '/globalmap/seasonclaninfo'
			}),
			playerInfo: new Endpoint({
				url: apiUrl + '/globalmap/seasonaccountinfo'
			}),
			clanRating: new Endpoint({
				url: apiUrl + '/globalmap/seasonrating'
			}),
			clanNeighborsRating: new Endpoint({
				url: apiUrl + '/globalmap/seasonratingneighbors'
			})
		},
		encyclopedia: {
			tanks: new Endpoint({
				deprecated: true,
				url: apiUrl + '/encyclopedia/tanks'
			}),
			tankInfo: new Endpoint({
				deprecated: true,
				url: apiUrl + '/encyclopedia/tankinfo'
			}),
			vehicles: new Endpoint({
				url: apiUrl + '/encyclopedia/vehicles'
			}),
			vehicleProfile: new Endpoint({
				url: apiUrl + '/encyclopedia/vehicleprofile'
			}),
			tankEngines: new Endpoint({
				deprecated: true,
				url: apiUrl + '/encyclopedia/tankengines'
			}),
			tankTurrets: new Endpoint({
				deprecated: true,
				url: apiUrl + '/encyclopedia/tankturrets'
			}),
			tankRadios: new Endpoint({
				deprecated: true,
				url: apiUrl + '/encyclopedia/tankradios'
			}),
			tankChassis: new Endpoint({
				deprecated: true,
				url: apiUrl + '/encyclopedia/tankchassis'
			}),
			tankWeapons: new Endpoint({
				deprecated: true,
				url: apiUrl + '/encyclopedia/tankguns'
			}),
			achievements: new Endpoint({
				url: apiUrl + '/encyclopedia/achievements'
			}),
			info: new Endpoint({
				url: apiUrl + '/encyclopedia/info'
			}),
			arenas: new Endpoint({
				url: apiUrl + '/encyclopedia/arenas'
			}),
			provisions: new Endpoint({
				url: apiUrl + '/encyclopedia/provisions'
			}),
			personalMissions: new Endpoint({
				url: apiUrl + '/encyclopedia/personalmissions'
			}),
			boosters: new Endpoint({
				url: apiUrl + '/encyclopedia/boosters'
			}),
			tankUpgrades: new Endpoint({
				url: apiUrl + '/encyclopedia/vehicleprofiles'
			}),
			modules: new Endpoint({
				url: apiUrl + '/encyclopedia/modules'
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
		clanRating: {
			types: new Endpoint({
				url: apiUrl + '/clanratings/types'
			}),
			dates: new Endpoint({
				url: apiUrl + '/clanratings/dates'
			}),
			clan: new Endpoint({
				url: apiUrl + '/clanratings/clans'
			}),
			neighbors: new Endpoint({
				url: apiUrl + '/clanratings/neighbors'
			}),
			top: new Endpoint({
				url: apiUrl + '/clanratings/top'
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
		teams: {
			list: new Endpoint({
				url: apiUrl + '/regularteams/list'
			}),
			info: new Endpoint({
				url: apiUrl + '/regularteams/info'
			}),
			memberInfo: new Endpoint({
				url: apiUrl + '/regularteams/memberinfo'
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