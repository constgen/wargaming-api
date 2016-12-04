'use strict'

var config = require('config')
var protocol = require('../utils/protocol.js')
var Endpoint = require('../types/endpoint.js')

function WorldOfWarships(realm){
	var realmUrl = WorldOfWarships.realms[realm]
	var apiUrl = protocol + '//' + realmUrl + '/wows'
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
		ships: {
			stats: new Endpoint({
				url: apiUrl + '/ships/stats'
			})
		},
		encyclopedia: {
			ships: new Endpoint({
				url: apiUrl + '/encyclopedia/ships'
			}),
			shipInfo: new Endpoint({
				url: apiUrl + '/encyclopedia/shipprofile'
			}),
			shipModules: new Endpoint({
				url: apiUrl + '/encyclopedia/modules'
			}),
			exterior: new Endpoint({
				url: apiUrl + '/encyclopedia/exterior'
			}),
			shipUpgrades: new Endpoint({
				url: apiUrl + '/encyclopedia/upgrades'
			}),
			accountLevels: new Endpoint({
				url: apiUrl + '/encyclopedia/accountlevels'
			}),
			commanders: new Endpoint({
				url: apiUrl + '/encyclopedia/crews'
			}),
			commanderSkills: new Endpoint({
				url: apiUrl + '/encyclopedia/crewskills'
			}),
			commanderRanks: new Endpoint({
				url: apiUrl + '/encyclopedia/crewranks'
			}),
			battleTypes: new Endpoint({
				url: apiUrl + '/encyclopedia/battletypes'
			}),
			achievements: new Endpoint({
				url: apiUrl + '/encyclopedia/achievements'
			}),
			info: new Endpoint({
				url: apiUrl + '/encyclopedia/info'
			})
		},
		season: {
			list: new Endpoint({
				url: apiUrl + '/seasons/info'
			}),
			shipStats: new Endpoint({
				url: apiUrl + '/seasons/shipstats'
			}),
			playerStats: new Endpoint({
				url: apiUrl + '/seasons/accountinfo'
			})
		}
	})
}

WorldOfWarships.realms = {
	'ru': 'api.worldofwarships.ru',
	'eu': 'api.worldofwarships.eu',
	'na': 'api.worldofwarships.com',
	//'kr': 'api.worldofwarships.kr',
	'asia': 'api.worldofwarships.asia'
}

module.exports = WorldOfWarships