type SmartlookWindow = Window & { smartlook?: any }
const SL_NOT_INITIALIZED = 'Smartlook client is not initialized.'

interface Network {
	allowedHeaders?: string[]
	allowedUrls?: (string | RegExp)[]
}

type RequestOrResponse = {
	body?: string
	headers?: Record<string, string[]>
}

interface Interceptors {
	network?: (
		data: {
			request?: RequestOrResponse
			response?: RequestOrResponse
			url: string
		},
		context: { pageUrl: string },
	) => void | false
	url?: (data: { url: string }) => void
}

export type InitParams = {
	// Advanced network recording allows recording the bodies and headers of requests and responses.
	advancedNetwork?: Network | boolean
	// Interceptors are used to control what data Smartlook captures, and what data sensitive data Smartlook omits.
	interceptors?: Interceptors
	// metadata in cookies is enabled by default
	cookies?: boolean;
	// default region is 'eu'
	region?: 'eu' | 'us';
	// relayProxyUrl is used together with https://help.smartlook.com/en/articles/6120645-smartlook-relay-proxy and should be full url with protocol e.g. https://my-proxy-domain.com/
	relayProxyUrl?: string;
	// (default) false - makes Smartlook try to establish a connection with the parent window and join the session. The session will be reused only when the parent window loads Smartlook and records it as the same project.
	// See more in the iframe recordings section. if the communication is not established within 10 seconds, the recording starts as a standalone anyway, but these first 10 seconds may be missing.
	// true - enable when your application is loaded in an iframe and you do not want Smartlook to try to connect with the parent window. 
	// Enabling this might be useful especially when you develop a third-party integration (e.g. payment gateway) that is inserted as an iframe on multiple websites.
	standalone?: boolean
};

export default {
	/**
	 * Initializes the Smartlook web sdk library
	 * Read more at https://web.developer.smartlook.com/reference/smartlookinit
	 *
	 * @param key Project key from project settings
	 * @param params Optional parameters
	 */
	init: function (key: string, params?: InitParams): boolean {
		const w = window as SmartlookWindow
		if (w.smartlook) {
			console.warn('Smartlook client is already initialized.')
			return false
		}
		w.smartlook = function () {
			w.smartlook.api.push(arguments)
		}

		w.smartlook.api = []

		const initParams: undefined | InitParams & { host?: string } = params
		let src = 'https://web-sdk.smartlook.com/recorder.js'

		if (initParams?.relayProxyUrl) {
			try {
				const constructedUrl = new URL('/recorder.js', initParams.relayProxyUrl)
				initParams.host = constructedUrl.host
				src = constructedUrl.toString()
			} catch (e) {
				console.error('Smartlook init param `relayProxyUrl` is not valid. Please provide full url like `https://my-proxy-domain.com/`.')
				return false
			}
		}

		w.smartlook('init', key, initParams)

		const head = window.document.getElementsByTagName('head')[0]
		const script = window.document.createElement('script')
		script.async = true
		script.type = 'text/javascript'
		script.crossOrigin = 'anonymous'
		script.src = src
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
