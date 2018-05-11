/**
 * Created by Bely Oleg on 07.05.2018.
 */
import React from 'react'
import Board from './Board'

class Game extends React.Component {
    onStartClick = () => {
        console.log('start clicked');
    };

    onClearClick = () => {
        console.log('clear clicked');
    };
    
    render(){
        return ([
            <div key={1} className="button-row" >
                <button className="button button-left" onClick={this.onStartClick}>
                    Click to start
                </button>
                <button className="button" onClick={this.onClearClick}>
                    Click to clear
                </button>
            </div>,
            <Board key={2} />
        ])
    }
}

export default Game;