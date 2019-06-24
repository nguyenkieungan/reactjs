import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// Actions
import * as userActions from '../actions/userActions';
// Child components
import UserForm from '../components/UserForm';

class EditUserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formStatus: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // Check if form has any errors
    if (!this.props.userForm.syncErrors) {
      // Add current user ID to form fields
      let user = Object.assign({}, this.props.userForm.values, {
          id: this.props.currentUser.id
      });
      this.props.actions.editUser(user);
      this.setState({formStatus: 'success'});
    } else {
      this.setState({formStatus: 'error'});
    }
  }

  render() {
    return (
      this.props.ajaxLoading ?
        <p className="text-center alert alert-info">Loading user...</p>
        :
        !this.props.currentUser ?
          <p className="text-center alert alert-danger">User not found.</p>
          :
          <div className="user-management__add">
            <h3 className="text-center text-capitalize">Edit user information</h3>
            <UserForm onSubmit={this.handleSubmit} formStatus={this.state.formStatus}
                          initialValues={this.props.currentUser} />
          </div>
    )
  }
}

// Find current user based on ID passed in URL
function findCurrentUser(users, id = -1) {
  // Find user for given id
  return users.find(user => {
    return parseInt(user.id, 10) === parseInt(id, 10);
  });
}

function mapStateToProps(state, ownProps) {
  let currentUser = state.users.length ? findCurrentUser(state.users, ownProps.match.params.id) : null;
  return {
    currentUser,
    userForm: state.form.user,
    ajaxLoading: state.ajaxLoading,
    goBack: ownProps.history.goBack
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUserPage);