import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Actions
import * as userActions from '../actions/userActions';
// Child components
import UserForm from '../components/UserForm';

class AddUserPage extends React.Component {
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
      // Add new ID to form fields
      let user = Object.assign({}, this.props.userForm.values, {
        id: this.props.newId
      });
      this.props.actions.addUser(user);
      this.setState({formStatus: 'success'});
    } else {
      this.setState({formStatus: 'error'});
    }
  }

  render() {
    return (
      <div className="user-management__add">
        <h3 className="text-center text-capitalize">Add new user</h3>
        <UserForm onSubmit={this.handleSubmit} formStatus={this.state.formStatus} />
      </div>
    )
  }
}

// Generate ID for new user
function generateNewId(users) {
  // Clone users array
  let sortedUsers = users.slice(0);
  // Sort merchants by ID
  sortedUsers = sortedUsers.sort(function(a, b) {
      return b.id - a.id;
  });
  let lastId = sortedUsers.length ? parseInt(sortedUsers[0].id, 10) : 0;
  return lastId + 1;
}

function mapStateToProps(state) {
  let newId = generateNewId(state.users);
  return {
    userForm: state.form.user,
    newId
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUserPage);