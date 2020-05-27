import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  markTodo = (id) => {
    this.props.markTodo(id);
  };

  deleteTodo = (id) => {
    this.props.deleteTodo(id);
  };

  render() {
    return this.props.todoList.map((todo) => (
      <TodoItem
        markTodo={this.markTodo}
        deleteTodo={this.deleteTodo}
        key={todo.id}
        todo={todo}
      />
    ));
  }
}

export default TodoList;
