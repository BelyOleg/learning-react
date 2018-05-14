/**
 * Created by Bely Oleg on 07.05.2018.
 */
import React from 'react'
import Board from './Board'
import Button from './Button'

class Game extends React.Component {
    state = this.getDefaultState();

    CONSTS = {
        X: 'X',
        O: 'O',
        winningLines: [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
    };

    getDefaultState() {
        return {
            arySquares: Array(9).fill(null),
            winningSquares: [],
            isMoveX: true,
            isGameStarted: false,
            isGameFinished: false,
            noMoreMoves: false
        }
    }

    onStartClick = () => {
        this.setState({
            isGameStarted: true
        });
    };

    onClearClick = () => {
        this.setState(this.getDefaultState);
    };

    onSquareClick = (index) => {
        let state = this.state,
            arySquares = state.arySquares.slice(),
            hasValue = arySquares[index] !== null,
            isMoveX = state.isMoveX,
            winningSquares,
            newState;

        if(state.isGameStarted && !hasValue && !state.isGameFinished){
            arySquares[index] = isMoveX ? this.CONSTS.X : this.CONSTS.O;

            newState = {
                arySquares: arySquares,
                isMoveX: !isMoveX
            };

            winningSquares = this.getWinningSquares(arySquares);

            if(winningSquares.length){
                newState.isGameFinished = true;
                newState.winningSquares = winningSquares;
            } else if(!this.hasFreeMoves(arySquares)) {
                newState.noMoreMoves = true;
                newState.isGameFinished = true;
            }

            this.setState(newState);
        }
    };

    hasFreeMoves(arySquareValues) {
        return arySquareValues.includes(null);
    }

    getWinningSquares(arySquareValues) {
        let currentMoveValue = this.state.isMoveX ? this.CONSTS.X : this.CONSTS.O,
            isWin,
            winningSquares = [];

        for (let aryWinningLine of this.CONSTS.winningLines) {
            isWin = true;

            for (let winningValue of aryWinningLine) {
                if(currentMoveValue !== arySquareValues[winningValue]){
                    isWin = false;
                }
            }

            if(isWin){
                winningSquares = aryWinningLine;
                break;
            }
        }

        return winningSquares;
    }

    getNextMoveText(){
        let text;

        if(this.state.noMoreMoves){
            text = 'No more moves'
        } else if(this.state.isGameFinished) {
            text = 'Game is finished';
        }else {
            text = 'Next move for ' + (this.state.isMoveX ? this.CONSTS.X : this.CONSTS.O);
        }

        return text;
    }

    render(){
        let nextMoveText = this.getNextMoveText(),
            isButtonStartDisabled = this.state.isGameStarted,
            isButtonClearDisabled = !isButtonStartDisabled,
            labelMoveStyle = this.state.isGameStarted ? {} : {visibility: 'hidden '};

        return ([
            <div key={1} className="button-row" >
                <Button isDisabled={isButtonStartDisabled}
                        onClick={this.onStartClick}
                        className="button-left"
                        text="Click to start"
                />
                <Button isDisabled={isButtonClearDisabled}
                        onClick={this.onClearClick}
                        text="Click to clear"
                />
            </div>,

            <div key={2}
                    className="label-move"
                    style={labelMoveStyle}>
                {nextMoveText}
            </div>,

            <Board key={3}
                    arySquares={this.state.arySquares}
                    onSqureClick={this.onSquareClick}
                    isGameStarted={this.state.isGameStarted}
                    isGameFinished={this.state.isGameFinished}
                    winningSquares={this.state.winningSquares}
            />
        ])
    }
}

export default Game;