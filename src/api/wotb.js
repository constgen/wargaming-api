'use strict'

var protocol = require('../utils/protocol.js')
var api = require('../services/api.js')
var endpoint = api.endpoint
var GET = api.METHOD.GET
var POST = api.METHOD.POST

function WorldOfTanksBlitz(realm) {
	var realmUrl = WorldOfTanksBlitz.realms[realm]
	var apiUrl = protocol + '//' + realmUrl + '/wotb'
	var helpUrl = 'https://developers.wargaming.net/reference/all/wotb'

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
				url: 'account/tankstats'
			})
		},
		encyclopedia: {
			vehicles: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/vehicles'
			}),
			tankCharacteristics: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/vehicleprofile'
			}),
			modules: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/vehiclepackages'
			}),
			provisions: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/provisions'
			}),
			info: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/info'
			}),
			achievements: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/achievements'
			}),
			crew: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/crewroles'
			}),
			tankUpgrades: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/vehicleprofiles'
			})
		},
		clan: {
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
			playerInfo: endpoint({
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
		},
		clanmessages: {
			list: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clanmessages/messages'
			}),
			create: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clanmessages/create'
			}),
			delete: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clanmessages/delete'
			}),
			toggleLike: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clanmessages/like'
			}),
			likes: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clanmessages/likes'
			}),
			update: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'clanmessages/update'
			})
		},
		tournament: {
			list: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'tournaments/list'
			}),
			info: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'tournaments/info'
			}),
			teams: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'tournaments/teams'
			}),
			stages: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'tournaments/stages'
			}),
			matches: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'tournaments/matches'
			})
		}
	})
}

WorldOfTanksBlitz.realms = {
	'ru': 'api.wotblitz.ru',
	'eu': 'api.wotblitz.eu',
	'na': 'api.wotblitz.com',
	//'kr': 'api.wotblitz.kr',
	'asia': 'api.wotblitz.asia'
}

module.exports = WorldOfTanksBlitz