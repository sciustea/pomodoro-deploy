// src/components/Timer.tsx

import React, { useState, useEffect } from 'react';

type Props = {
  workDuration: number;
  breakDuration: number;
};

const Timer: React.FC<Props> = ({ workDuration, breakDuration }) => {
  const [timeLeft, setTimeLeft] = useState(workDuration * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isWorking, setIsWorking] = useState(true);

  useEffect(() => {
    document.body.className = isWorking ? 'work-background' : 'break-background';

    return () => {
      document.body.className = '';
    };
  }, [isWorking]);

  const audioUrl = "https://assets.coderrocketfuel.com/pomodoro-times-up.mp3";

  const playSound = () => {
    const audio = new Audio(audioUrl);
    audio.play().catch((error) => {
      console.error("Error playing audio:", error);
    });
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);

        if (timeLeft === 1) {
          // when the timer reaches 1 second (just before zero), play the sound.
          playSound();
        }

        if (timeLeft === 0) {
          // when the timer reaches zero, toggle the work/break state.
          setIsWorking(!isWorking);
          setTimeLeft(isWorking ? breakDuration * 60 : workDuration * 60);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timeLeft, isRunning, isWorking, workDuration, breakDuration]);

  return (
    <div className="timer">
      <h1 className="work-break-title">{isWorking ? 'Work' : 'Break'}</h1>
      <p className="countdown-timer">
        {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
      </p>
      <button onClick={() => setIsRunning(!isRunning)} className="timer-button">
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button onClick={() => setTimeLeft(isWorking ? workDuration * 60 : breakDuration * 60)} className="timer-button reset-button">
        Reset
      </button>

      
      <div className="space-above-audio"></div>
      <audio controls>
        <source src={audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Timer;
