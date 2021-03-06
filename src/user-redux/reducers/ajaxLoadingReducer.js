import * as types from '../contains/index';
import initialState from '../store/initialState';

export default function ajaxLoadingReducer(state = initialState.ajaxLoading, action) {
  if (action.type === types.AJAX_LOADING) {
    return action.status
  }
  return state;
}