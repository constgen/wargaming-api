System.config({
	meta: {
		'*.json': { loader: 'json' }
	},
	map: {
		'json': '../node_modules/systemjs-plugin-json/json.js', //loader plugin
		'config': '../src/config.json'
	}
})

System.config({
	defaultJSExtensions: false,
	map: {
		'../../src/': 'source:',
		'../../': 'project:'
	},
	paths: {
		'project:*': '../*',
		'source:*': '../src/*'
	}
})
