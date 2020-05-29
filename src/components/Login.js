import React, { Component } from "react";
import "./SignupAndLogin.css";
import { Link } from "react-router-dom";

export class Login extends Component {
  render() {
    return (
      <form className="form-style">
        <input
          className="field-style"
          type="email"
          placeholder="endereco de e-mail"
        />
        <input className="field-style" type="password" placeholder="senha" />
        <Link to="/home">
          <input
            style={{ width: "100%" }}
            className="field-style"
            type="submit"
            value="login"
          />
        </Link>
      </form>
    );
  }
}

export default Login;
