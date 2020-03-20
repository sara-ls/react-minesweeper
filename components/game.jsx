import React from 'react';
import * as Minesweeper from '../minesweeper';
import Board from './board';

class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            board: new Minesweeper.Board(10, 5)
        }
        this.updateGame = this.updateGame.bind(this);
    }

    updateGame(tile, isFlagged) {
        if (isFlagged) {
            tile.toggleFlag();
        } else {
            tile.explore();
        }
        this.state.board.won();
        this.setState({ board: this.state.board });
    }

    render() {
        let modalText = "";
        let modal = "";
        if (this.state.board.won()) {
            modalText = "You win!";
        } else if (this.state.board.lost()) {
            modalText = "You suck!";
        }
        if (this.state.board.won() || this.state.board.lost()) {
            this.revealAll(this.state.board.grid);
            modal = (
                <div className='modal'>
                    <div className="modal-content">
                        {modalText}
                        <br />
                        <button onClick={this.reset}>Play Again</button>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <p>There are {this.state.board.numBombs} on the board.</p>
                <Board 
                    board={this.state.board}
                    update={this.updateGame}
                />
                {modal}
            </div>
            
        );
    }
    
    reset() {
        window.location.reload();
    }

    revealAll(grid) {
        for (let i = 0; i < grid.length; i++) {
            const row = grid[i];
            for (let j = 0; j < row.length; j++) {
                const tile = row[j];
                tile.explored = true;
            }
        }
    }
}

export default Game;