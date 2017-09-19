'use strict'

var protocol = require('../utils/protocol.js')
var api = require('../services/api.js')
var endpoint = api.endpoint
var GET = api.METHOD.GET
var POST = api.METHOD.POST

function WorldOfTanksConsole(realm){
	var realmUrl = WorldOfTanksConsole.realms[realm]
	var apiUrl = protocol + '//' + realmUrl + '/wotx'
	var helpUrl = 'https://developers.wargaming.net/reference/all/wotx'

	if (!realmUrl) {
		throw new ReferenceError('Requested realm "' + realm + '" is not supported for this API')
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
			psninfo: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'account/psninfo'
			}),
			xuidinfo: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'account/xuidinfo'
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
		clans: {
			list: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clans/list'
			}),
			info: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clans/info'
			}),
			/**
			 * Player info
			 */
			accountinfo: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clans/accountinfo'
			}),
			glossary: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clans/glossary'
			})
		},
		encyclopedia: {
			/**
			 * Crew
			 */
			crewroles: endpoint({
				deprecated: true,
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/crewroles'
			}),
			vehicles: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/vehicles'
			}),
			/**
			 * Modules
			 */
			vehiclepackages: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/vehiclepackages'
			}),
			/**
			 * Tank upgrades
			 */
			vehicleupgrades: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/vehicleupgrades'
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
			})
		},
		ratings: {
			types: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'ratings/types'
			}),
			dates: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'ratings/dates'
			}),
			/**
			 * Players
			 */
			accounts: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'ratings/accounts'
			}),
			neighbors: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'ratings/neighbors'
			}),
			top: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'ratings/top'
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

WorldOfTanksConsole.realms = {
	'xbox': 'api-xbox-console.worldoftanks.com',
	'ps4': 'api-ps4-console.worldoftanks.com'
}

module.exports = WorldOfTanksConsole