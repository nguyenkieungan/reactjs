import * as types from '../contains/index';

const initialState = {
  users: [],
  ajaxLoading: false
}

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_USERS:
      return action.users;
    case types.ADD_USER:
      return [
        ...state,
        Object.assign({}, action.user)
      ];
    case types.EDIT_USER:
      return [
        ...state.filter(user => user.id !== action.user.id),
        Object.assign({}, action.user)
      ];
    case types.DELETE_USER:
      return [
        ...state.filter(user => user.id !== action.id)
      ];
    default:
      return state;
  }
}