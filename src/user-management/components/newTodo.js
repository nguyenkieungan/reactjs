import React, { Component } from 'react';

class NewTodoInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      task: '',
      department: '',
      postition: ''
    }
  }

  handleInputChange(text) {
    this.setState({task: text});
    this.props.onTextChange(text)
  }

  handleInput1Change(text) {
    this.setState({department: text});
    this.props.onTextChange(text)
  }

  handleInput2Change(text) {
    this.setState({postition: text});
    this.props.onTextChange(text)
  }

  render() {
    return (

      <div className="user-management__add">

        <form>
          <fieldset>
            <input placeholder="Staff name" type="text" required autoFocus
              onChange={event => this.handleInputChange(event.target.value)}
              type="text"
              className="form-control todo__box-input"
              value={this.state.task}
             />
          </fieldset>
          <fieldset>
            <input placeholder="Department" type="text" required 
              onChange={event => this.handleInput1Change(event.target.value)}
              type="text"
              className="form-control todo__box-input"
              value={this.state.department}
            />
          </fieldset>
          <fieldset>
            <input placeholder="Position" type="text" required 
              onChange={event => this.handleInput2Change(event.target.value)}
              type="text"
              className="form-control todo__box-input"
              placeholder="Position"
              value={this.state.postition}
            />
          </fieldset>
        </form> 
        
        {/* <input
          onChange={event => this.handleInputChange(event.target.value)}
          type="text"
          className="form-control todo__box-input"
          placeholder="new task"
          value={this.state.task}
        /> */}
      </div>
    )
  }
}

export default NewTodoInput;
