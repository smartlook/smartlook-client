# Smartlook-client

Imports and initializes Smartlook recorder into a page.

1.  Installation
    ```
    npm install smartlook-client --save
    ```
    or
    ```
    yarn add smartlook-client
    ```
2.  Import
    ```
    import Smartlook from 'smartlook-client'
    ```
    or
    ```
    const Smartlook = require('smartlook-client')
    ```
3.  API

    ```
    init(key: string)
    init(key: string, params)
    ```
	Required parameters:
	* key:
		* Obtained in application at project settings

	Optional parameters:
    * advancedNetwork:
        * description:
            * Object with settings that control network data capture. Advanced network recording allows recording the bodies and headers of requests and responses.
            * Read more at https://web.developer.smartlook.com/docs/advanced-network-recording
        * `allowedUrls`
            * allows recording of request/response bodies
            * an Array of exact, string patterns or regular expressions
        * `allowedHeaders`
            * allows recording of non-standard headers
            * an Array of exact, case-insensitive patterns
        * `websockets`
            * allows recording of websockets
            * boolean value
    * cookies:
		* supported values:
			* _(default)_ `true` - enable storing of metadata in cookies and local storage
			* `false` - disable storing of metadata in cookies, using only local storage
		* example:
			* `Smartlook.init('xxxxx', { cookies: false })`
		* description
			* Use false if you do not want to store recording metadata in cookies
			* Note that disabling cookies with block the ability to connect visitors between domain and subdomains.
			* Read more at https://help.smartlook.com/en/articles/6064963-cookies-in-smartlook
    * interceptors
        * description:
            * Object with settings that allows control the data that Smartlook captures.
            * Read more at https://web.developer.smartlook.com/docs/interceptors
        * `url`
            * URL interceptor that can obscure sensitive data from URLs
        * `network`
            * Network interceptor that can obscure sensitive data from recorded network calls—bodies, headers, and URLs.
            * Network events can be completely omitted by returning false from the interceptor.
        * `error`
            * 	Error interceptor that can obscure sensitive data from error events
        * `focus`
            * 	Focus interceptor that can obscure sensitive data from focus events
        * `input`
            * 	Input interceptor that can obscure sensitive data from input events
        * `click`
            * 	Click interceptor that can obscure sensitive data from click events
            
	* region:
		* supported values:
			* `'eu'`
			* `'us'`
		* example:
			* `Smartlook.init('xxxxx', { region: 'us' })`
		* description
			* Region where data will be captured and stored
			* **Do not change** unless told by your sales manager
	* relayProxyUrl:
		* supported values:
			* full URL of self-hosted relay proxy
				* e.g. `'https://my-proxy-domain.com/'`
		* example
			* `Smartlook.init('xxxxx', { relayProxyUrl: 'https://my-proxy-domain.com/' })`
		* description:
			* Read more at https://help.smartlook.com/en/articles/6120645-smartlook-relay-proxy and https://github.com/smartlook/smartlook-relay-proxy
	* standalone:
		* supported values:
            * _(default)_ `false` - makes Smartlook try to establish a connection with the parent window and join the session. The session will be reused only when the parent window loads Smartlook and records it as the same project. See more in the iframe recordings section. if the communication is not established within 10 seconds, the recording starts as a standalone anyway, but these first 10 seconds may be missing.
            * `true` - enable when your application is loaded in an iframe and you do not want Smartlook to try to connect with the parent window. Enabling this might be useful especially when you develop a third-party integration (e.g. payment gateway) that is inserted as an iframe on multiple websites.

	---

    ```
    track(string eventName, object<key:value> props)
    ```

    ```
    identify(integer | string userId, object<key:value> props)
    ```

    ```
    anonymize()
    ```

    ```
    disable()
    ```

    ```
    record(params: { forms?: boolean, ips?: boolean, emails?: boolean, numbers?: boolean })
    ```

    ```
    getData(function callback)
    ```

    ```
    restart()
    ```

    ```
    pause()
    ```

    ```
    resume()
    ```

    ```
    error(string | Error error)
    ```

    ```
    navigation(string locationOrPath)
    ```

    ```
    properties(object<key:value> properties)
    ```

    ```
    initialized()
    ```

    ```
    playUrl
    ```

    ```
    sessionId
    ```

    ```
    visitorId
    ```

    ```
    recordId
    ```

    ```
    key
    ```

    ```
    version
    ```

4.  Example usage in React

    Usage in other libraries is similar.

    ```js
    import React, { Component } from 'react'
    import Smartlook from 'smartlook-client'

    class App extends Component {
    	handleIdentify = () => {
    		Smartlook.identify(12345, {
    			name: 'John Doe',
    			email: 'email@domain.com',
    			// other custom properties
    		})
    	}
    	handleTrack = () => {
    		Smartlook.track('transaction', {
    			value: 150,
    			currency: 'usd',
    			product: 'Product Description',
    			// other custom properties
    		})
    	}
    	handlePause = () => {
    		Smartlook.pause()
    	}
    	render() {
    		return (
    			<div>
    				<button onClick={this.handleIdentify}>Identify visitor</button>
    				<button onClick={this.handleTrack}>Track event</button>
    				<button onClick={this.handlePause}>Pause recording</button>
    			</div>
    		)
    	}
    	componentDidMount() {
    		Smartlook.init('43bc84d9a8406exxxxxxxxxb5601f5bbf8d2ed')
    	}
    }

    export default App
    ```

For more info visit https://web.developer.smartlook.com/reference/getting-started-with-your-api
