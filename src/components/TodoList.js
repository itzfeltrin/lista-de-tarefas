import React from "react";
import TodoItem from "./TodoItem";
import "../App.css";

class TodoList extends React.Component {
  render() {
    const { markTodo, editTodo, deleteTodo, todoList } = this.props;
    return (
      <div className="todo-list">
        {todoList.map((todo) => {
          return (
            <TodoItem
              markTodo={markTodo}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
              key={todo.id}
              todo={todo}
            />
          );
        })}
      </div>
    );
  }
}

export default TodoList;
