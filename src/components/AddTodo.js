import React, { Component } from "react";
import "../App.css";

export class AddTodo extends Component {
  render() {
    const { title, onChange, onSubmit, editItem } = this.props;
    return (
      <form style={formStyle} onSubmit={onSubmit}>
        <input
          style={inputStyle}
          type="text"
          placeholder="Adicionar nova tarefa"
          onChange={onChange}
          value={title}
        />
        <button className="submitStyle" type="submit">
          <i className={editItem ? "fas fa-check" : "fas fa-plus-square"}></i>
        </button>
      </form>
    );
  }
}

const formStyle = {
  display: "flex",
  boxShadow: "2px 5px 10px black",
  marginBottom: "1rem",
};

const inputStyle = {
  flex: "1",
  fontSize: "1.25rem",
  padding: ".75rem 1rem",
  border: "none",
};

export default AddTodo;
