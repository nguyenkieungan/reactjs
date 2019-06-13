export const deleteUser = (id) => {
  return {
    type: 'DELETE_USER',
    id
  }
}

export const fetchUsers = (text) => {
  return { type: 'FETCH_USERS', text }
}

export const addUser = (id, name, department, position) => {
  return { type: 'ADD_USER', id, name, department, position }
}

// export const setVisibilityFilter = (filter) => {
//   return {
//     type: 'SET_VISIBILITY_FILTER',
//     filter
//   }
// }

// export const toggleTodo = (id) => {
//   return {
//     type: 'TOGGLE_TODO',
//     id
//   }
// }

