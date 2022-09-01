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
    init(string key, params?: { region?: 'eu' | 'us', version?: 'legacy' | 'nextgen', cookies?: boolean })
    ```

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

For more info visit https://www.smartlook.com/docs/api.html
