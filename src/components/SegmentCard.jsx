export const SegmentCard = ({ segment, isActive, onPlay }) => {
    return (
      <div className={`segment-card ${isActive ? 'active' : ''}`}>
        <h3 className="segment-title">{segment.title}</h3>
        <p className="segment-summary">{segment.summary}</p>
        <div className="segment-footer">
          <span className="segment-duration">{segment.duration} seconds</span>
          <button 
            className="play-segment-btn" 
            onClick={onPlay}
          >
            {isActive ? 'Now Playing' : 'Play'}
          </button>
        </div>
      </div>
    );
  };    