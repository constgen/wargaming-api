!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);void 0!==typeof c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], ["12"], true, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.registerDynamic('2', ['3', '4'], true, function ($__require, exports, module) {
	'use strict';

	var define,
	    global = this || self,
	    GLOBAL = global;
	var protocol = $__require('3');
	var api = $__require('4');
	var endpoint = api.endpoint;
	var GET = api.METHOD.GET;
	var POST = api.METHOD.POST;

	function WorldOfTanks(realm) {
		var realmUrl = WorldOfTanks.realms[realm];
		var apiUrl = protocol + '//' + realmUrl + '/wot';
		if (!realmUrl) {
			throw new ReferenceError('Requested realm "' + realm + '" is not supported for this API');
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
			auth: {
				login: endpoint({
					url: apiUrl + '/auth/login'
				}),
				logout: endpoint({
					url: apiUrl + '/auth/logout'
				}),
				prolongate: endpoint({
					url: apiUrl + '/auth/prolongate'
				})
			},
			stronghold: {
				claninfo: endpoint({
					url: apiUrl + '/stronghold/claninfo'
				})
			},
			globalmap: {
				fronts: endpoint({
					url: apiUrl + '/globalmap/fronts'
				}),
				provinces: endpoint({
					url: apiUrl + '/globalmap/provinces'
				}),
				info: endpoint({
					url: apiUrl + '/globalmap/info'
				})
			},
			event: {
				list: endpoint({
					url: apiUrl + '/globalmap/events'
				}),
				clanInfo: endpoint({
					url: apiUrl + '/globalmap/eventclaninfo'
				}),
				playerInfo: endpoint({
					url: apiUrl + '/globalmap/eventaccountinfo'
				}),
				playerRating: endpoint({
					url: apiUrl + '/globalmap/eventaccountratings'
				}),
				playerNeighborsRating: endpoint({
					url: apiUrl + '/globalmap/eventaccountratingneighbors'
				}),
				clanRating: endpoint({
					url: apiUrl + '/globalmap/eventrating'
				}),
				clanNeighborsRating: endpoint({
					url: apiUrl + '/globalmap/eventratingneighbors'
				})
			},
			clan: {
				info: endpoint({
					url: apiUrl + '/globalmap/claninfo'
				}),
				rovinces: endpoint({
					url: apiUrl + '/globalmap/clanprovinces'
				}),
				battles: endpoint({
					url: apiUrl + '/globalmap/clanbattles'
				})
			},
			season: {
				list: endpoint({
					url: apiUrl + '/globalmap/seasons'
				}),
				clanInfo: endpoint({
					url: apiUrl + '/globalmap/seasonclaninfo'
				}),
				playerInfo: endpoint({
					url: apiUrl + '/globalmap/seasonaccountinfo'
				}),
				clanRating: endpoint({
					url: apiUrl + '/globalmap/seasonrating'
				}),
				clanNeighborsRating: endpoint({
					url: apiUrl + '/globalmap/seasonratingneighbors'
				})
			},
			encyclopedia: {
				tanks: endpoint({
					deprecated: true,
					url: apiUrl + '/encyclopedia/tanks'
				}),
				tankInfo: endpoint({
					deprecated: true,
					url: apiUrl + '/encyclopedia/tankinfo'
				}),
				vehicles: endpoint({
					url: apiUrl + '/encyclopedia/vehicles'
				}),
				vehicleProfile: endpoint({
					url: apiUrl + '/encyclopedia/vehicleprofile'
				}),
				vehicleConfigurations: endpoint({
					url: apiUrl + '/encyclopedia/vehicleprofiles'
				}),
				tankEngines: endpoint({
					deprecated: true,
					url: apiUrl + '/encyclopedia/tankengines'
				}),
				tankTurrets: endpoint({
					deprecated: true,
					url: apiUrl + '/encyclopedia/tankturrets'
				}),
				tankRadios: endpoint({
					deprecated: true,
					url: apiUrl + '/encyclopedia/tankradios'
				}),
				tankChassis: endpoint({
					deprecated: true,
					url: apiUrl + '/encyclopedia/tankchassis'
				}),
				tankWeapons: endpoint({
					deprecated: true,
					url: apiUrl + '/encyclopedia/tankguns'
				}),
				achievements: endpoint({
					url: apiUrl + '/encyclopedia/achievements'
				}),
				info: endpoint({
					url: apiUrl + '/encyclopedia/info'
				}),
				arenas: endpoint({
					url: apiUrl + '/encyclopedia/arenas'
				}),
				provisions: endpoint({
					url: apiUrl + '/encyclopedia/provisions'
				}),
				personalMissions: endpoint({
					url: apiUrl + '/encyclopedia/personalmissions'
				}),
				boosters: endpoint({
					url: apiUrl + '/encyclopedia/boosters'
				}),
				tankUpgrades: endpoint({
					url: apiUrl + '/encyclopedia/vehicleprofiles'
				}),
				modules: endpoint({
					url: apiUrl + '/encyclopedia/modules'
				})
			},
			rating: {
				types: endpoint({
					deprecated: true,
					url: apiUrl + '/ratings/types'
				}),
				dates: endpoint({
					deprecated: true,
					url: apiUrl + '/ratings/dates'
				}),
				player: endpoint({
					deprecated: true,
					url: apiUrl + '/ratings/accounts'
				}),
				neighbors: endpoint({
					deprecated: true,
					url: apiUrl + '/ratings/neighbors'
				}),
				top: endpoint({
					deprecated: true,
					url: apiUrl + '/ratings/top'
				})
			},
			clanRating: {
				types: endpoint({
					url: apiUrl + '/clanratings/types'
				}),
				dates: endpoint({
					url: apiUrl + '/clanratings/dates'
				}),
				clan: endpoint({
					url: apiUrl + '/clanratings/clans'
				}),
				neighbors: endpoint({
					url: apiUrl + '/clanratings/neighbors'
				}),
				top: endpoint({
					url: apiUrl + '/clanratings/top'
				})
			},
			tanks: {
				stats: endpoint({
					url: apiUrl + '/tanks/stats'
				}),
				achievements: endpoint({
					url: apiUrl + '/tanks/achievements'
				})
			}
		});
	}

	WorldOfTanks.realms = {
		'ru': 'api.worldoftanks.ru',
		'eu': 'api.worldoftanks.eu',
		'na': 'api.worldoftanks.com',
		'kr': 'api.worldoftanks.kr',
		'asia': 'api.worldoftanks.asia'
	};

	module.exports = WorldOfTanks;
	return module.exports;
});
$__System.registerDynamic('5', ['3', '4'], true, function ($__require, exports, module) {
	'use strict';

	var define,
	    global = this || self,
	    GLOBAL = global;
	var protocol = $__require('3');
	var api = $__require('4');
	var endpoint = api.endpoint;
	var GET = api.METHOD.GET;
	var POST = api.METHOD.POST;

	function WorldOfTanksBlitz(realm) {
		var realmUrl = WorldOfTanksBlitz.realms[realm];
		var apiUrl = protocol + '//' + realmUrl + '/wotb';
		if (!realmUrl) {
			throw new ReferenceError('Requested realm "' + realm + '" is not supported for this API');
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
					url: apiUrl + '/account/tankstats'
				})
			},
			encyclopedia: {
				vehicles: endpoint({
					url: apiUrl + '/encyclopedia/vehicles'
				}),
				tankCharacteristics: endpoint({
					url: apiUrl + '/encyclopedia/vehicleprofile'
				}),
				modules: endpoint({
					url: apiUrl + '/encyclopedia/vehiclepackages'
				}),
				provisions: endpoint({
					url: apiUrl + '/encyclopedia/provisions'
				}),
				info: endpoint({
					url: apiUrl + '/encyclopedia/info'
				}),
				achievements: endpoint({
					url: apiUrl + '/encyclopedia/achievements'
				}),
				crew: endpoint({
					url: apiUrl + '/encyclopedia/crewroles'
				}),
				tankUpgrades: endpoint({
					url: apiUrl + '/encyclopedia/vehicleprofiles'
				})
			},
			clan: {
				list: endpoint({
					url: apiUrl + '/clans/list'
				}),
				info: endpoint({
					url: apiUrl + '/clans/info'
				}),
				playerInfo: endpoint({
					url: apiUrl + '/clans/accountinfo'
				}),
				glossary: endpoint({
					url: apiUrl + '/clans/glossary'
				})
			},
			tanks: {
				stats: endpoint({
					url: apiUrl + '/tanks/stats'
				}),
				achievements: endpoint({
					url: apiUrl + '/tanks/achievements'
				})
			},
			clanmessages: {
				list: endpoint({
					url: apiUrl + '/clanmessages/messages'
				}),
				create: endpoint({
					url: apiUrl + '/clanmessages/create'
				}),
				delete: endpoint({
					url: apiUrl + '/clanmessages/delete'
				}),
				toggleLike: endpoint({
					url: apiUrl + '/clanmessages/like'
				}),
				likes: endpoint({
					url: apiUrl + '/clanmessages/likes'
				}),
				update: endpoint({
					url: apiUrl + '/clanmessages/update'
				})
			},
			tournament: {
				list: endpoint({
					url: apiUrl + '/tournaments/list'
				}),
				info: endpoint({
					url: apiUrl + '/tournaments/info'
				}),
				teams: endpoint({
					url: apiUrl + '/tournaments/teams'
				}),
				stages: endpoint({
					url: apiUrl + '/tournaments/stages'
				}),
				matches: endpoint({
					url: apiUrl + '/tournaments/matches'
				})
			}
		});
	}

	WorldOfTanksBlitz.realms = {
		'ru': 'api.wotblitz.ru',
		'eu': 'api.wotblitz.eu',
		'na': 'api.wotblitz.com',
		//'kr': 'api.wotblitz.kr',
		'asia': 'api.wotblitz.asia'
	};

	module.exports = WorldOfTanksBlitz;
	return module.exports;
});
$__System.registerDynamic('6', ['3', '4'], true, function ($__require, exports, module) {
	'use strict';

	var define,
	    global = this || self,
	    GLOBAL = global;
	var protocol = $__require('3');
	var api = $__require('4');
	var endpoint = api.endpoint;
	var GET = api.METHOD.GET;
	var POST = api.METHOD.POST;

	function WorldOfTanksConsole(realm) {
		var realmUrl = WorldOfTanksConsole.realms[realm];
		var apiUrl = protocol + '//' + realmUrl + '/wotx';
		if (!realmUrl) {
			throw new ReferenceError('Requested realm "' + realm + '" is not supported for this API');
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
				psninfo: endpoint({
					url: apiUrl + '/account/psninfo'
				}),
				xuidinfo: endpoint({
					url: apiUrl + '/account/xuidinfo'
				})
			},
			auth: {
				login: endpoint({
					url: apiUrl + '/auth/login'
				}),
				logout: endpoint({
					url: apiUrl + '/auth/logout'
				}),
				prolongate: endpoint({
					url: apiUrl + '/auth/prolongate'
				})
			},
			clan: {
				list: endpoint({
					url: apiUrl + '/clans/list'
				}),
				info: endpoint({
					url: apiUrl + '/clans/info'
				}),
				playerInfo: endpoint({
					url: apiUrl + '/clans/accountinfo'
				}),
				glossary: endpoint({
					url: apiUrl + '/clans/glossary'
				})
			},
			encyclopedia: {
				crew: endpoint({
					deprecated: true,
					url: apiUrl + '/encyclopedia/crewroles'
				}),
				vehicles: endpoint({
					url: apiUrl + '/encyclopedia/vehicles'
				}),
				modules: endpoint({
					url: apiUrl + '/encyclopedia/vehiclepackages'
				}),
				tankUpgrades: endpoint({
					url: apiUrl + '/encyclopedia/vehicleupgrades'
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
				dates: endpoint({
					url: apiUrl + '/ratings/dates'
				}),
				player: endpoint({
					url: apiUrl + '/ratings/accounts'
				}),
				neighbors: endpoint({
					url: apiUrl + '/ratings/neighbors'
				}),
				top: endpoint({
					url: apiUrl + '/ratings/top'
				})
			},
			tanks: {
				stats: endpoint({
					url: apiUrl + '/tanks/stats'
				}),
				achievements: endpoint({
					url: apiUrl + '/tanks/achievements'
				})
			}
		});
	}

	WorldOfTanksConsole.realms = {
		'xbox': 'api-xbox-console.worldoftanks.com',
		'ps4': 'api-ps4-console.worldoftanks.com'
	};

	module.exports = WorldOfTanksConsole;
	return module.exports;
});
$__System.registerDynamic('7', ['3', '4'], true, function ($__require, exports, module) {
	'use strict';

	var define,
	    global = this || self,
	    GLOBAL = global;
	var protocol = $__require('3');
	var api = $__require('4');
	var endpoint = api.endpoint;
	var GET = api.METHOD.GET;
	var POST = api.METHOD.POST;

	function WorldOfWarships(realm) {
		var realmUrl = WorldOfWarships.realms[realm];
		var apiUrl = protocol + '//' + realmUrl + '/wows';
		if (!realmUrl) {
			throw new ReferenceError('Requested realm "' + realm + '" is not supported for this API');
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
		});
	}

	WorldOfWarships.realms = {
		'ru': 'api.worldofwarships.ru',
		'eu': 'api.worldofwarships.eu',
		'na': 'api.worldofwarships.com',
		//'kr': 'api.worldofwarships.kr',
		'asia': 'api.worldofwarships.asia'
	};

	module.exports = WorldOfWarships;
	return module.exports;
});
$__System.registerDynamic('8', ['3', '4'], true, function ($__require, exports, module) {
	'use strict';

	var define,
	    global = this || self,
	    GLOBAL = global;
	var protocol = $__require('3');
	var api = $__require('4');
	var endpoint = api.endpoint;
	var GET = api.METHOD.GET;
	var POST = api.METHOD.POST;

	function WorldOfWarplanes(realm) {
		var realmUrl = WorldOfWarplanes.realms[realm];
		var apiUrl = protocol + '//' + realmUrl + '/wowp';
		if (!realmUrl) {
			throw new ReferenceError('Requested realm "' + realm + '" is not supported for this API');
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
		});
	}

	WorldOfWarplanes.realms = {
		'ru': 'api.worldofwarplanes.ru',
		'eu': 'api.worldofwarplanes.eu',
		'na': 'api.worldofwarplanes.com'
		//'kr': 'api.worldofwarplanes.kr',
		//'asia': 'api.worldofwarplanes.asia'
	};

	module.exports = WorldOfWarplanes;
	return module.exports;
});
$__System.registerDynamic('3', [], true, function ($__require, exports, module) {
  'use strict';

  // module.exports = config.requestProtocol ? (config.requestProtocol + ':') : 'http:'

  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = 'http:';
  return module.exports;
});
$__System.registerDynamic('9', [], true, function ($__require, exports, module) {
	'use strict';

	var define,
	    global = this || self,
	    GLOBAL = global;
	function ApiError(error) {
		this.name = 'ApiError';
		this.message = error.message;
		this.code = error.code;
		this.field = error.field;
		this.value = error.value;
	}
	ApiError.prototype = Object.create(Error.prototype);
	ApiError.prototype.constructor = ApiError;

	ApiError.prototype.CODE = {
		AUTH_CANCEL: 401,
		FIELD_NOT_SPECIFIED: 402,
		SEARCH_NOT_SPECIFIED: 402,
		AUTH_EXPIRED: 403,
		FIELD_NOT_FOUND: 404,
		METHOD_NOT_FOUND: 404,
		METHOD_DISABLED: 405,
		FIELD_LIST_LIMIT_EXCEEDED: 407,
		APPLICATION_IS_BLOCKED: 407,
		INVALID_FIELD: 407,
		INVALID_APPLICATION_ID: 407,
		INVALID_IP_ADDRESS: 407,
		REQUEST_LIMIT_EXCEEDED: 407,
		NOT_ENOUGH_SEARCH_LENGTH: 407,
		AUTH_ERROR: 410,
		SOURCE_NOT_AVAILABLE: 504
	};

	module.exports = ApiError;
	return module.exports;
});
$__System.registerDynamic('a', [], true, function ($__require, exports, module) {
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = function () {};
  return module.exports;
});
$__System.registerDynamic('b', ['c', '9', 'a'], true, function ($__require, exports, module) {
	'use strict';

	var define,
	    global = this || self,
	    GLOBAL = global;
	var http = $__require('c');
	var ApiError = $__require('9');
	var noop = $__require('a');

	function Resource(options) {
		options = options || {};
		if (options.deprecated) {
			console.warn(options.url + ' resource is deprecated');
		}
		this.url = options.url;
		this.method = options.method;
		this.params = options.params;
		this.listeners = [];
		this.value = undefined;
		this.state = this.STATE.UNINTIALIZED;
		this.intervalId = -1;
		this.fetchInterval = options.interval;
	}

	Resource.prototype = {
		constructor: Resource,

		STATE: {
			UNINTIALIZED: 0,
			FETCHING: 1,
			READY: 2,
			ERROR: 3
		},

		/**
   * @private
   */
		startListening: function () {
			var resource = this;
			this.stopListening();
			//start periodic requests
			this.intervalId = setInterval(function () {
				resource.get();
			}, this.fetchInterval);
		},

		/**
   * @private
   */
		stopListening: function () {
			clearInterval(this.intervalId);
		},

		/**
   * @public
   */
		set: function (newValue) {
			var i = -1;
			var listeners = this.listeners;
			var oldValue = this.value;

			newValue = newValue || {};
			this.state = this.STATE.READY;
			this.value = newValue;
			if ((oldValue && oldValue.ETag) !== newValue.ETag) {
				while (++i in listeners) {
					listeners[i](newValue);
				}
			}
			return this;
		},

		/**
   * @public
   */
		get: function (callback, errorCallback) {
			var resource = this;

			callback = callback || noop;
			errorCallback = errorCallback || noop;
			resource.state = resource.STATE.FETCHING;
			http.request({
				url: this.url,
				method: this.method,
				params: this.params,
				ETag: this.value && this.value.ETag
			}, function (response) {
				if (response === undefined) {
					response = resource.value;
				}
				if (response.status === 'ok') {
					resource.set(response);
					callback(response);
				} else {
					//api error
					resource.state = resource.STATE.ERROR;
					errorCallback(new ApiError(response.error));
				}
			}, function (err) {
				//network error
				resource.state = resource.STATE.READY;
				errorCallback(err);
			});

			return this;
		},

		/**
   * @public
   */
		subscribe: function (callback) {
			var listeners = this.listeners;

			if (typeof callback === 'function') {
				if (!listeners.length) {
					this.startListening();
				}
				listeners.push(callback);
				switch (this.state) {
					case this.STATE.UNINTIALIZED:
						this.get();
						break;
					case this.STATE.READY:
						this.get(callback);
						break;
					case this.STATE.ERROR:
						break;
				}
			}

			return this;
		},

		/**
   * @public
   */
		unsubscribe: function (callback) {
			var index;
			var listeners = this.listeners;
			//unsubscribe all
			if (callback === undefined) {
				listeners.length = 0;
			}
			//unsubscribe a certain listeners
			else {
					index = listeners.indexOf(callback);
					while (~index) {
						listeners.splice(index, 1);
						index = listeners.indexOf(callback);
					}
				}
			//stop periodic requests if there are no listeners
			if (!listeners.length) {
				this.stopListening();
			}
			return this;
		}
	};

	module.exports = Resource;
	return module.exports;
});
$__System.registerDynamic('d', [], true, function ($__require, exports, module) {
	'use strict';

	var define,
	    global = this || self,
	    GLOBAL = global;
	module.exports = {
		//currentlu supports only location.query{}
		format: function (location) {
			var href = '';
			var search = '';
			var query = location.query;

			if (typeof query === 'object') {
				search = function () {
					var params = Object.keys(query);
					var i = -1;
					var param;
					var search = [];
					while (++i in params) {
						param = params[i];
						search.push(param + '=' + query[param]);
					}
					return search.length ? '?' + encodeURI(search.join('&')) : '';
				}();
			}

			return href + search;
		}
	};
	return module.exports;
});
$__System.registerDynamic('e', [], true, function ($__require, exports, module) {
	'use strict';

	var define,
	    global = this || self,
	    GLOBAL = global;
	module.exports = function getXhrHeaders(xhr) {
		return {
			'X-Api-Version': xhr.getResponseHeader('X-Api-Version'),
			'ETag': xhr.getResponseHeader('ETag'),
			'Content-Language': xhr.getResponseHeader('Content-Language')
		};
	};
	return module.exports;
});
$__System.registerDynamic('f', ['e'], true, function ($__require, exports, module) {
	'use strict';

	var define,
	    global = this || self,
	    GLOBAL = global;
	var getXhrHeaders = $__require('e');

	module.exports = function (options) {
		var method = options.method;
		var requestUrl = options.url;
		var headers = options.headers;
		var payload = options.body;
		var header;
		var xhr = new XMLHttpRequest();

		xhr.open(method, requestUrl, true);
		for (header in headers) {
			xhr.setRequestHeader(header, headers[header]);
		}
		xhr.responseType = 'text';

		return new Promise(function (resolve, reject) {
			xhr.onreadystatechange = function () {
				if (this.readyState !== this.DONE) return;

				if (this.status >= 200 && this.status < 300 || this.status === 0 && this.responseText //local
				) {
						resolve({
							body: this.responseText,
							headers: getXhrHeaders(this)
						});
					} else if (this.status === 304) {
					resolve({
						body: undefined,
						headers: getXhrHeaders(this)
					});
				} else {
					reject(new Error(this.statusText));
				}
				this.onreadystatechange = null;
				xhr = undefined;
			};

			try {
				xhr.send(payload);
			}
			//crossdomain
			catch (err) {
				reject(err);
			}
		});
	};
	return module.exports;
});
$__System.registerDynamic('10', [], true, function ($__require, exports, module) {
	'use strict';

	var define,
	    global = this || self,
	    GLOBAL = global;
	module.exports = function getResponseHeaders(response) {
		return {
			'X-Api-Version': response.headers['x-api-version'],
			'ETag': response.headers['etag'],
			'Content-Language': response.headers['content-language']
		};
	};
	return module.exports;
});
$__System.registerDynamic('11', ['12', '10'], true, function ($__require, exports, module) {
	'use strict';

	var define,
	    global = this || self,
	    GLOBAL = global;
	var url = $__require('12');

	var getResponseHeaders = $__require('10');

	module.exports = function httpAdapter(options) {
		var method = options.method;
		var requestUrl = options.url;
		var headers = options.headers;
		var payload = options.body;
		var location = url.parse(requestUrl);
		var hostname = location.hostname;
		var port = location.port;
		var urlPath = location.path;
		var protocol = location.protocol;
		var http = $__require(protocol === 'https:' ? 'https' : 'http');
		var httpOptions = {
			hostname: hostname,
			port: port,
			path: urlPath,
			method: method.toUpperCase(),
			agent: new http.Agent({
				//rejectUnauthorized: true,
				//maxSockets: 20,
				keepAlive: true,
				headers: headers
			})
		};

		return new Promise(function (resolve, reject) {
			var request = http.request(httpOptions, function (response) {
				var body = [];

				switch (response.statusCode) {
					case 301:
					case 302:
						//redirect
						httpAdapter(method, response.headers.location, headers, payload).then(resolve, reject);
						break;
					case 304:
						resolve({
							body: undefined,
							headers: getResponseHeaders(response)
						});
						break;
					case 200:
						response.on('data', function (chunk) {
							//progress
							body.push(chunk);
						});
						response.on('end', function () {
							//done
							resolve({
								body: body.join(''),
								headers: getResponseHeaders(response)
							});
						});
						break;
					default:
						//error
						reject(new Error('Status code ' + response.statusCode));
				}
			}).on('error', function (err) {
				reject(err); //error
			});

			if (payload) {
				request.write(payload);
			}

			request.end();
		});
	};
	return module.exports;
});
$__System.registerDynamic('c', ['d', 'f', '11', '12'], true, function ($__require, exports, module) {
	'use strict';

	var define,
	    global = this || self,
	    GLOBAL = global;
	var url = $__require('d');
	var xhr = $__require('f');
	var http = $__require('11');
	var nodejsEnv = Boolean($__require('12').parse);
	var request = nodejsEnv ? http : xhr;

	var service = {
		METHOD: {
			GET: 'GET',
			POST: 'POST'
		},
		/**
   * HTTP request.
   * @param {Object} options={} - Request config.
   */
		request: function (options, resolve, reject) {
			var payload;
			var requestUrl = options.url;
			var method = options.method;
			var data = options.params;
			var ETag = options.ETag;
			var headers = {
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
				'If-None-Match': ETag
			};

			switch (true) {
				case !data:
					payload = null;
					break;
				case method === service.METHOD.POST:
					payload = url.format({ query: data }).slice(1);
					break;
				default:
					requestUrl += url.format({ query: data });
			}

			request({
				method: method,
				url: requestUrl,
				headers: headers,
				body: payload
			}).then(function (response) {
				var body = response.body ? JSON.parse(response.body) : undefined;

				if (body) {
					body.ETag = response.headers.ETag;
				}
				resolve(body);
			}, reject);
		}
	};

	module.exports = service;
	return module.exports;
});
$__System.registerDynamic('4', ['b', 'c'], true, function ($__require, exports, module) {
    'use strict';

    var define,
        global = this || self,
        GLOBAL = global;
    var Resource = $__require('b');
    var http = $__require('c');

    var service = {
        DEFAULT_UPDATE_INTERVAL: 10000,
        METHOD: http.METHOD,

        endpoint: function (config) {
            config = config || {};
            config.url = config.url + '/'; //needs trailing slash for correct work
            config.method = config.method || service.METHOD.GET;
            if (!(config.method in service.METHOD)) {
                throw new Error('Unsupported endpoint method "' + config.method + '" for ' + config.url);
            }
            config.interval = config.interval || service.DEFAULT_UPDATE_INTERVAL;
            var endpoint = function (params) {
                var options = Object.assign({}, config, { params: params });
                return new Resource(options);
            };
            endpoint.url = config.url;
            return endpoint;
        }
    };

    module.exports = service;
    return module.exports;
});
$__System.registerDynamic('13', ['3', '4'], true, function ($__require, exports, module) {
	'use strict';

	var define,
	    global = this || self,
	    GLOBAL = global;
	var protocol = $__require('3');
	var api = $__require('4');
	var endpoint = api.endpoint;
	var GET = api.METHOD.GET;
	var POST = api.METHOD.POST;

	function WargamingNet(realm) {
		var realmUrl = WargamingNet.realms[realm];
		var apiUrl = protocol + '//' + realmUrl + '/wgn';
		if (!realmUrl) {
			throw new ReferenceError('Requested realm "' + realm + '" is not supported for this API');
		}

		Object.assign(this, {
			account: {
				players: endpoint({
					url: apiUrl + '/account/list'
				}),
				player: endpoint({
					url: apiUrl + '/account/info'
				})
			},
			wargag: {
				content: endpoint({
					url: apiUrl + '/wargag/content'
				}),
				search: endpoint({
					url: apiUrl + '/wargag/search'
				}),
				comments: endpoint({
					url: apiUrl + '/wargag/comments'
				}),
				categories: endpoint({
					url: apiUrl + '/wargag/categories'
				}),
				rate: endpoint({
					url: apiUrl + '/wargag/rate'
				}),
				createComment: endpoint({
					url: apiUrl + '/wargag/newcomment'
				}),
				deleteComment: endpoint({
					url: apiUrl + '/wargag/deletecomment'
				})
			},
			clan: {
				list: endpoint({
					url: apiUrl + '/clans/list'
				}),
				info: endpoint({
					url: apiUrl + '/clans/info'
				}),
				playerInfo: endpoint({
					url: apiUrl + '/clans/membersinfo'
				}),
				glossary: endpoint({
					url: apiUrl + '/clans/glossary'
				}),
				messageboard: endpoint({
					url: apiUrl + '/clans/messageboard'
				})
			},
			wgTv: {
				tags: endpoint({
					url: apiUrl + '/wgtv/tags'
				}),
				videos: endpoint({
					url: apiUrl + '/wgtv/videos'
				}),
				vehicles: endpoint({
					url: apiUrl + '/wgtv/vehicles'
				})
			},
			server: {
				info: endpoint({
					url: apiUrl + '/servers/info'
				})
			}
		});
	}

	WargamingNet.realms = {
		'ru': 'api.worldoftanks.ru',
		'eu': 'api.worldoftanks.eu',
		'na': 'api.worldoftanks.com',
		'kr': 'api.worldoftanks.kr',
		'asia': 'api.worldoftanks.asia'
	};

	module.exports = WargamingNet;
	return module.exports;
});
$__System.registerDynamic('1', ['2', '5', '6', '7', '8', '13'], true, function ($__require, exports, module) {
    'use strict';

    var define,
        global = this || self,
        GLOBAL = global;
    var Wot = $__require('2');
    var Wotb = $__require('5');
    var Wotx = $__require('6');
    var Wows = $__require('7');
    var Wowp = $__require('8');
    var Net = $__require('13');

    module.exports = {
        version: '1.14.0',
        revision: 'aug2017',
        //Tanks
        WorldOfTanks: Wot,
        Wot: Wot,
        //Tanks Blitz
        WorldOfTanksBlitz: Wotb,
        Wotb: Wotb,
        //Tanks Consoles
        WorldOfTanksConsole: Wotx,
        Wotx: Wotx,
        //Planes
        WorldOfWarplanes: Wowp,
        Wowp: Wowp,
        //Ships
        WorldOfWarships: Wows,
        Wows: Wows,
        //Net
        WargimingNet: Net,
        Net: Net
    };
    return module.exports;
});
})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define(["http"], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory(require("http"));
  else
    throw new Error("Module must be loaded as AMD or CommonJS");
});
//# sourceMappingURL=wg.js.map