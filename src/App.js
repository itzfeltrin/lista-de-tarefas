import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import ClearList from "./components/ClearList";

export class App extends Component {
  state = {
    todoList: [],
    title: "",
    idToEdit: 0,
    editItem: false,
  };

  onChange = (e) => {
    this.setState({ title: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.idToEdit);
    if (this.state.title.length > 0) {
      const newTodo = {
        title: this.state.title,
        completed: false,
        id: this.state.idToEdit != "0" ? this.state.idToEdit : uuidv4(),
      };
      this.setState({
        todoList: [...this.state.todoList, newTodo],
        title: "",
      });
    }
  };
  /* marca tarefa como finalizada */
  markTodo = (id) => {
    const newList = this.state.todoList;
    newList.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    });
    this.setState({ todoList: newList });
  };
  /* deleta tarefa */
  deleteTodo = (id) => {
    this.setState({
      todoList: [...this.state.todoList.filter((todo) => todo.id !== id)],
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
      todoList: [],
    });
  };

  render() {
    return (
      <div>
        <Header />
        <main style={containerStyle}>
          <AddTodo
            title={this.state.title}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            editItem={this.state.editItem}
            idToEdit={this.state.idToEdit}
          />
          <TodoList
            markTodo={this.markTodo}
            editTodo={this.editTodo}
            deleteTodo={this.deleteTodo}
            todoList={this.state.todoList}
          />
          <ClearList clearList={this.clearList} />
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
