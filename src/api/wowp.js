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
			planeInfo: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/planeinfo'
			}),
			planeModules: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/planemodules'
			}),
			planeUpgrades: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/planeupgrades'
			}),
			planeSpecification: endpoint({
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
		rating: {
			types: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'ratings/types'
			}),
			player: endpoint({
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