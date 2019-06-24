import axios from 'axios';
import {ADD_USER, EDIT_USER, DELETE_USER, SET_USERS, AJAX_LOADING} from '../contains/index';

export function addUser(user) {
  return { type: ADD_USER, user};
}

export function editUser(user) {
  return { type: EDIT_USER, user};
}

export function deleteUser(id) {
  return { type: DELETE_USER, id};
}

export function setUsers(users) {
  return { type: SET_USERS, users};
}

export function ajaxLoading(status) {
  return { type: AJAX_LOADING, status};
}

export function getUsers() {
  return dispatch => {
    dispatch(ajaxLoading(true));
    axios.get('https://5d06feddfa00250014577971.mockapi.io/v1/users')
      .then(response => {
        dispatch(setUsers(response.data));
        dispatch(ajaxLoading(false));
      })
      .catch(error => {
        console.error(error);
        dispatch(ajaxLoading(false));
      });
  };
}