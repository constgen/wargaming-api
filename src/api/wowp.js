'use strict'

var protocol = require('../utils/protocol.js')
var Endpoint = require('../types/endpoint.js')

function WorldOfWarplanes(realm) {
	var realmUrl = WorldOfWarplanes.realms[realm]
	var apiUrl = protocol + '//' + realmUrl + '/wowp'
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
			planes: new Endpoint({
				url: apiUrl + '/account/planes'
			})
		},
		encyclopedia: {
			planes: new Endpoint({
				url: apiUrl + '/encyclopedia/planes'
			}),
			planeInfo: new Endpoint({
				url: apiUrl + '/encyclopedia/planeinfo'
			}),
			planeModules: new Endpoint({
				url: apiUrl + '/encyclopedia/planemodules'
			}),
			planeUpgrades: new Endpoint({
				url: apiUrl + '/encyclopedia/planeupgrades'
			}),
			planeSpecification: new Endpoint({
				url: apiUrl + '/encyclopedia/planespecification'
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
			player: new Endpoint({
				url: apiUrl + '/ratings/accounts'
			}),
			neighbors: new Endpoint({
				url: apiUrl + '/ratings/neighbors'
			}),
			top: new Endpoint({
				url: apiUrl + '/ratings/top'
			}),
			dates: new Endpoint({
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