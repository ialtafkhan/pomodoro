
import React from 'react'

function Session(props) {

    const decreaseSession = () => {
        if (props.sessionLength === 1) {
            return
        }
        props.decreaseSession();
    }

    const cinreaseSession = () => {
        if (props.sessionLength === 60) {
            return
        }
        props.increaseSession();

    }

    return (
        <>
            <div>
                <h4  > session length </h4>
                <div className="intertval-conatiner" >
                    <button onClick={decreaseSession} >Down</button>
                    <p className="interval-length" > {props.sessionInterval} </p>
                    <button onClick={cinreaseSession} >up</button>
                </div>
            </div>

        </>
    )
}

export default Session