'use strict'

var protocol = require('../utils/protocol.js')
var api = require('../services/api.js')
var endpoint = api.endpoint
var GET = api.METHOD.GET
var POST = api.METHOD.POST

function WorldOfWarplanes(realm) {
	var realmUrl = WorldOfWarplanes.realms[realm]
	var apiUrl = protocol + '//' + realmUrl + '/wowp'
	var helpUrl = 'https://developers.wargaming.net/reference/all/wowp'

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
			planes: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'account/planes'
			})
		},
		encyclopedia: {
			planes: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/planes'
			}),
			planeinfo: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/planeinfo'
			}),
			planemodules: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/planemodules'
			}),
			planeupgrades: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/planeupgrades'
			}),
			planespecification: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/planespecification'
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
			/**
			 * Player
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
			}),
			dates: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'ratings/dates'
			})
		}
	})
}

WorldOfWarplanes.realms = {
	'ru': 'api.worldofwarplanes.ru',
	'eu': 'api.worldofwarplanes.eu',
	'na': 'api.worldofwarplanes.com'
	//'kr': 'api.worldofwarplanes.kr',
	//'asia': 'api.worldofwarplanes.asia'
}

module.exports = WorldOfWarplanes