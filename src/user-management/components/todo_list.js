import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ToDoItem from '../components/todo_item';
import { deleteUser, fetchUsers } from '../actions';

import { bindActionCreators } from 'redux';

class UserList extends Component {
  constructor(props) {
    super(props)
    this.deleteUser = this.deleteUser.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  deleteUser(id) {
    this.props.deleteUser(id)
  }

  render() {
    const { employees } = this.props
    return (
      <div>
        <table className="user-management__table table">
          <thead>
            <tr>
              <th>No.</th>
              <th>User Name</th>
              <th>Department</th>
              <th>Position</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(
              employee => <ToDoItem deleteUser={this.deleteUser} key={employee.id} employee={employee}/>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    employees: state.employees,
  }
}

const mapDispatchToprops = (dispatch) => {
  return bindActionCreators({ deleteUser, fetchUsers }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToprops)(UserList);