
/* eslint-disable eqeqeq */
import React, { Component } from 'react'

export class Game extends Component {
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
}
