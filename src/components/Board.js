/**
 * Created by Bely Oleg on 07.05.2018.
 */
import React from 'react'
import Square from './Square'

class Board extends React.Component {
    render(){
        return (
            <div>
                <div className="square-row">
                    <Square id={1} />
                    <Square id={2} />
                    <Square id={3} />
                </div>
                <div className="square-row">
                    <Square id={4} />
                    <Square id={5} />
                    <Square id={6} />
                </div>
                <div className="square-row">
                    <Square id={7} />
                    <Square id={8} />
                    <Square id={9} />
                </div>
            </div>
        )
    }
}

export default Board;