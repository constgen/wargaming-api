!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);void 0!==typeof c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], true, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.registerDynamic('2', ['3', '4', '5'], true, function ($__require, exports, module) {
	'use strict';

	var define,
	    global = this || self,
	    GLOBAL = global;
	var config = $__require('3');
	var protocol = $__require('4');
	var Endpoint = $__require('5');

	function WorldOfTanks(realm) {
		var realmUrl = WorldOfTanks.realms[realm];
		var apiUrl = protocol + '//' + realmUrl + '/wot';
		if (!realmUrl) {
			throw new ReferenceError('Requested realm "' + realm + '" is not supported for this API');
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
			auth: {
				login: new Endpoint({
					url: apiUrl + '/auth/login'
				}),
				logout: new Endpoint({
					url: apiUrl + '/auth/logout'
				}),
				prolongate: new Endpoint({
					url: apiUrl + '/auth/prolongate'
				})
			},
			stronghold: {
				info: new Endpoint({
					url: apiUrl + '/stronghold/info'
				}),
				buildings: new Endpoint({
					url: apiUrl + '/stronghold/buildings'
				}),
				playerStats: new Endpoint({
					url: apiUrl + '/stronghold/accountstats'
				}),
				battles: new Endpoint({
					url: apiUrl + '/stronghold/plannedbattles'
				})
			},
			globalmap: {
				fronts: new Endpoint({
					url: apiUrl + '/globalmap/fronts'
				}),
				provinces: new Endpoint({
					url: apiUrl + '/globalmap/provinces'
				}),
				info: new Endpoint({
					url: apiUrl + '/globalmap/info'
				})
			},
			event: {
				list: new Endpoint({
					url: apiUrl + '/globalmap/events'
				}),
				clanInfo: new Endpoint({
					url: apiUrl + '/globalmap/eventclaninfo'
				}),
				playerInfo: new Endpoint({
					url: apiUrl + '/globalmap/eventaccountinfo'
				}),
				playerRating: new Endpoint({
					url: apiUrl + '/globalmap/eventaccountratings'
				}),
				playerNeighborsRating: new Endpoint({
					url: apiUrl + '/globalmap/eventaccountratingneighbors'
				}),
				clanRating: new Endpoint({
					url: apiUrl + '/globalmap/eventrating'
				}),
				clanNeighborsRating: new Endpoint({
					url: apiUrl + '/globalmap/eventratingneighbors'
				})
			},
			clan: {
				info: new Endpoint({
					url: apiUrl + '/globalmap/claninfo'
				}),
				rovinces: new Endpoint({
					url: apiUrl + '/globalmap/clanprovinces'
				}),
				battles: new Endpoint({
					url: apiUrl + '/globalmap/clanbattles'
				})
			},
			season: {
				list: new Endpoint({
					url: apiUrl + '/globalmap/seasons'
				}),
				clanInfo: new Endpoint({
					url: apiUrl + '/globalmap/seasonclaninfo'
				}),
				playerInfo: new Endpoint({
					url: apiUrl + '/globalmap/seasonaccountinfo'
				}),
				clanRating: new Endpoint({
					url: apiUrl + '/globalmap/seasonrating'
				}),
				clanNeighborsRating: new Endpoint({
					url: apiUrl + '/globalmap/seasonratingneighbors'
				})
			},
			encyclopedia: {
				tanks: new Endpoint({
					deprecated: true,
					url: apiUrl + '/encyclopedia/tanks'
				}),
				tankInfo: new Endpoint({
					deprecated: true,
					url: apiUrl + '/encyclopedia/tankinfo'
				}),
				vehicles: new Endpoint({
					url: apiUrl + '/encyclopedia/vehicles'
				}),
				vehicleProfile: new Endpoint({
					url: apiUrl + '/encyclopedia/vehicleprofile'
				}),
				tankEngines: new Endpoint({
					deprecated: true,
					url: apiUrl + '/encyclopedia/tankengines'
				}),
				tankTurrets: new Endpoint({
					deprecated: true,
					url: apiUrl + '/encyclopedia/tankturrets'
				}),
				tankRadios: new Endpoint({
					deprecated: true,
					url: apiUrl + '/encyclopedia/tankradios'
				}),
				tankChassis: new Endpoint({
					deprecated: true,
					url: apiUrl + '/encyclopedia/tankchassis'
				}),
				tankWeapons: new Endpoint({
					deprecated: true,
					url: apiUrl + '/encyclopedia/tankguns'
				}),
				achievements: new Endpoint({
					url: apiUrl + '/encyclopedia/achievements'
				}),
				info: new Endpoint({
					url: apiUrl + '/encyclopedia/info'
				}),
				arenas: new Endpoint({
					url: apiUrl + '/encyclopedia/arenas'
				}),
				provisions: new Endpoint({
					url: apiUrl + '/encyclopedia/provisions'
				}),
				personalMissions: new Endpoint({
					url: apiUrl + '/encyclopedia/personalmissions'
				}),
				boosters: new Endpoint({
					url: apiUrl + '/encyclopedia/boosters'
				}),
				tankUpgrades: new Endpoint({
					url: apiUrl + '/encyclopedia/vehicleprofiles'
				}),
				modules: new Endpoint({
					url: apiUrl + '/encyclopedia/modules'
				})
			},
			rating: {
				types: new Endpoint({
					url: apiUrl + '/ratings/types'
				}),
				dates: new Endpoint({
					url: apiUrl + '/ratings/dates'
				}),
				player: new Endpoint({
					url: apiUrl + '/ratings/accounts'
				}),
				neighbors: new Endpoint({
					url: apiUrl + '/ratings/neighbors'
				}),
				top: new Endpoint({
					url: apiUrl + '/ratings/top'
				})
			},
			clanRating: {
				types: new Endpoint({
					url: apiUrl + '/clanratings/types'
				}),
				dates: new Endpoint({
					url: apiUrl + '/clanratings/dates'
				}),
				clan: new Endpoint({
					url: apiUrl + '/clanratings/clans'
				}),
				neighbors: new Endpoint({
					url: apiUrl + '/clanratings/neighbors'
				}),
				top: new Endpoint({
					url: apiUrl + '/clanratings/top'
				})
			},
			tanks: {
				stats: new Endpoint({
					url: apiUrl + '/tanks/stats'
				}),
				achievements: new Endpoint({
					url: apiUrl + '/tanks/achievements'
				})
			},
			teams: {
				list: new Endpoint({
					url: apiUrl + '/regularteams/list'
				}),
				info: new Endpoint({
					url: apiUrl + '/regularteams/info'
				}),
				memberInfo: new Endpoint({
					url: apiUrl + '/regularteams/memberinfo'
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
$__System.registerDynamic('6', ['3', '4', '5'], true, function ($__require, exports, module) {
	'use strict';

	var define,
	    global = this || self,
	    GLOBAL = global;
	var config = $__require('3');
	var protocol = $__require('4');
	var Endpoint = $__require('5');

	function WorldOfTanksBlitz(realm) {
		var realmUrl = WorldOfTanksBlitz.realms[realm];
		var apiUrl = protocol + '//' + realmUrl + '/wotb';
		if (!realmUrl) {
			throw new ReferenceError('Requested realm "' + realm + '" is not supported for this API');
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
					url: apiUrl + '/account/tankstats'
				})
			},
			encyclopedia: {
				vehicles: new Endpoint({
					url: apiUrl + '/encyclopedia/vehicles'
				}),
				tankCharacteristics: new Endpoint({
					url: apiUrl + '/encyclopedia/vehicleprofile'
				}),
				modules: new Endpoint({
					url: apiUrl + '/encyclopedia/vehiclepackages'
				}),
				provisions: new Endpoint({
					url: apiUrl + '/encyclopedia/provisions'
				}),
				info: new Endpoint({
					url: apiUrl + '/encyclopedia/info'
				}),
				achievements: new Endpoint({
					url: apiUrl + '/encyclopedia/achievements'
				}),
				crew: new Endpoint({
					url: apiUrl + '/encyclopedia/crewroles'
				}),
				tankUpgrades: new Endpoint({
					url: apiUrl + '/encyclopedia/vehicleprofiles'
				})
			},
			clan: {
				list: new Endpoint({
					url: apiUrl + '/clans/list'
				}),
				info: new Endpoint({
					url: apiUrl + '/clans/info'
				}),
				playerInfo: new Endpoint({
					url: apiUrl + '/clans/accountinfo'
				}),
				glossary: new Endpoint({
					url: apiUrl + '/clans/glossary'
				})
			},
			tanks: {
				stats: new Endpoint({
					url: apiUrl + '/tanks/stats'
				}),
				achievements: new Endpoint({
					url: apiUrl + '/tanks/achievements'
				})
			},
			message: {
				list: new Endpoint({
					url: apiUrl + '/clanmessages/messages'
				}),
				create: new Endpoint({
					url: apiUrl + '/clanmessages/create'
				}),
				delete: new Endpoint({
					url: apiUrl + '/clanmessages/delete'
				}),
				toggleLike: new Endpoint({
					url: apiUrl + '/clanmessages/like'
				}),
				likes: new Endpoint({
					url: apiUrl + '/clanmessages/likes'
				}),
				update: new Endpoint({
					url: apiUrl + '/clanmessages/update'
				})
			},
			tournament: {
				list: new Endpoint({
					url: apiUrl + '/tournaments/list'
				}),
				info: new Endpoint({
					url: apiUrl + '/tournaments/info'
				}),
				teams: new Endpoint({
					url: apiUrl + '/tournaments/teams'
				}),
				stages: new Endpoint({
					url: apiUrl + '/tournaments/stages'
				}),
				matches: new Endpoint({
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
$__System.registerDynamic('7', ['3', '4', '5'], true, function ($__require, exports, module) {
	'use strict';

	var define,
	    global = this || self,
	    GLOBAL = global;
	var config = $__require('3');
	var protocol = $__require('4');
	var Endpoint = $__require('5');

	function WorldOfTanksConsole(realm) {
		var realmUrl = WorldOfTanksConsole.realms[realm];
		var apiUrl = protocol + '//' + realmUrl + '/wotx';
		if (!realmUrl) {
			throw new ReferenceError('Requested realm "' + realm + '" is not supported for this API');
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
				psninfo: new Endpoint({
					url: apiUrl + '/account/psninfo'
				}),
				xuidinfo: new Endpoint({
					url: apiUrl + '/account/xuidinfo'
				})
			},
			auth: {
				login: new Endpoint({
					url: apiUrl + '/auth/login'
				}),
				logout: new Endpoint({
					url: apiUrl + '/auth/logout'
				}),
				prolongate: new Endpoint({
					url: apiUrl + '/auth/prolongate'
				})
			},
			clan: {
				list: new Endpoint({
					url: apiUrl + '/clans/list'
				}),
				info: new Endpoint({
					url: apiUrl + '/clans/info'
				}),
				playerInfo: new Endpoint({
					url: apiUrl + '/clans/accountinfo'
				}),
				glossary: new Endpoint({
					url: apiUrl + '/clans/glossary'
				})
			},
			encyclopedia: {
				crew: new Endpoint({
					deprecated: true,
					url: apiUrl + '/encyclopedia/crewroles'
				}),
				vehicles: new Endpoint({
					url: apiUrl + '/encyclopedia/vehicles'
				}),
				modules: new Endpoint({
					url: apiUrl + '/encyclopedia/vehiclepackages'
				}),
				tankUpgrades: new Endpoint({
					url: apiUrl + '/encyclopedia/vehicleupgrades'
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
				dates: new Endpoint({
					url: apiUrl + '/ratings/dates'
				}),
				player: new Endpoint({
					url: apiUrl + '/ratings/accounts'
				}),
				neighbors: new Endpoint({
					url: apiUrl + '/ratings/neighbors'
				}),
				top: new Endpoint({
					url: apiUrl + '/ratings/top'
				})
			},
			tanks: {
				stats: new Endpoint({
					url: apiUrl + '/tanks/stats'
				}),
				achievements: new Endpoint({
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
$__System.registerDynamic('8', ['3', '4', '5'], true, function ($__require, exports, module) {
	'use strict';

	var define,
	    global = this || self,
	    GLOBAL = global;
	var config = $__require('3');
	var protocol = $__require('4');
	var Endpoint = $__require('5');

	function WorldOfWarships(realm) {
		var realmUrl = WorldOfWarships.realms[realm];
		var apiUrl = protocol + '//' + realmUrl + '/wows';
		if (!realmUrl) {
			throw new ReferenceError('Requested realm "' + realm + '" is not supported for this API');
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
$__System.registerDynamic('9', ['3', '4', '5'], true, function ($__require, exports, module) {
	'use strict';

	var define,
	    global = this || self,
	    GLOBAL = global;
	var config = $__require('3');
	var protocol = $__require('4');
	var Endpoint = $__require('5');

	function WorldOfWarplanes(realm) {
		var realmUrl = WorldOfWarplanes.realms[realm];
		var apiUrl = protocol + '//' + realmUrl + '/wowp';
		if (!realmUrl) {
			throw new ReferenceError('Requested realm "' + realm + '" is not supported for this API');
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
$__System.registerDynamic('4', ['3'], true, function ($__require, exports, module) {
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var config = $__require('3');

  module.exports = config.requestProtocol ? config.requestProtocol + ':' : 'http:';
  return module.exports;
});
$__System.registerDynamic('a', [], true, function ($__require, exports, module) {
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
$__System.registerDynamic('b', [], true, function ($__require, exports, module) {
	'use strict';

	var define,
	    global = this || self,
	    GLOBAL = global;
	module.exports = function getResponseHeaders(xhr) {
		return {
			'X-Api-Version': xhr.getResponseHeader('X-Api-Version'),
			'ETag': xhr.getResponseHeader('ETag'),
			'Content-Language': xhr.getResponseHeader('Content-Language')
		};
	};
	return module.exports;
});
$__System.registerDynamic('c', ['b'], true, function ($__require, exports, module) {
	'use strict';

	var define,
	    global = this || self,
	    GLOBAL = global;
	var getResponseHeaders = $__require('b');

	module.exports = function (method, requestUrl, headers, payload) {
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
							headers: getResponseHeaders(xhr)
						});
					} else if (this.status === 304) {
					resolve({
						body: undefined,
						headers: getResponseHeaders(xhr)
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
$__System.registerDynamic('d', ['a', 'c'], true, function ($__require, exports, module) {
	'use strict';

	var define,
	    global = this || self,
	    GLOBAL = global;
	var url = $__require('a');
	var xhr = $__require('c');

	function httpRequest(options, resolve, reject) {
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
			case method === 'POST':
				payload = url.format({ query: data }).slice(1);
				break;
			default:
				requestUrl += url.format({ query: data });
		}

		xhr(method, requestUrl, headers, payload).then(function (response) {
			var body = response.body ? JSON.parse(response.body) : undefined;

			if (body) {
				body.ETag = response.headers.ETag;
			}
			resolve(body);
		}, reject);
	}

	module.exports = {
		/**
   * HTTP GET request.
   * @param {string} url - URL to be requested.
   */
		get: function (options, done, fail) {
			options.method = 'GET';
			httpRequest(options, done, fail);
		},
		/**
   * HTTP POST request.
   * @param {string} url - URL to be requested.
   * @param {Object} [data={}] - Data, that will be sent to the service.
   */
		post: function (options, done, fail) {
			options.method = 'POST';
			httpRequest(options, done, fail);
		},
		/**
   * HTTP HEAD request.
   * @param {string} url - URL to be requested.
   */
		head: function (options, done, fail) {
			options.method = 'HEAD';
			httpRequest(options, done, fail);
		}
	};
	return module.exports;
});
$__System.registerDynamic('e', [], true, function ($__require, exports, module) {
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
$__System.registerDynamic("3", [], true, function ($__require, exports, module) {
	var define,
	    global = this || self,
	    GLOBAL = global;
	module.exports = {
		"defaultRequestMethod": "get",
		"requestProtocol": "https",
		"defaultUpdateInterval": 10000
	};
	return module.exports;
});
$__System.registerDynamic('f', [], true, function ($__require, exports, module) {
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = function () {};
  return module.exports;
});
$__System.registerDynamic('10', ['d', 'e', '3', 'f'], true, function ($__require, exports, module) {
	'use strict';

	var define,
	    global = this || self,
	    GLOBAL = global;
	var http = $__require('d');
	var ApiError = $__require('e');
	var config = $__require('3');
	var noop = $__require('f');

	function Resource(optoins) {
		optoins = optoins || {};
		if (optoins.deprecated) {
			console.warn(optoins.url + ' resource is deprecated');
		}
		this.url = optoins.url;
		this.params = optoins.params;
		this.listeners = [];
		this.value = undefined;
		this.state = this.STATE.UNINTIALIZED;
		this.intervalId = -1;
		this.fetchInterval = optoins.interval;
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
			var request = config.defaultRequestMethod.toUpperCase() === 'POST' ? http.post : http.get;

			callback = callback || noop;
			errorCallback = errorCallback || noop;
			resource.state = resource.STATE.FETCHING;
			request({
				url: this.url,
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
$__System.registerDynamic('5', ['3', '10'], true, function ($__require, exports, module) {
    'use strict';

    var define,
        global = this || self,
        GLOBAL = global;
    var config = $__require('3');
    var Resource = $__require('10');

    function Endpoint(endpointConfig) {
        endpointConfig = endpointConfig || {};
        endpointConfig.url = endpointConfig.url + '/'; //needs trailing slash for correct work
        endpointConfig.interval = endpointConfig.interval || config.defaultUpdateInterval;
        var endpoint = function (params) {
            var options = Object.assign({}, endpointConfig, { params: params });
            return new Resource(options);
        };
        endpoint.url = endpointConfig.url;
        return endpoint;
    }

    module.exports = Endpoint;
    return module.exports;
});
$__System.registerDynamic('11', ['3', '4', '5'], true, function ($__require, exports, module) {
	'use strict';

	var define,
	    global = this || self,
	    GLOBAL = global;
	var config = $__require('3');
	var protocol = $__require('4');
	var Endpoint = $__require('5');

	function WargamingNet(realm) {
		var realmUrl = WargamingNet.realms[realm];
		var apiUrl = protocol + '//' + realmUrl + '/wgn';
		if (!realmUrl) {
			throw new ReferenceError('Requested realm "' + realm + '" is not supported for this API');
		}

		Object.assign(this, {
			account: {
				players: new Endpoint({
					url: apiUrl + '/account/list'
				}),
				player: new Endpoint({
					url: apiUrl + '/account/info'
				})
			},
			wargag: {
				content: new Endpoint({
					url: apiUrl + '/wargag/content'
				}),
				search: new Endpoint({
					url: apiUrl + '/wargag/search'
				}),
				comments: new Endpoint({
					url: apiUrl + '/wargag/comments'
				}),
				categories: new Endpoint({
					url: apiUrl + '/wargag/categories'
				}),
				rate: new Endpoint({
					url: apiUrl + '/wargag/rate'
				}),
				createComment: new Endpoint({
					url: apiUrl + '/wargag/newcomment'
				}),
				deleteComment: new Endpoint({
					url: apiUrl + '/wargag/deletecomment'
				})
			},
			league: {
				list: new Endpoint({
					url: apiUrl + '/league/leagues'
				}),
				tournaments: new Endpoint({
					url: apiUrl + '/league/tournaments'
				}),
				grid: new Endpoint({
					url: apiUrl + '/league/grid'
				}),
				tournamentMatches: new Endpoint({
					url: apiUrl + '/league/matches'
				}),
				teams: new Endpoint({
					url: apiUrl + '/league/teams'
				}),
				teamInfo: new Endpoint({
					url: apiUrl + '/league/teaminfo'
				}),
				hallOfFame: new Endpoint({
					url: apiUrl + '/league/halloffame'
				}),
				players: new Endpoint({
					url: apiUrl + '/league/players'
				}),
				playerInfo: new Endpoint({
					url: apiUrl + '/league/playerinfo'
				})
			},
			clan: {
				list: new Endpoint({
					url: apiUrl + '/clans/list'
				}),
				info: new Endpoint({
					url: apiUrl + '/clans/info'
				}),
				playerInfo: new Endpoint({
					url: apiUrl + '/clans/membersinfo'
				}),
				glossary: new Endpoint({
					url: apiUrl + '/clans/glossary'
				}),
				messageboard: new Endpoint({
					url: apiUrl + '/clans/messageboard'
				})
			},
			wgTv: {
				tags: new Endpoint({
					url: apiUrl + '/wgtv/tags'
				}),
				videos: new Endpoint({
					url: apiUrl + '/wgtv/videos'
				}),
				vehicles: new Endpoint({
					url: apiUrl + '/wgtv/vehicles'
				})
			},
			server: {
				info: new Endpoint({
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
$__System.registerDynamic('1', ['2', '6', '7', '8', '9', '11'], true, function ($__require, exports, module) {
    'use strict';

    var define,
        global = this || self,
        GLOBAL = global;
    var Wot = $__require('2');
    var Wotb = $__require('6');
    var Wotx = $__require('7');
    var Wows = $__require('8');
    var Wowp = $__require('9');
    var Net = $__require('11');

    module.exports = {
        version: '1.9.0',
        revision: 'april2016',
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
    define([], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory();
  else
    factory();
});
//# sourceMappingURL=wg.js.map