import React, { Component } from 'react'
import { Provider } from 'react-redux'
import AppRouter from './containers/Router'
import store from './store/index';


class Redux extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    )
  }
}


export default Redux;
