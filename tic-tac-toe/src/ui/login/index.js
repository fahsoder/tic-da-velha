import React, { Component, Fragment } from 'react'

import './login.css'
import './player-select.css'

export class Login extends Component {
  constructor() {
    super()
    this.state = {
      user: '',
      secondUser: '',
      context: 'player-select',
      loginError: 'no-user-alert',
      loginSuccess: false,
      numberOfPlayers: 1
    }
  }

  componentDidMount() {
    this.setState({
      redirectRoute: 'params.redirect'
    })
  }

  onChange = (e) => {
    const target = e.target
    this.setState({
      [target.name]: target.value
    })
  }

  onFocus = () => {
    this.setState({
      loginError: 'no-user-alert'
    })
  }

  login = (e) => {
    e.preventDefault()

    if(this.state.numberOfPlayers === 1) {
      if(this.state.user) {
        this.setState({
          context: 'game'
        })
      } else {
        this.setState({
          loginError: 'user-alert'
        })
      }
    }
    if(this.state.numberOfPlayers === 2) {
      if(this.state.secondUser && this.state.user) {
        this.setState({
          context: 'game'
        })
      } else {
        this.setState({
          loginError: 'user-alert'
        })
      }
    }
    
    else {
      this.setState({
        loginError: 'user-alert'
      })
    }
  }

  selectPlayer = (e) => {
    const target = e.target
    this.setState({
      numberOfPlayers: target.value
    })
    console.log('xalxla', target.value)
  }

  renderLogin = () => {
    return (
      <Fragment>
        <label className="user-input">
            <span className="label">Jogador 1</span>
            <input name="user" type="text" className="input" onFocus={this.onFocus} onChange={this.onChange} value={this.props.user} />
            <label className={this.state.loginError}>
              Informe o nome do jogador 1
            </label>
        </label>
        {this.state.numberOfPlayers == 2 ? 
          <label className="user-input">
              <span className="label">Jogador 2</span>
              <input name="secondUser" type="text" className="input" onFocus={this.onFocus} onChange={this.onChange} value={this.props.user} />
              <label className={this.state.loginError}>
                Informe o nome do jogador 2
              </label>
          </label>
          : null
        }
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
            <form action="home.html" className="form" method="post">
              <label className="form-title">
                  Selecione a quantidade de jogadores
              </label>
              <label className="user-input">
                <div className="radio">
                  <label>
                  <input type="radio" hidden name="optradio" id="1" className="radio" checked={this.state.numberOfPlayers == 1} onClick={this.selectPlayer} value="1"/>
                  <label for="1">1 Jogador</label>
                  </label>
                </div>
                <div class="radio">
                  <label>
                    <input type="radio" hidden name="optradio" id="2" className="radio" checked={this.state.numberOfPlayers == 2} onClick={this.selectPlayer} value="2"/>
                    <label for="2">Versus</label>
                  </label>
                </div>
              </label>
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
  
  renderSinglePlayer = () => {
    return null
  }

  renderMultiPlayer = () => {
    return null
  }

  render() {
    if(this.state.context === 'login') {
      return this.renderLogin()
    }
    if(this.state.context === 'player-select') {
      return this.renderPlayerSelect()
    }
    if(this.state.context === 'single-player') {
      return this.renderSinglePlayer()
    }
    if(this.state.context === 'multi-player') {
      return this.renderMultiPlayer()
    }
  }
}
