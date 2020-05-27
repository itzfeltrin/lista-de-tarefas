import React, { Component } from "react";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import { v4 as uuidv4 } from "uuid";

export class App extends Component {
  state = {
    todoList: [],
  };

  markTodo = (id) => {
    this.setState({
      todos: this.state.todoList.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
      }),
    });
  };

  deleteTodo = (id) => {
    this.setState({
      todoList: [...this.state.todoList.filter((todo) => todo.id !== id)],
    });
  };

  addTodo = (title) => {
    const newTodo = {
      title,
      completed: false,
      id: uuidv4(),
    };
    this.setState({ todoList: [...this.state.todoList, newTodo] });
  };

  render() {
    return (
      <div>
        <Header />
        <main style={containerStyle}>
          <AddTodo addTodo={this.addTodo} />
          <TodoList
            markTodo={this.markTodo}
            deleteTodo={this.deleteTodo}
            todoList={this.state.todoList}
          />
        </main>
      </div>
    );
  }
}

const containerStyle = {
  width: "60vw",
  margin: "25px auto",
};

export default App;
