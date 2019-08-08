type SmartlookWindow = Window & { smartlook?: any }
const SL_NOT_INITIALIZED = 'Smartlook client is not initialized.'

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
		script.crossOrigin = 'anonymous'
		script.src = 'https://rec.smartlook.com/recorder.js'
		head.appendChild(script)
	},
	identify: function(userId: string, props: { [key: string]: string | boolean | number }):void {
		const w = window as SmartlookWindow
		if (!w.smartlook) {
			throw SL_NOT_INITIALIZED
		}
		if (!userId) {
			throw 'Smartlook - User ID must be provided'
		}
		w.smartlook('identify', userId, props)
	},
	anonymize: function(): void {
		const w = window as SmartlookWindow
		if (!w.smartlook) {
			throw SL_NOT_INITIALIZED
		}
		w.smartlook('anonymize')
	},
	track: function(eventName: string, props: { [key: string]: string | boolean | number }):void {
		const w = window as SmartlookWindow
		if (!w.smartlook) {
			throw SL_NOT_INITIALIZED
		}
		w.smartlook('track', eventName, props)
	},
	disable: function():void {
		const w = window as SmartlookWindow
		if (!w.smartlook) {
			throw SL_NOT_INITIALIZED
		}
		w.smartlook('disable')
	},
	consentForms: function(consent: string | false):void {
		const w = window as SmartlookWindow
		if (!w.smartlook) {
			throw SL_NOT_INITIALIZED
		}
		w.smartlook('consentForms', consent)
	},
	consentIP: function(consent: string | false):void {
		const w = window as SmartlookWindow
		if (!w.smartlook) {
			throw SL_NOT_INITIALIZED
		}
		w.smartlook('consentIP', consent)
	},
	consentAPI: function(consent: string | false):void {
		const w = window as SmartlookWindow
		if (!w.smartlook) {
			throw SL_NOT_INITIALIZED
		}
		w.smartlook('consentAPI', consent)
	},
	getData: function(callback: () => void):void {
		const w = window as SmartlookWindow
		if (!w.smartlook) {
			throw SL_NOT_INITIALIZED
		}
		w.smartlook(callback)
	},
	restart: function():void {
		const w = window as SmartlookWindow
		if (!w.smartlook) {
			throw SL_NOT_INITIALIZED
		}
		w.smartlook('restart')
	},
	error: function(error: string | Error):void {
		const w = window as SmartlookWindow
		if (!w.smartlook) {
			throw SL_NOT_INITIALIZED
		}
		w.smartlook('error', error)
	}
}
