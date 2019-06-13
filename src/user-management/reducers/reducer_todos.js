export default (state = [], action) => {
  switch(action.type) {
    case 'FETCH_USERS_SUCCESS':
      return action.employees.data;
  }
  return state;
}
