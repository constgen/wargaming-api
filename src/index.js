'use strict'

var Wot = require('./api/wot.js')
var Wotb = require('./api/wotb.js')
var Wotx = require('./api/wotx.js')
var Wows = require('./api/wows.js')
var Wowp = require('./api/wowp.js')
var Net = require('./api/net.js')

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
}