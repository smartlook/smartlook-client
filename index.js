module.exports = (function(w) {
	if (!w) {
		throw 'Window is not available, smartlook-client has to be run in browser environment.'
	}
	return {
		init: function(key) {
			if (w.smartlook) {
				throw 'Smartlook client is already initialized.'
			}
			w.smartlook = function(){ w.smartlook.api.push(arguments) }
			w.smartlook.api = []
			w.smartlook('init', key)

			const head = w.document.getElementsByTagName('head')[0]
			const script = w.document.createElement('script')
			script.async = true
			script.type = 'text/javascript'
			script.charset = 'utf-8'
			script.src = 'https://rec.smartlook.com/recorder.js'
			head.appendChild(script)
		},
		tag: function(name, value) {
			if (!w.smartlook) {
				throw 'Smartlook client is not initialized.'
			}
			w.smartlook('tag', name, value)
		},
		disable: function() {
			if (!w.smartlook) {
				throw 'Smartlook client is not initialized.'
			}
			w.smartlook('disable', true)
		}
	}
})(window)
