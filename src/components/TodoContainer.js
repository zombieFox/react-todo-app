import React from 'react'
import { v4 as uuidv4 } from "uuid"
import TodosList from './TodosList'
import Header from './Header'
import InputTodo from "./InputTodo"

class TodoContainer extends React.Component {
  state = {
    todos: [{
      id: uuidv4(),
      title: 'Setup development environment',
      completed: true
    }, {
      id: uuidv4(),
      title: 'Develop website and add content',
      completed: false
    }, {
      id: uuidv4(),
      title: 'Deploy to live server',
      completed: false
    }]
  };

  changeDone = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodo = id => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    });
  };

  moveUp = id => {
    let oldIndex = this.state.todos.findIndex(todo => todo.id === id);

    const newArray = this.moveToDo(this.state.todos, oldIndex, (oldIndex - 1));

    this.setState({
      todos: newArray
    });
  };

  moveDown = id => {
    let oldIndex = this.state.todos.findIndex(todo => todo.id === id);

    const newArray = this.moveToDo(this.state.todos, oldIndex, (oldIndex + 1));

    this.setState({
      todos: newArray
    });
  };

  moveToDo = (array, oldIndex, newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    };

    if (newIndex > array.length - 1) {
      newIndex = array.length - 1;
    };

    array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);

    return array;
  };

  addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  render() {
    return (
      <>
        <Header />
        <InputTodo addTodoProps={this.addTodoItem} />
        <TodosList
          todos={this.state.todos}
          changeDoneProps={this.changeDone}
          deleteTodoProps={this.delTodo}
          moveUpProps={this.moveUp}
          moveDownProps={this.moveDown}
        />
      </>
    )
  };
}

export default TodoContainer
