import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  render() {
    const { markTodo, editTodo, deleteTodo, todoList } = this.props;
    return todoList.map((todo) => (
      <TodoItem
        markTodo={markTodo}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
        key={todo.id}
        todo={todo}
      />
    ));
  }
}

export default TodoList;
