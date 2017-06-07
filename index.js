module.exports = ({
	init: function(key) {
		if (window.smartlook) {
			throw 'Smartlook client is already initialized.'
		}
		window.smartlook = function(){ window.smartlook.api.push(arguments) }
		window.smartlook.api = []
		window.smartlook('init', key)

		const head = window.document.getElementsByTagName('head')[0]
		const script = window.document.createElement('script')
		script.async = true
		script.type = 'text/javascript'
		script.charset = 'utf-8'
		script.src = 'https://rec.smartlook.com/recorder.js'
		head.appendChild(script)
	},
	tag: function(name, value) {
		if (!window.smartlook) {
			throw 'Smartlook client is not initialized.'
		}
		window.smartlook('tag', name, value)
	},
	disable: function() {
		if (!window.smartlook) {
			throw 'Smartlook client is not initialized.'
		}
		window.smartlook('disable', true)
	}
})
