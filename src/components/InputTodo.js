import React, { Component } from 'react'

class InputTodo extends Component {
  state = {
    title: ''
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.title && this.state.title.trim() !== '') {
      this.props.addTodoProps(this.state.title.trim());
      this.setState({
        title: ""
      });
    };
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
      >
        <input
          name="title"
          type='text'
          placeholder='Add Todo...'
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type='submit'
          value='Submit' />
      </form>
    )
  }
}
export default InputTodo