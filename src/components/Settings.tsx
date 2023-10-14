// src/components/Settings.tsx

import React, { useState } from 'react';

type Props = {
  onSettingsChange: (workDuration: number, breakDuration: number) => void;
};

const Settings: React.FC<Props> = ({ onSettingsChange }) => {
  const [workDuration, setWorkDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);

  const handleSaveSettings = () => {
    onSettingsChange(workDuration, breakDuration);
  };

  return (
    <div>
      <h2>Settings</h2>
      <div>
        <label htmlFor="workDuration">Work Duration (minutes):</label>
        <input
          type="number"
          id="workDuration"
          value={workDuration}
          onChange={(e) => setWorkDuration(parseInt(e.target.value))}
          className="input-field"
        />
      </div>
      <div>
        <label htmlFor="breakDuration">Break Duration (minutes):</label>
        <input
          type="number"
          id="breakDuration"
          value={breakDuration}
          onChange={(e) => setBreakDuration(parseInt(e.target.value))}
          className="input-field"
        />
      </div>
      <div className="space-above-save"></div>
      <button onClick={handleSaveSettings} className="settings-button">Save</button>
    </div>
  );
};

export default Settings;
