/**
 * Created by Bely Oleg on 11.05.2018.
 */
import React from "react";

class Square extends React.Component {
    onClick = () => {
        console.log(`square ${this.props.id} clicked`)
    };

    render(){
        return (
            <div onClick={this.onClick} className="square">
                {this.props.id}
            </div>
        )
    }
}

export default Square;