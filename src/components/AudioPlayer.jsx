import { useEffect, useState } from 'react';
import { Howl } from 'howler';

export const AudioPlayer = ({ audioUrl, autoPlay = false, onEnd }) => {
  const [howl, setHowl] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sound = new Howl({
      src: [audioUrl],
      html5: true,
      onplay: () => setIsPlaying(true),
      onpause: () => setIsPlaying(false),
      onend: () => {
        setIsPlaying(false);
        onEnd?.();
      },
    });

    setHowl(sound);

    if (autoPlay) sound.play();

    const interval = setInterval(() => {
      if (sound.playing()) {
        setProgress((sound.seek() / sound.duration()) * 100);
      }
    }, 100);

    return () => {
      sound.unload();
      clearInterval(interval);
    };
  }, [audioUrl]);

  const togglePlay = () => {
    if (!howl) return;
    howl.playing() ? howl.pause() : howl.play();
  };

  return (
    <div className="audio-player">
      <div className="player-controls">
        <button className="play-btn" onClick={togglePlay}>
          {isPlaying ? '⏸' : '▶'}
        </button>
        <div className="progress-container">
          <div 
            className="progress-bar" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};