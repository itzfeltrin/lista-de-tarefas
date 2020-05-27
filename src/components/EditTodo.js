import React, { Component } from "react";

export class EditTodo extends Component {
  state = {
    title: "",
  };

  render() {
    return (
      <form style={formStyle} onSubmit={this.onSubmit}>
        <input
          style={inputStyle}
          type="text"
          placeholder="Adicionar nova tarefa"
          onChange={this.onChange}
          value={this.state.title}
        />
        <input style={submitStyle} type="submit" value="+" />
      </form>
    );
  }
}

const formStyle = {
  display: "flex",
  boxShadow: "2px 5px 10px black",
};

const inputStyle = {
  flex: "1",
  fontSize: "1.25rem",
  padding: ".75rem 1rem",
  border: "none",
};

const submitStyle = {
  width: "50px",
  cursor: "pointer",
  fontSize: "1.75rem",
  padding: ".35rem",
  border: "none",
  background: "black",
  color: "#f4f4f4",
};

export default EditTodo;
