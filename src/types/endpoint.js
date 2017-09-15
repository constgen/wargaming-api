'use strict'

var Resource = require('./resource.js')

var DEFAULT_UPDATE_INTERVAL = 10000

function Endpoint(endpointConfig) {
    endpointConfig = endpointConfig || {}
    endpointConfig.url = endpointConfig.url + '/' //needs trailing slash for correct work
    endpointConfig.interval = endpointConfig.interval || DEFAULT_UPDATE_INTERVAL
    var endpoint = function (params) {
        var options = Object.assign({}, endpointConfig, { params: params })
        return new Resource(options)
    }
    endpoint.url = endpointConfig.url
    return endpoint
}


module.exports = Endpoint