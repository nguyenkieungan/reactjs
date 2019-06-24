import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// Actions
import * as userActions from '../actions/userActions';
// Child components
import UserList from '../components/UserList';

class UsersPage extends React.Component {
  constructor(props) {
    super(props);
    this.deleteUser = this.deleteUser.bind(this);
  }

  deleteUser(id) {
    if (window.confirm('Are you sure you want to delete this user?')) {
      this.props.actions.deleteUser(id);
    }
  }

  render() {
    return (
      <div className="user-management">
        {
          this.props.ajaxLoading ?
            <p className="text-center alert alert-info">Loading users...</p>
            :
            <UserList users={this.props.users}
                          onDeleteUser={this.deleteUser} />
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  let users = state.users;
  return {
    users: users,
    ajaxLoading: state.ajaxLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);