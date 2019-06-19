import React from 'react';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UserList = ({users, onDeleteUser, pages, currentPage, match}) => {
  return (
    !users.length ?
      <p className="alert alert-warning text-center">No users found.</p>
      :
      <div className="user-management__list">
        <div className="responsive-table">
          <table className="user-management__table">
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Address</th>
                <th>Phone Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user =>
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <div className="d-flex">
                      <div className="todo__btn--del">
                        <button className="btn btn-sm btn-danger" onClick={() => onDeleteUser(user.id)}>
                          <FontAwesomeIcon icon="trash-alt" />
                        </button>
                      </div>
                      <div className="todo__btn--edit">
                        <NavLink className="btn btn-primary btn-sm" to={`/user-redux/edit/` + user.id}>
                          <FontAwesomeIcon icon="pencil-alt" />
                        </NavLink>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
  )
};

export default UserList;