import React, { Component } from "react";
import base64 from "base-64";

import api from "../../services/api";


import "./Login.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: "",
  };

  handleLogin = async () => {
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {

      try {
        await api.get("/login", {
          headers: {
            Authorization: `Basic ${base64.encode(email + ":" + password)}`,
          },
        });

        // this.props.history.push("/tasks");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais. T.T",
        });
      }
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleLogin}>
          {this.state.error && <p>{this.state.error}</p>}
        
        <div className="cabecalho">
        {/* <img className="logo" src="images/logo.png"> </img> */}
        <h4 className="titulo"> Pipeline </h4>
        </div>

        <div className="content">
        {/*  formulario login */}
        <h1 className="tituloLogin">  Login </h1>
        <hr className="risco"/>        
        <div className="email">
        <p> 
            <label className="seuEmail">E-mail</label>
          <input
            type="email"
            className="inpt-login"
            autoComplete="email"
            placeholder="exemplo@exemplo.com.br"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          </p>
        </div>
        <div className="senha">
        <p> 
            <label className="suaSenha">Senha</label>
          <input
            type="password"
            className="inpt-login"
            autoComplete="current-password"
            placeholder="********"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          </p>
        </div>

        <div className="div-bt">
          <button type="submit" className="btn-login">Entrar</button>
         {/* <hr />*/}
          </div>
          </div>
        </form>
       
      </>
     
    );
  }
}

export default Login;
