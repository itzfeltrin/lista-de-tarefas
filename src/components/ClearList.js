import React, { Component } from "react";
import "../App.css";

export class ClearList extends Component {
  render() {
    const { clearList } = this.props;
    return (
      <div className="clearStyle" onClick={clearList}>
        <h1>Excluir todas as tarefas</h1>
      </div>
    );
  }
}

export default ClearList;
