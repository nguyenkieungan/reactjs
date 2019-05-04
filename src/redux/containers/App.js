import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';

import AddTodoButton from '../components/addTodo';
import NewTodoInput from '../components/newTodo';
import FilterTodo from '../components/filterTodo';
import ToDoList from './todo_list';

class App extends Component {
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
    this.props.dispatch({ type: 'ADD_TODO', payload: this.state.newTodoText })
  }

  render() {
    const { todoList } = this.props;
    return (
      <div className="todo mt-3 mb-3 ml-3">
        <h5>To Do List App</h5>
        <div className="d-flex">
          <NewTodoInput onTextChange={this.handleTodoTextChange}/>
          <AddTodoButton onClick={this.handleSubmit}/>
        </div>
        <ToDoList todos={todoList}/>
        <FilterTodo />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todoList: state.todoList,
  }
}

export default hot(module)(connect(mapStateToProps)(App));