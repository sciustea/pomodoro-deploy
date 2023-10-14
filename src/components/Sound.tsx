// src/components/Sound.tsx

import React, { useState } from 'react';

const Sound: React.FC = () => {
  const [volume, setVolume] = useState(50);

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(event.target.value);
    setVolume(newVolume);
  };

  return (
    <div>
      <div className="volume-label">
        <h2>Volume</h2>
      </div>
      <div>
        <label htmlFor="volumeControl" className="visually-hidden">Volume Control</label>
        <input
          id="volumeControl"
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
        />
        <span className="volume-percentage">{volume}%</span>
      </div> 
    </div>
  );
};

export default Sound;
