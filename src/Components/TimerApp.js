import React, { useState } from "react";
import "./TimerApp.css";

export default function TimerApp() {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(undefined);

  const handleStartButton = () => {
    setIntervalId(
      setInterval(() => {
        setTime((prevState) => prevState + 1);
      }, 10)
    );
  };

  const handleStopButton = () => {
    clearInterval(intervalId);
    setIntervalId(undefined);
  };

  const handleResetButton = () => setTime(0);

  return (
    <div className="container">
      <div className="timer">{time / 100}</div>
      <div className="buttons">
        <div>
          <button onClick={handleStartButton} disabled={!!intervalId}>
            Start
          </button>
        </div>
        <div>
          <button onClick={handleStopButton} disabled={!!!intervalId}>
            Stop
          </button>
        </div>
        <div>
          <button onClick={handleResetButton} disabled={time === 0}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
