'use strict'

var protocol = require('../utils/protocol.js')
var RealmReferenceError = require('../types/realm-reference-error.js')
var api = require('../services/api.js')
var endpoint = api.endpoint
var GET = api.METHOD.GET
var POST = api.METHOD.POST

var REALMS = {
	'ru': 'api.worldoftanks.ru',
	'eu': 'api.worldoftanks.eu',
	'na': 'api.worldoftanks.com',
	'kr': 'api.worldoftanks.kr',
	'asia': 'api.worldoftanks.asia'
}

function WorldOfTanks(realm){
	var realmUrl = REALMS[realm]
	var apiUrl = protocol + '//' + realmUrl + '/wot'
	var helpUrl = 'https://developers.wargaming.net/reference/all/wot'

	if (!realmUrl) {
		throw new RealmReferenceError(realm, REALMS)
	}

	Object.assign(this, {
		account: {
			/**
			 * Players
			 */
			list: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'account/list'
			}),
			/**
			 * Player
			 */
			info: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'account/info'
			}),
			achievements: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'account/achievements'
			}),
			statsbydate: endpoint({
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
			}),
			events: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/events'
			}),
			eventclaninfo: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/eventclaninfo'
			}),
			eventaccountinfo: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/eventaccountinfo'
			}),
			eventaccountratings: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/eventaccountratings'
			}),
			eventaccountratingneighbors: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/eventaccountratingneighbors'
			}),
			eventrating: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/eventrating'
			}),
			eventratingneighbors: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/eventratingneighbors'
			}),
			claninfo: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/claninfo'
			}),
			clanprovinces: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url:  'globalmap/clanprovinces'
			}),
			clanbattles: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/clanbattles'
			}),
			seasons: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/seasons'
			}),
			seasonclaninfo: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/seasonclaninfo'
			}),
			seasonaccountinfo: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/seasonaccountinfo'
			}),
			seasonrating: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'globalmap/seasonrating'
			}),
			seasonratingneighbors: endpoint({
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
			tankinfo: endpoint({
				deprecated: true,
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/tankinfo'
			}),
			vehicles: endpoint({
				url: 'encyclopedia/vehicles'
			}),
			vehicleprofile: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/vehicleprofile'
			}),
			vehicleprofiles: endpoint({
				url: 'encyclopedia/vehicleprofiles'
			}),
			tankengines: endpoint({
				deprecated: true,
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/tankengines'
			}),
			tankturrets: endpoint({
				deprecated: true,
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/tankturrets'
			}),
			tankradios: endpoint({
				deprecated: true,
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/tankradios'
			}),
			tankchassis: endpoint({
				deprecated: true,
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/tankchassis'
			}),
			tankguns: endpoint({
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
			personalmissions: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/personalmissions'
			}),
			boosters: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/boosters'
			}),
			/**
			 * Tank upgrades
			 */
			vehicleprofiles: endpoint({
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
		ratings: {
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
			/**
			 * Players
			 */
			accounts: endpoint({
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
		clanratings: {
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

WorldOfTanks.realms = REALMS

module.exports = WorldOfTanks