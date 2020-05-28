import React from "react";

class TodoItem extends React.Component {
  getStyle = () => {
    return {
      padding: "0.5rem 1rem",
      background: "#f4f4f4",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "5px",
      boxShadow: "2px 5px 10px black",
      opacity: this.props.todo.completed ? "0.33" : "1",
    };
  };

  render() {
    const { markTodo, editTodo, deleteTodo, todo } = this.props;
    return (
      <div style={this.getStyle()}>
        <h3>{todo.title}</h3>
        <div style={{ display: "flex", alignItems: "center" }}>
          <i
            onClick={markTodo.bind(null, todo.id)}
            className="btnStyle fas fa-check-circle"
          ></i>
          <i
            onClick={editTodo.bind(null, todo.id)}
            className="btnStyle fas fa-edit"
          ></i>
          <i
            onClick={deleteTodo.bind(null, todo.id)}
            className="btnStyle fas fa-trash"
          ></i>
        </div>
      </div>
    );
  }
}

export default TodoItem;
