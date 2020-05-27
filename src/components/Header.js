import React from "react";

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>Lista de Tarefas</h1>
    </header>
  );
}

const headerStyle = {
  textAlign: "center",
  padding: "1rem 0",
  background: "black",
  color: "#f4f4f4",
  letterSpacing: "3px",
};
