import { combineReducers } from 'redux';
import ToDosReducer from './reducer_todos';
import visibilityFilter from './visibilityFilters';

const rootReducer = combineReducers({
  todoList: ToDosReducer,
  visibilityFilter
});

export default rootReducer;
