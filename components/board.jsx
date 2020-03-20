import React from 'react';
import Tile from './tile.jsx';
import { render } from 'react-dom';

class Board extends React.Component {
    constructor(props) {
        super();
        // this.state = {
        //     board: props.board,
        //     update: props.update
        // }
    }
    
    render() {
        let rows = this.props.board.grid.map( (row, y) => {
            let singleRow = row.map( (item, x) => { 
                return (
                <Tile
                    key={[x, y]}
                    position={[x, y]}
                    obj={item}
                    update={this.props.update}
                />);
            });
            return (
                <div className="row" key={y}>
                    {singleRow}
                </div>
            );
        });

        return (
            <div className="board">
                {rows}
            </div > 
        );
    }    
};

export default Board;