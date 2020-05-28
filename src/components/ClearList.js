import React, { Component } from "react";

export class ClearList extends Component {
  clearList = () => {
    this.props.clearList();
  };

  render() {
    return (
      <div style={clearStyle} onClick={this.clearList}>
        <h1>Excluir todas as tarefas</h1>
      </div>
    );
  }
}

const clearStyle = {
  fontSize: ".5rem",
  textAlign: "center",
  background: "#ff3333",
  padding: "1rem 0",
  color: "white",
  letterSpacing: "3px",
  marginTop: "1rem",
  cursor: "pointer",
};

export default ClearList;
