import { useState } from 'react';
import { AudioPlayer } from './AudioPlayer';
import { SegmentCard } from './SegmentCard';

export const DailyDigest = () => {
  const [activeSegment, setActiveSegment] = useState(null);
  const [preferences, setPreferences] = useState({
    moreNews: false,
    moreFiction: false,
    motivationOnly: false,
  });

  const segments = [
    {
      id: '1',
      title: 'News in Your Language',
      type: 'news',
      audioUrl: '/api/audio/news',
      duration: 120,
      summary: 'Latest updates on current affairs in your preferred language'
    },
    {
      id: '2',
      title: 'Story of the Day',
      type: 'story',
      audioUrl: '/api/audio/story',
      duration: 180,
      summary: 'A short fictional tale based on your preferences'
    },
    {
      id: '3',
      title: 'Today I Learn',
      type: 'learning',
      audioUrl: '/api/audio/learning',
      duration: 90,
      summary: 'Bite-sized educational fact from popular courses'
    },
    {
      id: '4',
      title: 'Listener\'s Horoscope',
      type: 'horoscope',
      audioUrl: '/api/audio/horoscope',
      duration: 60,
      summary: 'Personalized astrology reading based on your sign'
    },
    {
      id: '5',
      title: 'Mood Music Minute',
      type: 'music',
      audioUrl: '/api/audio/music',
      duration: 60,
      summary: 'Curated background music to match your mood'
    }
  ];

  const handleSegmentPlay = (segment) => {
    setActiveSegment(segment);
  };

  const handlePreferenceChange = (pref) => {
    setPreferences(prev => ({
      ...prev,
      [pref]: !prev[pref]
    }));
  };

  return (
    <div className="container">
      <h1 className="page-title">Your Daily Digest</h1>
      <p className="page-subtitle">Published daily at your preferred time</p>
      
      <div className="segments-container">
        {segments.map(segment => (
          <SegmentCard
            key={segment.id}
            segment={segment}
            isActive={activeSegment?.id === segment.id}
            onPlay={() => handleSegmentPlay(segment)}
          />
        ))}
      </div>

      <div className="preferences-panel">
        <h3 className="preferences-title">Shape Tomorrow's Digest</h3>
        <div className="preference-buttons">
          <button
            onClick={() => handlePreferenceChange('moreNews')}
            className={`preference-btn ${preferences.moreNews ? 'active' : ''}`}
          >
            More News
          </button>
          <button
            onClick={() => handlePreferenceChange('moreFiction')}
            className={`preference-btn ${preferences.moreFiction ? 'active' : ''}`}
          >
            More Fiction
          </button>
          <button
            onClick={() => handlePreferenceChange('motivationOnly')}
            className={`preference-btn ${preferences.motivationOnly ? 'active' : ''}`}
          >
            Motivation Only
          </button>
        </div>
      </div>

      {activeSegment && <AudioPlayer audioUrl={activeSegment.audioUrl} autoPlay />}
    </div>
  );
};