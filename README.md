# Smartlook-client

Imports and initializes Smartlook recorder into a page.

1. Installation
    ```
    npm install smartlook-client --save
    ```
    or
    ```
    yarn add smartlook-client
    ```
2. Import
    ```
    import smartlookClient from 'smartlook-client'
    ```
    or
    ```
    var smartlookClient = require('smartlook-client')
    ```
3. API
		```
		init(string key)
		tag(string tagName, string tagValue)
		disable()
		```
4. Example usage
    ```
    import React, { Component } from 'react'
    import smartlookClient from 'smartlook-client'

    class App extends Component {
    	handleTag() {
    		smartlookClient.tag('tagName', 'tagValue')
    	}
    	handleDisable() {
    		smartlookClient.disable()
    	}
    	render() {
    		return (
    			<div>
    				<button onClick={this.handleInitialize.bind(this)}>Initialize</button>
    				<button onClick={this.handleTag.bind(this)}>Tag</button>
    				<button onClick={this.handleDisable.bind(this)}>Disable</button>
    			</div>
    		)
    	}
    	componentDidMount() {
    		smartlookClient.init('43bc84d9a8406exxxxxxxxxb5601f5bbf8d2ed')
    	}
    }

    export default App
    ```
