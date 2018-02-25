'use strict'

var protocol = require('../utils/protocol.js')
var RealmReferenceError = require('../types/realm-reference-error.js')
var api = require('../services/api.js')
var endpoint = api.endpoint

var REALMS = {
	ru: 'api.wotblitz.ru',
	eu: 'api.wotblitz.eu',
	na: 'api.wotblitz.com',
	//'kr': 'api.wotblitz.kr',
	asia: 'api.wotblitz.asia'
}

function WorldOfTanksBlitz(realm) {
	var realmUrl = REALMS[realm]
	var apiUrl = protocol + '//' + realmUrl + '/wotb'
	var helpUrl = 'https://developers.wargaming.net/reference/all/wotb'

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
			tankstats: endpoint({
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
			/**
			 * Tank characteristics
			 */
			vehicleprofile: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/vehicleprofile'
			}),
			/**
			 * Modules
			 */
			vehiclepackages: endpoint({
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
			/**
			 * Crew
			 */
			crewroles: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/crewroles'
			}),
			/**
			 * Tank upgrades
			 */
			vehicleprofiles: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/vehicleprofiles'
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
			messages: endpoint({
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
			/**
			 * Toggle like
			 */
			like: endpoint({
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
		tournaments: {
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

WorldOfTanksBlitz.realms = REALMS

module.exports = WorldOfTanksBlitz