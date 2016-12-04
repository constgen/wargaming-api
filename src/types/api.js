'use strict'

function Api(apiConfig) {



}

Api.prototype.buildEndpoints = function (node, basePath) {
	var path
	var subPaths
	var subPathsApis
	basePath = basePath || ''
	if (this.isPath(node)) {
		path = this.getPath(node)
		subPaths = this.getSubPaths(node)
		subPathsApis = Object.keys(subPaths)
		return this.buildEndpoints()
	}
	else {
		node.url = basePath + '/' + node.url
		return new Endpoint(node)
	}
}

Api.prototype.isPath = function (node) {
	return node instanceof Array
}
Api.prototype.getPath = function (node) {
	return node[0]
}
Api.prototype.getSubPaths = function (node) {
	return node[1]
}

module.exports = Api