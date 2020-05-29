import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
/* components */
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import ClearList from "./components/ClearList";
import Navigator from "./components/Navigator";
import Signup from "./components/Signup";
import Login from "./components/Login";

export class App extends Component {
  state = {
    todoList: [],
    copyList: [],
    title: "",
    idToEdit: 0,
    editItem: false,
  };

  onChange = (e) => {
    this.setState({ title: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.length > 0) {
      const newTodo = {
        title: this.state.title,
        completed: false,
        id: this.state.idToEdit !== 0 ? this.state.idToEdit : uuidv4(),
      };
      this.setState(
        {
          copyList: [...this.state.copyList, newTodo],
          title: "",
        },
        () => this.setState({ todoList: Object.assign(this.state.copyList) })
      );
    }
    this.setState({
      idToEdit: 0,
      editItem: false,
    });
  };
  /* marca tarefa como finalizada */
  markTodo = (id) => {
    const newList = this.state.todoList;
    newList.forEach((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    });
    this.setState(
      {
        copyList: newList,
      },
      () => this.setState({ todoList: Object.assign(this.state.copyList) })
    );
  };
  /* deleta tarefa */
  deleteTodo = (id) => {
    this.setState({
      todoList: [...this.state.todoList.filter((todo) => todo.id !== id)],
      copyList: [...this.state.copyList.filter((todo) => todo.id !== id)],
    });
  };
  /* editar tarefa */
  editTodo = (id) => {
    this.deleteTodo(id);
    const todoToEdit = this.state.todoList.find((todo) => todo.id === id);
    this.setState({
      title: todoToEdit.title,
      idToEdit: todoToEdit.id,
      editItem: true,
    });
  };

  /* limpa lista */
  clearList = () => {
    this.setState({
      copyList: [],
      todoList: [],
    });
  };

  /* filtra lista */
  setFilter = (filtro) => {
    this.setState(
      {
        todoList: Object.assign(this.state.copyList),
      },
      () => {
        switch (filtro) {
          case 1:
            this.setState({
              todoList: [
                ...this.state.todoList.filter((todo) => todo.completed),
              ],
            });
            break;
          case 2:
            this.setState({
              todoList: [
                ...this.state.todoList.filter((todo) => !todo.completed),
              ],
            });
            break;
        }
      }
    );
  };

  copyList = () => {
    this.setState({
      copyList: Object.assign(this.state.todoList),
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Router>
          <Switch>
            <Route
              path="/"
              exact={true}
              render={(props) => (
                <main style={containerStyle}>
                  <Signup />
                </main>
              )}
            />
            <Route
              path="/login"
              render={(props) => (
                <main style={containerStyle}>
                  <Login />
                </main>
              )}
            />
            <Route
              path="/home"
              render={(props) => (
                <React.Fragment>
                  <Navigator setFilter={this.setFilter} />
                  <main style={containerStyle}>
                    <AddTodo
                      title={this.state.title}
                      onChange={this.onChange}
                      onSubmit={this.onSubmit}
                      editItem={this.state.editItem}
                    />
                    <TodoList
                      markTodo={this.markTodo}
                      editTodo={this.editTodo}
                      deleteTodo={this.deleteTodo}
                      todoList={this.state.todoList}
                    />
                    <ClearList clearList={this.clearList} />
                  </main>
                </React.Fragment>
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

const containerStyle = {
  width: "60vw",
  margin: "25px auto",
  maxHeight: "50vh",
};

export default App;
