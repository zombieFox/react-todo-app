import React from 'react'
import TodoItem from './TodoItem'

class TodosList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            changeDoneProps={this.props.changeDoneProps}
            deleteTodoProps={this.props.deleteTodoProps}
            moveUpProps={this.props.moveUpProps}
            moveDownProps={this.props.moveDownProps}
          />
        ))}
      </ul>
    )
  }
}

export default TodosList
