
import React, { Component } from 'react'
import Break from './Break';
import Session from './Session';
import Timer from './Timer';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      breakLeangth: 5,
      sessionLength: 25,
      timerMinute: 25,
      isPlay: false
    }
    this.onIncraeseBreacklength = this.onIncraeseBreacklength.bind(this);
    this.onDeacreaseBreakLength = this.onDeacreaseBreakLength.bind(this);
    this.onIncraeseSesssionLength = this.onIncraeseSesssionLength.bind(this);
    this.onDecraeseSesssionLength = this.onDecraeseSesssionLength.bind(this);
    this.onToggleInterval = this.onToggleInterval.bind(this);
    this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
    this.onResetTimer = this.onResetTimer.bind(this);
    this.onPlayStopTimer = this.onPlayStopTimer.bind(this);

  }
  onIncraeseBreacklength() {
    this.setState((pre) => {
      return {
        breakLeangth: pre.breakLeangth + 1
      }

    })
  }
  onDeacreaseBreakLength() {
    if (this.state.breakLeangth <= 0) {
      this.setState((pre) => {
        return {
          breakLeangth: 0
        }

      })

    } else {
      this.setState((pre) => {
        return {
          breakLeangth: pre.breakLeangth - 1
        }

      })

    }

  }
  onIncraeseSesssionLength() {
    this.setState((pre) => {
      return {
        sessionLength: pre.sessionLength + 1,
        timerMinute: pre.sessionLength + 1
      }

    })

  }
  onDecraeseSesssionLength() {
    this.setState((pre) => {
      return {
        sessionLength: pre.sessionLength - 1,
        timerMinute: pre.sessionLength - 1
      }

    })

  }

  onUpdateTimerMinute() {
    this.setState((pre) => {
      return {
        timerMinute: pre.timerMinute - 1
      }
    })
  }
  onToggleInterval(isSession) {
    if (isSession) {
      this.setState({
        timerMinute: this.state.sessionLength


      })
    } else {
      this.setState({
        timerMinute: this.state.breakLeangth

      })
    }
  }

  onResetTimer() {
    this.setState({
      timerMinute: this.state.sessionLength
    })
  }
  onPlayStopTimer(isPlay) {
    this.setState({
      isPlay: isPlay
    })

  }

  render() {
    return (
      <main>
        <h1> pomodoro </h1>
        <div className="intertval-length-container" >
          <Break
            isPlay={this.state.isPlay}
            breakInterval={this.state.breakLeangth}
            increaseBreak={this.onIncraeseBreacklength}
            decreaseBreak={this.onDeacreaseBreakLength}
          />
          <Session
            isPlay={this.state.isPlay}
            sessionInterval={this.state.sessionLength}
            increaseSession={this.onIncraeseSesssionLength}
            decreaseSession={this.onDecraeseSesssionLength}
          />
        </div>
        <Timer
          timerMinute={this.state.timerMinute}
          breakLeangth={this.state.breakLeangth}
          toggleInterval={this.onToggleInterval}
          updateTimerMinute={this.onUpdateTimerMinute}
          resetTimer={this.onResetTimer}
          playStopTime={this.onPlayStopTimer}

        />


      </main>
    )
  }
}
