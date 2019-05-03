import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import reducers from './reducers'

const store = createStore(reducers)

class Redux extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}


export default Redux;
