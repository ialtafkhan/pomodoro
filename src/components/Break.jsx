import React from 'react'

function Break(props) {



    const increaseCounter = () => {
        if (props.breakInterval === 60) {
            return;

        }
        props.increaseBreak();

    }
    const decreaseCounter = () => {
        if (props.breakInterval === 60) {
            return;

        }
        props.decreaseBreak();

    }

    return (
        <div>
            <h4> break length </h4>
            <div className="intertval-conatiner" >
                <button
                    disabled={props.isPlay === true ? "disabled" : ""}
                    onClick={decreaseCounter} >Down</button>
                <p className="interval-length" > {props.breakInterval} </p>
                <button
                    disabled={props.isPlay === true ? "disabled" : ""}
                    onClick={increaseCounter}
                >up
                </button>

            </div>
        </div>
    )
}

export default Break
