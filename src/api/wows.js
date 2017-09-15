'use strict'

var protocol = require('../utils/protocol.js')
var api = require('../services/api.js')
var endpoint = api.endpoint
var GET = api.METHOD.GET
var POST = api.METHOD.POST

function WorldOfWarships(realm){
	var realmUrl = WorldOfWarships.realms[realm]
	var apiUrl = protocol + '//' + realmUrl + '/wows'
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
		ships: {
			stats: endpoint({
				url: apiUrl + '/ships/stats'
			})
		},
		encyclopedia: {
			ships: endpoint({
				url: apiUrl + '/encyclopedia/ships'
			}),
			shipInfo: endpoint({
				url: apiUrl + '/encyclopedia/shipprofile'
			}),
			shipModules: endpoint({
				url: apiUrl + '/encyclopedia/modules'
			}),
			consumables: endpoint({
				url: apiUrl + '/encyclopedia/consumables'
			}),
			accountLevels: endpoint({
				url: apiUrl + '/encyclopedia/accountlevels'
			}),
			commanders: endpoint({
				url: apiUrl + '/encyclopedia/crews'
			}),
			commanderSkills: endpoint({
				url: apiUrl + '/encyclopedia/crewskills'
			}),
			commanderRanks: endpoint({
				url: apiUrl + '/encyclopedia/crewranks'
			}),
			battleTypes: endpoint({
				url: apiUrl + '/encyclopedia/battletypes'
			}),
			achievements: endpoint({
				url: apiUrl + '/encyclopedia/achievements'
			}),
			info: endpoint({
				url: apiUrl + '/encyclopedia/info'
			}),
			collections: endpoint({
				url: apiUrl + '/encyclopedia/collections'
			}),
			collectionItems: endpoint({
				url: apiUrl + '/encyclopedia/collectioncards'
			})
		},
		season: {
			list: endpoint({
				url: apiUrl + '/seasons/info'
			}),
			shipStats: endpoint({
				url: apiUrl + '/seasons/shipstats'
			}),
			playerStats: endpoint({
				url: apiUrl + '/seasons/accountinfo'
			})
		},
		clans: {
			list: endpoint({
				url: apiUrl + '/clans/list'
			}),
			info: endpoint({
				url: apiUrl + '/clans/info'
			}),
			accountinfo: endpoint({
				url: apiUrl + '/clans/accountinfo'
			}),
			glossary: endpoint({
				url: apiUrl + '/clans/glossary'
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