import { combineReducers } from 'redux';
import employees from './reducer_todos';

const rootReducer = combineReducers({
  employees,
});

export default rootReducer;
