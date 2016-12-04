'use strict'

var config = require('config')
var Resource = require('./resource.js')

function Endpoint(endpointConfig) {
    endpointConfig = endpointConfig || {}
    endpointConfig.url = endpointConfig.url + '/' //needs trailing slash for correct work
    endpointConfig.interval = endpointConfig.interval || config.defaultUpdateInterval
    var endpoint = function (params) {
        var options = Object.assign({}, endpointConfig, { params: params })
        return new Resource(options)
    }
    endpoint.url = endpointConfig.url
    return endpoint
}


module.exports = Endpoint