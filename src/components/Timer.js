import React, { Component } from 'react'

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSession: true,
            timerSecond: 0,
            intervalId: 0

        };

        this.play = this.play.bind(this);
        this.reset = this.reset.bind(this);
        this.stop = this.stop.bind(this);
        this.decreaseTimer = this.decreaseTimer.bind(this);
    }
    play() {

        let intervalId = setInterval(this.decreaseTimer, 1000)
        this.props.PlayStopTimer(true)

        this.setState({
            intervalId: intervalId
        })

    }
    decreaseTimer() {
        switch (this.state.timerSecond) {
            case 0:
                if (this.props.timerMinute === 0) {
                    if (this.state.isSession) {
                        this.setState({
                            isSession: false
                        })
                        this.props.toggleInterval(this.state.isSession)
                    } else {
                        this.setState({
                            isSession: true
                        })
                        this.props.toggleInterval(this.state.isSession)

                    }
                } else {
                    this.props.updateTimerMinute()
                    this.setState({
                        timerSecond: 59
                    })
                }

                break;

            default:
                this.setState((pre) => {
                    return {
                        timerSecond: pre.timerSecond - 1
                    }

                })
                break;
        }

    }
    stop() {
        clearInterval(this.state.intervalId)
        this.props.PlayStopTimer(false)

    }
    reset() {
        this.stop();
        this.props.resetTimer();
        this.props.PlayStopTimer(false)

        this.setState({
            timerSecond: 0,
            isSession: true
        })

    }



    render() {
        return (
            <>

                <section>
                    <div className="timer-container" >
                        <h3> {this.state.isSession === true ? "Session" : "Break"} </h3>
                        <span className="timer" > {this.props.timerMinute} </span>
                        <span className="timer" > : </span>
                        <span className="timer"
                        > {this.props.timerSecond === 0
                            ? "00"
                            : this.state.timerSecond < 10
                                ? '0' + this.state.timerSecond
                                : this.state.timerSecond}
                        </span>
                    </div>

                    <section className="timer-actions" >
                        <button onClick={this.play}  >Play</button>
                        <button onClick={this.stop}  >Stop</button>
                        <button onClick={this.reset} >Refresh</button>

                    </section>
                </section>

            </>
        )
    }
}
export default Timer