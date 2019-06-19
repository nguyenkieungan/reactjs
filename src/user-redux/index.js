import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// Initial action to load merchant list from API
import { getUsers } from './actions/userActions';
import configureStore from './store/configureStore';

// App component
import App from './App';

const store = configureStore();
// Load user list from API as soon as application initiates
store.dispatch(getUsers());

class UserRedux extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default UserRedux;


