import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';

class EditUser extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="d-flex">
        edit user
      </div>
    )
  }
}

export default EditUser;