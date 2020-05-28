import React from "react";
import { Link } from "react-router-dom";

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

  markTodo = () => {
    this.props.markTodo(this.props.todo.id);
  };

  editTodo = () => {
    this.props.editTodo(this.props.todo.id);
  };

  deleteTodo = () => {
    this.props.deleteTodo(this.props.todo.id);
  };

  render() {
    return (
      <div style={this.getStyle()}>
        <h3>{this.props.todo.title}</h3>
        <div>
          <i
            onClick={this.markTodo}
            className="btnStyle fas fa-check-circle"
          ></i>
          <Link style={{ color: "black" }} to="/edit">
            <i onClick={this.editTodo} className="btnStyle fas fa-edit"></i>
          </Link>
          <i onClick={this.deleteTodo} className="btnStyle fas fa-trash"></i>
        </div>
      </div>
    );
  }
}

export default TodoItem;
