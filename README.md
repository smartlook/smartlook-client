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
   ```
   ```
   track(string eventName, object<key:value> props)
   ```
   ```
   identify(integer userId, object<key:value> props)
   ```
4. Example usage

   ```
   import React, { Component } from 'react'
   import smartlookClient from 'smartlook-client'

   class App extends Component {
   	handleIdentify() {
   		smartlookClient.tag(12345, { name: 'John Doe', email: 'email@domain.com' })
   	}
   	handleTrack() {
   		smartlookClient.track('userBoughtProduct', { productId: 42 })
   	}
   	render() {
   		return (
   			<div>
   				<button onClick={this.handleIdentify.bind(this)}>Identify visitor</button>
   				<button onClick={this.handleTrack.bind(this)}>Track event</button>
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
