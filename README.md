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
    import smartlookClient from 'smartlook-client'
    ```
    or
    ```
    var smartlookClient = require('smartlook-client')
    ```
3.  API

    ```
    init(string key)
    init(string key, params?: { region?: 'eu' | 'us', cookies?: boolean, relayProxyUrl?: string })
    ```
	Required parameters:
	* key:
		* Obtained in application at project settings

	Optional parameters:

	* region:
		* supported values:
			* `'eu'`
			* `'us'`
		* example:
			* `smartlookClient.init('xxxxx', { region: 'us' })`
		* description
			* Region where data will be captured and stored
			* **Do not change** unless told by your sales manager
	* cookies:
		* supported values:
			* `true`
			* `false`
		* example:
			* `smartlookClient.init('xxxxx', { cookies: false })`
		* description
			* Use false if you do not want to store recording metadata in cookies
			* Note that disabling cookies with block the ability to connect visitors between domain and its subdomains.
	* relayProxyUrl:
		* supported values:
			* full URL of self-hosted relay proxy
				* e.g. `'https://my-proxy-domain.com/'`
		* example
			* `smartlookClient.init('xxxxx', { relayProxyUrl: 'https://my-proxy-domain.com/' })`
		* description:
			* Read more about relay proxy at https://help.smartlook.com/en/articles/6120645-smartlook-relay-proxy and https://github.com/smartlook/smartlook-relay-proxy

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
    import smartlookClient from 'smartlook-client'

    class App extends Component {
    	handleIdentify = () => {
    		smartlookClient.identify(12345, {
    			name: 'John Doe',
    			email: 'email@domain.com',
    			// other custom properties
    		})
    	}
    	handleTrack = () => {
    		smartlookClient.track('transaction', {
    			value: 150,
    			currency: 'usd',
    			product: 'Product Description',
    			// other custom properties
    		})
    	}
    	handlePause = () => {
    		smartlookClient.pause()
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
    		smartlookClient.init('43bc84d9a8406exxxxxxxxxb5601f5bbf8d2ed')
    	}
    }

    export default App
    ```

For more info visit https://web.developer.smartlook.com/reference/getting-started-with-your-api
