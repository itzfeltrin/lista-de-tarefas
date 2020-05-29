import React, { Component } from "react";
import "../App.css";

export class Navigator extends Component {
  render() {
    const { setFilter } = this.props;
    return (
      <div style={navigatorStyle}>
        <p onClick={setFilter.bind(null, 0)} className="link-style">
          Todas |{" "}
        </p>
        <p onClick={setFilter.bind(null, 1)} className="link-style">
          Finalizadas
        </p>
        <p onClick={setFilter.bind(null, 2)} className="link-style">
          {" "}
          | Nao finalizadas
        </p>
      </div>
    );
  }
}

const navigatorStyle = {
  width: "100%",
  textAlign: "center",
  background: "#00000050",
  color: "white",
  padding: ".5rem",
  fontSize: "1.25rem",
};

export default Navigator;
