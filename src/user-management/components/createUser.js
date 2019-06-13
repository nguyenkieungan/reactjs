import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';

import AddTodoButton from './addTodo';
import NewTodoInput from './newTodo';

class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodoText: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTodoTextChange = this.handleTodoTextChange.bind(this);
  }

  handleTodoTextChange(text) {
    this.setState({
      newTodoText: text
    })
  }

  handleSubmit() {
    this.props.dispatch({ type: 'ADD_USER', payload: this.state.newTodoText })
  }

  render() {
    return (
      <div>
      <NewTodoInput onTextChange={this.handleTodoTextChange}/>
      <AddTodoButton onClick={this.handleSubmit}/>
      </div>
    )
  }
}

export default hot(module)(connect(null)(CreateUser));