import React from 'react';

class TodoItem extends React.Component {
  render() {
    const { completed, id, title } = this.props.todo

    const completedStyle = {
      textDecoration: "line-through",
    }

    return (
      <li>
        <input
          type='checkbox'
          checked={completed}
          onChange={() => this.props.changeDoneProps(id)}
        />
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
        <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
        <button onClick={() => this.props.moveUpProps(id)}>Up</button>
        <button onClick={() => this.props.moveDownProps(id)}>Down</button>
      </li>
    )
  }
}

export default TodoItem
