module.exports = {
	init: function(key) {
		if (window.smartlook) {
			throw 'Smartlook client is already initialized.'
		}
		window.smartlook = function() {
			window.smartlook.api.push(arguments)
		}
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
	identify: function(userId, props) {
		if (!window.smartlook) {
			throw 'Smartlook client is not initialized.'
		}
		if (!userId) {
			throw 'Smartlook - User ID must be provided'
		}
		window.smartlook('identify', userId, props)
	},
	track: function(eventName, props) {
		if (!window.smartlook) {
			throw 'Smartlook client is not initialized.'
		}
		window.smartlook('track', eventName, props)
	},
	disable: function() {
		if (!window.smartlook) {
			throw 'Smartlook client is not initialized.'
		}
		window.smartlook('disable')
	},
	consentForms: function(consent) {
		if (!window.smartlook) {
			throw 'Smartlook client is not initialized.'
		}
		window.smartlook('consentForms', consent)
	},
	consentIP: function(consent) {
		if (!window.smartlook) {
			throw 'Smartlook client is not initialized.'
		}
		window.smartlook('consentIP', consent)
	},
	consentAPI: function(consent) {
		if (!window.smartlook) {
			throw 'Smartlook client is not initialized.'
		}
		window.smartlook('consentAPI', consent)
	},
	getData: function(callback) {
		if (!window.smartlook) {
			throw 'Smartlook client is not initialized.'
		}
		window.smartlook(callback)
	}
}
