/**
 * Created by Bely Oleg on 11.05.2018.
 */
import React from "react";

class Square extends React.Component {
    render(){
        let className = 'square ';

        if(!this.props.isActive){
            className += ' square-disabled';
        }

        if(this.props.isWinningSquare){
            className += ' square-winning';
        }

        return (
            <div onClick={this.props.onClick} className={className}>
                {this.props.value}
            </div>
        )
    }
}

export default Square;