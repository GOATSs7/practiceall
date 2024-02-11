import React, { useState, useEffect } from "react";
import "./StopWatch.css";

const Stopwatch = () => {
  //states

  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let intervel;
    if (isRunning) {
      intervel = setInterval(() => {
        setElapsedTime((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(intervel);
    }

    return () => {
      clearInterval(intervel);
    };
  }, [isRunning]);

  //func for buttons

  const handleStart = () => {
    setIsRunning(true);
  };
  const handleStop = () => {
    setIsRunning(false);
  };
  const handleReset = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };
  //formatting the time in  00:00:00 form
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${minutes < 10 ? 0 : ""}${minutes}:${
      seconds < 10 ? 0 : ""
    }${seconds}:${milliseconds < 10 ? 0 : ""}${milliseconds}`;
  };

  // for key events

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "s":
          if (!isRunning) handleStart();
          break;
        case "p":
          if (isRunning) handleStop();
          break;
        case "r":
          handleReset();
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isRunning]);

  return (
    <>
      <div className="main-container">
        <div className="main">
          <h1>StopWatch</h1>

          <div className="timerScreen">{formatTime(elapsedTime)}</div>
          <div className="buttons">
            <button className="btn btn-primary" onClick={handleStart}>
              Start
            </button>
            <button className="btn btn-primary" onClick={handleStop}>
              Stop
            </button>
            <button className="btn btn-primary" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>

        <div className="buttonsfunc">
          <p>Enter "S" for Start</p>
          <p>Enter "P" for Stop</p>
          <p>Enter "R" for Reset</p>
        </div>
      </div>
    </>
  );
};

export default Stopwatch;
