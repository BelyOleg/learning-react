/**
 * Created by Bely Oleg on 07.05.2018.
 */
import React from 'react'
import Square from './Square'

class Board extends React.Component {
    _renderSquare(i) {
        return (
            <Square
                value={this.props.arySquares[i]}
                index={i}
                onClick={() => {this.props.onSqureClick(i)}}
                isActive={this.props.isGameStarted && !this.props.arySquares[i]}
            />
        )
    }

    render(){
        return (
            <div>
                <div className="square-row">
                    {this._renderSquare(0)}
                    {this._renderSquare(1)}
                    {this._renderSquare(2)}
                </div>
                <div className="square-row">
                    {this._renderSquare(3)}
                    {this._renderSquare(4)}
                    {this._renderSquare(5)}
                </div>
                <div className="square-row">
                    {this._renderSquare(6)}
                    {this._renderSquare(7)}
                    {this._renderSquare(8)}
                </div>
            </div>
        )
    }
}

export default Board;