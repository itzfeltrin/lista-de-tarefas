import React, { Component } from "react";
import "./SignupAndLogin.css";
import { Link } from "react-router-dom";

export class Signup extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 style={{ textAlign: "center", margin: "1rem 0" }}>
          Criar nova conta
        </h1>
        <form className="form-style">
          <input
            className="field-style"
            type="email"
            placeholder="endereco de email"
          />
          <input className="field-style" type="text" placeholder="nome" />
          <input className="field-style" type="text" placeholder="sobrenome" />
          <input className="field-style" type="password" placeholder="senha" />
          <div style={{ display: "flex" }}>
            <Link style={{ flex: "1", marginRight: ".5rem" }} to="/home">
              <input
                className="button-style field-style"
                style={{ width: "100%" }}
                type="submit"
                value="criar conta"
              />
            </Link>

            <Link style={{ flex: "1", marginLeft: ".5rem" }} to="/login">
              <input
                className="button-style field-style"
                style={{ width: "100%" }}
                type="submit"
                value="ja possui uma conta?"
              />
            </Link>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Signup;
