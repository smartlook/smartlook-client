type SmartlookWindow = Window & { smartlook?: any }

export default {
	init: function(key: string):void {
		const w = window as SmartlookWindow
		if (w.smartlook) {
			throw 'Smartlook client is already initialized.'
		}
		w.smartlook = function() {
			w.smartlook.api.push(arguments)
		}
		w.smartlook.api = []
		w.smartlook('init', key)

		const head = window.document.getElementsByTagName('head')[0]
		const script = window.document.createElement('script')
		script.async = true
		script.type = 'text/javascript'
		script.charset = 'utf-8'
		script.src = 'https://rec.smartlook.com/recorder.js'
		head.appendChild(script)
	},
	identify: function(userId: string, props: { [key: string]: string | boolean | number }):void {
		const w = window as SmartlookWindow
		if (!w.smartlook) {
			throw 'Smartlook client is not initialized.'
		}
		if (!userId) {
			throw 'Smartlook - User ID must be provided'
		}
		w.smartlook('identify', userId, props)
	},
	track: function(eventName: string, props: { [key: string]: string | boolean | number }):void {
		const w = window as SmartlookWindow
		if (!w.smartlook) {
			throw 'Smartlook client is not initialized.'
		}
		w.smartlook('track', eventName, props)
	},
	disable: function():void {
		const w = window as SmartlookWindow
		if (!w.smartlook) {
			throw 'Smartlook client is not initialized.'
		}
		w.smartlook('disable')
	},
	consentForms: function(consent: string | false):void {
		const w = window as SmartlookWindow
		if (!w.smartlook) {
			throw 'Smartlook client is not initialized.'
		}
		w.smartlook('consentForms', consent)
	},
	consentIP: function(consent: string | false):void {
		const w = window as SmartlookWindow
		if (!w.smartlook) {
			throw 'Smartlook client is not initialized.'
		}
		w.smartlook('consentIP', consent)
	},
	consentAPI: function(consent: string | false):void {
		const w = window as SmartlookWindow
		if (!w.smartlook) {
			throw 'Smartlook client is not initialized.'
		}
		w.smartlook('consentAPI', consent)
	},
	getData: function(callback: () => void):void {
		const w = window as SmartlookWindow
		if (!w.smartlook) {
			throw 'Smartlook client is not initialized.'
		}
		w.smartlook(callback)
	}
}
