import React, { useEffect, useState } from "react";

export default function PomodoroTimer() {
  // state variables
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [secondsLefta, setSecondsLefta] = useState(5 * 60);
  const [timer, setTimer] = useState();
  const [timera, setTimera] = useState();

  // done

  // timer starting logic
  const start = () => {
    const timer = setInterval(() => {
      setSecondsLeft((secondsLeft) => secondsLeft - 1);
      if (secondsLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);
    setTimer(timer);
  };

  const breakf = () => {
    const timer = setInterval(() => {
      setSecondsLefta((secondsLefta) => secondsLefta - 1);
      if (secondsLefta === 0) {
        clearInterval(timer);
      }
    }, 1000);
    setTimera(timer);
  };
  // done

  // timer pausing logic
  const pause = () => {
    const timer = clearTimeout();
    setTimer(timer);
  };
  const pausef = () => {
    const timer = clearInterval();
    setTimera(timer);
  };

  // styling
  const style = {
    headingStyle: {
      margin: 20,
    },
    timerStyle: {
      fontSize: "2rem",
      color: "darkcyan",
      margin: "20px",
    },
    btnStyle: {
      padding: "8px 15px",
      fontSize: "20px",
      textAlign: "center",
      border: "2px solid darkcyan",
      backgroundColor: "white",
      color: "darkcyan",
      margin: "20px",
    },
  };

  // styling done

  // converting seconds to minutes and formatting time
  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }
  const minutes = Math.floor(secondsLeft / 60);
  const minutesa = Math.floor(secondsLefta / 60);
  const seconds = secondsLeft % 60;
  const secondsa = secondsLefta % 60;
  // done

  useEffect(() => {
    if (secondsLeft === 0) {
      clearInterval(timer);
      breakf();
    }
  }, [secondsLeft, timer]);

  useEffect(() => {
    return () => clearInterval(timer);
  }, [timer]);

  return (
    <>
      <div className="timer">
        <h1 style={style.headingStyle}>Pomodoro Timer</h1>
        <div style={style.timerStyle}>
          {secondsLeft === 0 ? (
            <>
              <h1>Break Going On</h1>
              <div>
                {`${padTo2Digits(minutesa)}:${padTo2Digits(secondsa)}`} minutes
                left
              </div>
              <div>
                <button
                  onClick={breakf}
                  className="btn btn-outline"
                  style={style.btnStyle}
                >
                  start
                </button>
                <button
                  onClick={pausef}
                  className="btn btn-outline"
                  style={style.btnStyle}
                >
                  Pause
                </button>
                <button
                  onClick={start}
                  className="btn btn-outline"
                  style={style.btnStyle}
                >
                  Resume
                </button>
              </div>
            </>
          ) : (
            <>
              {`${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`} minutes left
              <div>
                <button
                  onClick={start}
                  className="btn btn-outline"
                  style={style.btnStyle}
                >
                  start
                </button>
                <button
                  onClick={pause}
                  className="btn btn-outline"
                  style={style.btnStyle}
                >
                  Pause
                </button>
                <button
                  onClick={start}
                  className="btn btn-outline"
                  style={style.btnStyle}
                >
                  Resume
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
