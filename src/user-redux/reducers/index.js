import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// Reducers
import users from './usersReducer';
import ajaxLoading from './ajaxLoadingReducer';

const rootReducer = combineReducers({
  users,
  ajaxLoading,
  form: formReducer
});

export default rootReducer;