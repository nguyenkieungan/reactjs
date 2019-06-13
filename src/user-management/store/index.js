import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import createSagaMiddleware from 'redux-saga'

import reducers from '../reducers'
import sagas from '../sagas/sagas'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(promise, sagaMiddleware)
);

sagaMiddleware.run(sagas);

export default store;