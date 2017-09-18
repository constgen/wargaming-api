'use strict'

var protocol = require('../utils/protocol.js')
var api = require('../services/api.js')
var endpoint = api.endpoint
var GET = api.METHOD.GET
var POST = api.METHOD.POST

function WorldOfWarships(realm){
	var realmUrl = WorldOfWarships.realms[realm]
	var apiUrl = protocol + '//' + realmUrl + '/wows'
	var helpUrl = 'https://developers.wargaming.net/reference/all/wows'

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
		ships: {
			stats: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'ships/stats'
			})
		},
		encyclopedia: {
			ships: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/ships'
			}),
			shipInfo: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/shipprofile'
			}),
			shipModules: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/modules'
			}),
			consumables: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/consumables'
			}),
			accountLevels: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/accountlevels'
			}),
			commanders: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/crews'
			}),
			commanderSkills: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/crewskills'
			}),
			commanderRanks: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/crewranks'
			}),
			battleTypes: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/battletypes'
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
			collections: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/collections'
			}),
			collectionItems: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/collectioncards'
			})
		},
		season: {
			list: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'seasons/info'
			}),
			shipStats: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'seasons/shipstats'
			}),
			playerStats: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'seasons/accountinfo'
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