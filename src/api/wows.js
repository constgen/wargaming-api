'use strict'

var protocol = require('../utils/protocol.js')
var RealmReferenceError = require('../types/realm-reference-error.js')
var api = require('../services/api.js')
var endpoint = api.endpoint

var REALMS = {
	'ru': 'api.worldofwarships.ru',
	'eu': 'api.worldofwarships.eu',
	'na': 'api.worldofwarships.com',
	//'kr': 'api.worldofwarships.kr',
	'asia': 'api.worldofwarships.asia'
}

function WorldOfWarships(realm){
	var realmUrl = REALMS[realm]
	var apiUrl = protocol + '//' + realmUrl + '/wows'
	var helpUrl = 'https://developers.wargaming.net/reference/all/wows'

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
			statsbydate: endpoint({
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
			/**
			 * Ship info
			 */
			shipprofile: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/shipprofile'
			}),
			modules: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/modules'
			}),
			consumables: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/consumables'
			}),
			accountlevels: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/accountlevels'
			}),
			/**
			 * Commanders
			 */
			crews: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/crews'
			}),
			/**
			 * Commander skills
			 */
			crewskills: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/crewskills'
			}),
			/**
			 * Commander ranks
			 */
			crewranks: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/crewranks'
			}),
			battletypes: endpoint({
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
			/**
			 * Collection items
			 */
			collectioncards: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'encyclopedia/collectioncards'
			})
		},
		seasons: {
			/**
			 * Seasons list
			 */
			info: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'seasons/info'
			}),
			shipstats: endpoint({
				baseUrl: apiUrl,
				baseHelpUrl: helpUrl,
				url: 'seasons/shipstats'
			}),
			/**
			 * Player stats
			 */
			accountinfo: endpoint({
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

WorldOfWarships.realms = REALMS

module.exports = WorldOfWarships