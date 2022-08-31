type SmartlookWindow = Window & { smartlook?: any }
const SL_NOT_INITIALIZED = 'Smartlook client is not initialized.'

export default {
	/**
	 * Initializes the Smartlook web sdk library
	 *
	 * @param key Project key from project settings
	 * @param params Not required parameters, default region is 'eu', default version is 'nextgen'
	 *  and storing metadata in cookies is enabled by default
	 */
	init: function (key: string, params?: { region?: 'eu' | 'us'; version?: 'nextgen' | 'legacy', cookies?: boolean }): boolean {
		const w = window as SmartlookWindow
		if (w.smartlook) {
			console.warn('Smartlook client is already initialized.')
			return false
		}
		w.smartlook = function () {
			w.smartlook.api.push(arguments)
		}

		const { region = 'eu', version = 'nextgen', cookies = true } = params ?? {}

		w.smartlook.api = []
		w.smartlook('init', key, { region, cookies })

		const head = window.document.getElementsByTagName('head')[0]
		const script = window.document.createElement('script')
		script.async = true
		script.type = 'text/javascript'
		script.crossOrigin = 'anonymous'
		script.src =
			version === 'nextgen' ? 'https://web-sdk.smartlook.com/recorder.js' : 'https://rec.smartlook.com/recorder.js'
		head.appendChild(script)

		return true
	},
	identify: function (userId: string | number, props: { [key: string]: string | boolean | number }): boolean {
		const w = window as SmartlookWindow
		if (!w.smartlook) {
			console.warn(SL_NOT_INITIALIZED)
			return false
		}
		if (!userId) {
			console.warn('Smartlook - User ID must be provided')
			return false
		}
		w.smartlook('identify', userId, props)
		return true
	},
	anonymize: function (): boolean {
		const w = window as SmartlookWindow
		if (!w.smartlook) {
			console.warn(SL_NOT_INITIALIZED)
			return false
		}
		w.smartlook('anonymize')
		return true
	},
	track: function (eventName: string, props: { [key: string]: string | boolean | number }): boolean {
		const w = window as SmartlookWindow
		if (!w.smartlook) {
			console.warn(SL_NOT_INITIALIZED)
			return false
		}
		w.smartlook('track', eventName, props)
		return true
	},
	disable: function (): boolean {
		const w = window as SmartlookWindow
		if (!w.smartlook) {
			console.warn(SL_NOT_INITIALIZED)
			return false
		}
		w.smartlook('disable')
		return true
	},
	record: function (params: {
		forms?: boolean
		ips?: boolean
		numbers?: boolean
		emails?: boolean
		api?: boolean
	}): boolean {
		const w = window as SmartlookWindow
		if (!w.smartlook) {
			console.warn(SL_NOT_INITIALIZED)
			return false
		}
		w.smartlook('record', params)
		return true
	},
	getData: function (callback: () => void): boolean {
		const w = window as SmartlookWindow
		if (!w.smartlook) {
			console.warn(SL_NOT_INITIALIZED)
			return false
		}
		w.smartlook(callback)
		return true
	},
	restart: function (): boolean {
		const w = window as SmartlookWindow
		if (!w.smartlook) {
			console.warn(SL_NOT_INITIALIZED)
			return false
		}
		w.smartlook('restart')
		return true
	},
	pause: function (): boolean {
		const w = window as SmartlookWindow
		if (!w.smartlook) {
			console.warn(SL_NOT_INITIALIZED)
			return false
		}
		w.smartlook('pause')
		return true
	},
	resume: function (): boolean {
		const w = window as SmartlookWindow
		if (!w.smartlook) {
			console.warn(SL_NOT_INITIALIZED)
			return false
		}
		w.smartlook('resume')
		return true
	},
	error: function (error: string | Error): boolean {
		const w = window as SmartlookWindow
		if (!w.smartlook) {
			console.warn(SL_NOT_INITIALIZED)
			return false
		}
		w.smartlook('error', error)
		return true
	},
	navigation: function (locationOrPath: string): boolean {
		const w = window as SmartlookWindow
		if (!w.smartlook) {
			console.warn(SL_NOT_INITIALIZED)
			return false
		}
		w.smartlook('navigation', locationOrPath)
		return true
	},
	properties: function (properties: { [key: string]: string | boolean | number }): boolean {
		const w = window as SmartlookWindow
		if (!w.smartlook) {
			console.warn(SL_NOT_INITIALIZED)
			return false
		}
		w.smartlook('properties', properties)
		return true
	},
	initialized: function (): boolean {
		const w = window as SmartlookWindow
		return !!w.smartlook
	},
	get playUrl(): string | undefined {
		const w = window as SmartlookWindow
		return w.smartlook.playUrl
	},
	get sessionId(): string | undefined {
		const w = window as SmartlookWindow
		return w.smartlook.sessionId
	},
	get visitorId(): string | undefined {
		const w = window as SmartlookWindow
		return w.smartlook.visitorId
	},
	get recordId(): string | undefined {
		const w = window as SmartlookWindow
		return w.smartlook.recordId
	},
	get key(): string | undefined {
		const w = window as SmartlookWindow
		return w.smartlook.key
	},
	get version(): string | undefined {
		const w = window as SmartlookWindow
		return w.smartlook.version
	},
}
