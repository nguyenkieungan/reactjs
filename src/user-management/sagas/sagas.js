import axios from 'axios';
import { call, put, takeEvery, all } from 'redux-saga/effects';

const ROOT_URL = 'http://5d06feddfa00250014577971.mockapi.io/v1';

export function* fetchUsers() {
  try {
    const employees = yield call(axios.get, `${ROOT_URL}/users`);
    yield put({ type: 'FETCH_USERS_SUCCESS', employees})
    console.log(employees);
  } catch (error) {
    console.log('fetchTodos error:', error.message)
  }
}

function* watchFetchUsers() {
  yield takeEvery('FETCH_USERS', fetchUsers)
}

export function* createUser(action) {
  const newTodo = { name: action.payload, department: action.payload1, position: action.payload2 };
  try {
    yield call(axios.post, `${ROOT_URL}/users`, newTodo);
    yield put({type:'FETCH_USERS'});
  } catch (error) {
    console.log('createUser error:', error.message);
  }
}

function * watchAddUser() {
  yield takeEvery('ADD_USER', createUser)
}

// export function* editUser({id}) {
//   try {

//   }
// }
 
export function* deleteUser({id}) {
  try {
    yield call(axios.delete, `${ROOT_URL}/users/${id}`);
    yield put({type: 'FETCH_USERS'})
  } catch (error) {
    console.log('deleteUser Error:', error.message);
  }
}

function* watchDeleteUser() {
  // takeEvery: thực thi và trả lại kết quả của mọi actions được gọi
  yield takeEvery('DELETE_USER', deleteUser)
}

export default function* rootSaga() {
  yield all([
    watchFetchUsers(),
    watchAddUser(),
    watchDeleteUser()
  ])
};
