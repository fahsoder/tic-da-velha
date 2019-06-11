import React, { Component, Fragment } from 'react'

import { Redirect } from 'react-router-dom';

import './login.css'

export class Login extends Component {
  constructor() {
    super()
    this.state = this.initialState();
  }

  initialState() {
    return (
      {
        user: ''
      }
    )
  }

  componentDidMount() {
    this.setState({
      redirectRoute: 'params.redirect'
    })
  }


  render() {
      return (
        <div className="content">
            <div class="content-bg">
            </div>
            <form action="home.html" class="form" method="post">
                <h1 class="title">
                    TIC TAC TOE
                </h1>
                <label class="form-title">
                    Entrar
                </label>
                <label class="user-input">
                    <span class="label">Nome usuário</span>
                    <input name="user" type="text" class="input" onChange={this.onChange} values={this.props.user} />
                </label>
                <button class="login-button" type="submit">
                    Jogar
                </button>
            </form>
        </div>
    )
  }
}
