'use strict'

var protocol = require('../utils/protocol.js')
var api = require('../services/api.js')
var endpoint = api.endpoint
var GET = api.METHOD.GET
var POST = api.METHOD.POST

function WorldOfWarplanes(realm) {
	var realmUrl = WorldOfWarplanes.realms[realm]
	var apiUrl = protocol + '//' + realmUrl + '/wowp'
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
			planes: endpoint({
				url: apiUrl + '/account/planes'
			})
		},
		encyclopedia: {
			planes: endpoint({
				url: apiUrl + '/encyclopedia/planes'
			}),
			planeInfo: endpoint({
				url: apiUrl + '/encyclopedia/planeinfo'
			}),
			planeModules: endpoint({
				url: apiUrl + '/encyclopedia/planemodules'
			}),
			planeUpgrades: endpoint({
				url: apiUrl + '/encyclopedia/planeupgrades'
			}),
			planeSpecification: endpoint({
				url: apiUrl + '/encyclopedia/planespecification'
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
			player: endpoint({
				url: apiUrl + '/ratings/accounts'
			}),
			neighbors: endpoint({
				url: apiUrl + '/ratings/neighbors'
			}),
			top: endpoint({
				url: apiUrl + '/ratings/top'
			}),
			dates: endpoint({
				url: apiUrl + '/ratings/dates'
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