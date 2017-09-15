System.config({
	meta: {
		'*.json': { loader: 'json' }
	},
	map: {
		'json': '../node_modules/systemjs-plugin-json/json.js' //loader plugin
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

System.config({
	meta: {
		'http': { build: false },
		'https': { build: false },
		'url': { build: false }
	},
	paths: {
		'http': '../src/utils/noop.js',
		'https': '../src/utils/noop.js',
		'url': '../src/utils/noop.js'
	}
})