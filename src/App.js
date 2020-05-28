import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import Login from "./components/Login";
import EditTodo from "./components/EditTodo";
import ClearList from "./components/ClearList";

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

  clearList = () => {
    this.setState({
      todoList: [],
    });
  };

  render() {
    return (
      <Router>
        <div>
          <Header />
          <main style={containerStyle}>
            <Route exact path="/" component={Login} />
            <Route
              path="/edit"
              render={(props) => (
                <React.Fragment>
                  <EditTodo todo={this.state.todoList[0]} />
                </React.Fragment>
              )}
            />
            <Route
              path="/home"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <TodoList
                    markTodo={this.markTodo}
                    editTodo={this.editTodo}
                    deleteTodo={this.deleteTodo}
                    todoList={this.state.todoList}
                  />
                  <ClearList clearList={this.clearList} />
                </React.Fragment>
              )}
            />
          </main>
        </div>
      </Router>
    );
  }
}

const containerStyle = {
  width: "60vw",
  margin: "25px auto",
};

export default App;
