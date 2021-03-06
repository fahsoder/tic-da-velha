/* eslint-disable eqeqeq */
import React from 'react';
import Board from './Board';

import './index.css'

const getLocation = require('./GetLocation').getLocation

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], winnerRow: lines[i] };
    }
  }

  return { winner: null, winnerRow: null };
};

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      playerOne: '',
      playerTwo: '',
      currentStepNumber: 0,
      xIsNext: true,
    };
  }

  componentDidMount() {
    let userName = sessionStorage.getItem('userName')
    let secondUser = sessionStorage.getItem('secondUser')
    this.setState({
      playerOne: userName,
      playerTwo: secondUser
    })
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.currentStepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares).winner || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([
        {
          squares,
          currentLocation: getLocation(i),
          stepNumber: history.length,
        },
      ]),
      xIsNext: !this.state.xIsNext,
      currentStepNumber: history.length,
    });
  }

  jumpTo(step) {
    this.setState({
      currentStepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  sortMoves() {
    this.setState({
      history: this.state.history.reverse(),
    });
  }

  render() {
    const { history } = this.state;
    const current = history[this.state.currentStepNumber];
    const { winner, winnerRow } = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const currentLocation = step.currentLocation ? `(${step.currentLocation})` : '';
      const desc = step.stepNumber ? `Ir para o passo #${step.stepNumber}` : 'Ir para o início';
      const classButton = move === this.state.currentStepNumber ? 'button--green' : '';

      return (
        <li key={step.stepNumber}>
          <button className={`${classButton} button`} onClick={() => this.jumpTo(move)}>
            {`${desc} ${currentLocation}`}
          </button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = `${winner=='X' ? this.state.playerOne : this.state.playerTwo} ganhou!`;
    } else if (history.length === 10) {
      status = 'Empate!';
    } else {
      status = `Próximo jogador: ${this.state.xIsNext ? this.state.playerOne + '(X)' : this.state.playerTwo + '(O)'}`;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            winnerSquares={winnerRow}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <button className="button" onClick={() => this.sortMoves()}>
            Reiniciar
          </button>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
