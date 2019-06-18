/* eslint-disable eqeqeq */
import React, { Component, Fragment } from 'react'

import './login.css'

import '../single-player/Game'
import '../single-player/index.css'
import Game from '../single-player/Game';

export class Login extends Component {
  constructor() {
    super()
    this.state = {
      user: '',
      secondUser: '',
      context: 'player-select',
      loginFirstUserError: 'no-user-alert',
      loginSecondUserError: 'no-user-alert',
      loginSuccess: false,
      numberOfPlayers: 1
    }
  }

  componentDidMount() {
    let userName = sessionStorage.getItem('userName')
    let secondUser = sessionStorage.getItem('secondUser')
    if(userName && secondUser) {
      this.setState({
        context: 'game'
      })
    }    
  }

  onChange = (e) => {
    const target = e.target
    this.setState({
      [target.name]: target.value
    })
  }

  onFocus = (e) => {
    const target = e.target
    if(target.name == "user"){
      this.setState({
        loginFirstUserError: 'no-user-alert'
      })
    }
    if(target.name == "secondUser"){
      this.setState({
        loginSecondUserError: 'no-user-alert'
      })
    }
  }

  login = (e) => {
    e.preventDefault()
    if(this.state.secondUser && this.state.user) {
      sessionStorage.setItem('userName', this.state.user)
      sessionStorage.setItem('secondUser', this.state.secondUser)
      this.setState({
        context: 'game'
      })
    } else {
      if(!this.state.secondUser) {
        this.setState({
          loginSecondUserError: 'user-alert'
        })
      } 
      if (!this.state.user){
        this.setState({
          loginFirstUserError: 'user-alert'
        })
      }
    }
  }

  renderLogin = () => {
    return (
      <Fragment>
        <label className="user-input">
          <div className="user-input-field">
            <span className="label">Jogador X</span>
            <input name="user" type="text" className="input" onFocus={this.onFocus} onChange={this.onChange} value={this.state.user} />
            <label className={this.state.loginFirstUserError}>
              Informe o nome do jogador X
            </label>
          </div>
        </label>
        <label className="user-input user-input-less-space">
          <div className="user-input-field">
            <span className="label">Jogador O</span>
            <input name="secondUser" type="text" className="input" onFocus={this.onFocus} onChange={this.onChange} value={this.state.secondUser} />
            <label className={this.state.loginSecondUserError}>
              Informe o nome do jogador O
            </label>
          </div>
        </label>
      </Fragment>
    )
  }

  renderPlayerSelect = () => {
    return (
      <div className="content">
            <div className="content-bg">
            </div>
            <h1 className="title">
                TIC TAC TOE
            </h1>
            <form className="form">
              {this.renderLogin()}
              <div className="button-content">
                <button className="login-button" onClick={this.login}>
                    Jogar
                </button>
              </div>
            </form>
        </div>
    )
  }
  
  renderGame = () => {
    return (
      <Game />
    )
  }
  

  render() {
    if(this.state.context == 'player-select') {
      return this.renderPlayerSelect()
    } else {
      return this.renderGame()
    }
  }
}
