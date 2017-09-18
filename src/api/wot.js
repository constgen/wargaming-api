'use strict'

var protocol = require('../utils/protocol.js')
var api = require('../services/api.js')
var endpoint = api.endpoint
var GET = api.METHOD.GET
var POST = api.METHOD.POST

function WorldOfTanks(realm){
	var realmUrl = WorldOfTanks.realms[realm]
	var apiUrl = protocol + '//' + realmUrl + '/wot'
	var helpUrl = 'https://developers.wargaming.net/reference/all/wot'

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
			}),
			achievements: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'account/achievements'
			}),
			stats: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'account/statsbydate'
			})
		},
		auth: {
			login: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'auth/login'
			}),
			logout: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'auth/logout'
			}),
			prolongate: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'auth/prolongate'
			})
		},
		stronghold: {
			claninfo: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'stronghold/claninfo'
			})
		},
		globalmap: {
			fronts: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/fronts'
			}),
			provinces: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/provinces'
			}),
			info: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/info'
			})
		},
		event: {
			list: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/events'
			}),
			clanInfo: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/eventclaninfo'
			}),
			playerInfo: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/eventaccountinfo'
			}),
			playerRating: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/eventaccountratings'
			}),
			playerNeighborsRating: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/eventaccountratingneighbors'
			}),
			clanRating: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/eventrating'
			}),
			clanNeighborsRating: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/eventratingneighbors'
			})
		},
		clan: {
			info: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/claninfo'
			}),
			rovinces: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url:  'globalmap/clanprovinces'
			}),
			battles: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/clanbattles'
			})
		},
		season: {
			list: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/seasons'
			}),
			clanInfo: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/seasonclaninfo'
			}),
			playerInfo: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/seasonaccountinfo'
			}),
			clanRating: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/seasonrating'
			}),
			clanNeighborsRating: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/seasonratingneighbors'
			})
		},
		encyclopedia: {
			tanks: endpoint({
				deprecated: true,
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/tanks'
			}),
			tankInfo: endpoint({
				deprecated: true,
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/tankinfo'
			}),
			vehicles: endpoint({
				url: 'encyclopedia/vehicles'
			}),
			vehicleProfile: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/vehicleprofile'
			}),
			vehicleConfigurations: endpoint({
				url: 'encyclopedia/vehicleprofiles'
			}),
			tankEngines: endpoint({
				deprecated: true,
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/tankengines'
			}),
			tankTurrets: endpoint({
				deprecated: true,
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/tankturrets'
			}),
			tankRadios: endpoint({
				deprecated: true,
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/tankradios'
			}),
			tankChassis: endpoint({
				deprecated: true,
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/tankchassis'
			}),
			tankWeapons: endpoint({
				deprecated: true,
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/tankguns'
			}),
			achievements: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/achievements'
			}),
			info: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/info'
			}),
			arenas: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/arenas'
			}),
			provisions: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/provisions'
			}),
			personalMissions: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/personalmissions'
			}),
			boosters: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/boosters'
			}),
			tankUpgrades: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/vehicleprofiles'
			}),
			modules: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/modules'
			})
		},
		rating: {
			types: endpoint({
				deprecated: true,
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'ratings/types'
			}),
			dates: endpoint({
				deprecated: true,
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'ratings/dates'
			}),
			player: endpoint({
				deprecated: true,
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'ratings/accounts'
			}),
			neighbors: endpoint({
				deprecated: true,
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'ratings/neighbors'
			}),
			top: endpoint({
				deprecated: true,
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'ratings/top'
			})
		},
		clanRating: {
			types: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clanratings/types'
			}),
			dates: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clanratings/dates'
			}),
			clan: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clanratings/clans'
			}),
			neighbors: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clanratings/neighbors'
			}),
			top: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clanratings/top'
			})
		},
		tanks: {
			stats: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'tanks/stats'
			}),
			achievements: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'tanks/achievements'
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