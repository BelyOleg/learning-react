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
        O: 'O'
    };

    getDefaultState() {
        return {
            arySquares: Array(9).fill(null),
            isMoveX: true,
            isGameStarted: false
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
            isMoveX = state.isMoveX;

        if(state.isGameStarted && !hasValue){
            arySquares[index] = isMoveX ? this.CONSTS.X : this.CONSTS.O;

            this.setState({
                arySquares: arySquares,
                isMoveX: !isMoveX
            });
        }
    };
    
    render(){
        let nextMoveText = this.state.isMoveX ? this.CONSTS.X : this.CONSTS.O,
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
                Next move for <strong>{nextMoveText}</strong>
            </div>,

            <Board key={3}
                    arySquares={this.state.arySquares}
                    onSqureClick={this.onSquareClick}
                   isGameStarted={this.state.isGameStarted}
            />
        ])
    }
}

export default Game;