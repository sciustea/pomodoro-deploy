// src/App.tsx

import React, { useState } from 'react';
import './App.css';
import Timer from './components/Timer';
import Settings from './components/Settings';
import Sound from './components/Sound';

function App() {
  const [workDuration, setWorkDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);

  return (
    <div className="App">
      <h2 className="pomodoro-title">Pomodoro Timer</h2>
      <Timer workDuration={workDuration} breakDuration={breakDuration} />
      <Settings
        onSettingsChange={(newWorkDuration, newBreakDuration) => {
          setWorkDuration(newWorkDuration);
          setBreakDuration(newBreakDuration);
        }}
      />
      <Sound />
    </div>
  );
}

export default App;
