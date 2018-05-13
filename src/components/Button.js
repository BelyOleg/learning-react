/**
 * Created by Bely Oleg on 11.05.2018.
 */
import React from "react";

function Button(props) {
    return (
        <button disabled={props.isDisabled}
                className={`button ${ props.className}`}
                onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default Button;