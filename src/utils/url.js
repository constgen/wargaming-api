'use strict'

module.exports = {
	//currentlu supports only location.query{}
	format: function(location){
		var href = ''
		var search = ''
		var query = location.query

		if (typeof query === 'object') {
			search = (function(){
				var params = Object.keys(query)
				var i = -1
				var param
				var search = []
				while(++i in params) {
					param = params[i]
					search.push(param + '=' + query[param])
				}
				return search.length ? ('?' + encodeURI(search.join('&'))) : ''
			}())
		}

		return href + search
	}
}