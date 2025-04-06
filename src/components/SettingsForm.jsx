export const SettingsForm = () => {
    const [deliveryTime, setDeliveryTime] = useState('07:00');
    const [language, setLanguage] = useState('english');
    const [selectedVoice, setSelectedVoice] = useState('default');
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  
    const voiceOptions = [
      { id: 'default', name: 'Standard Voice', premium: false },
      { id: 'deep', name: 'Deep Voice', premium: false },
      { id: 'soft', name: 'Soft Voice', premium: true },
      { id: 'celebrity1', name: 'Celebrity Voice 1', premium: true },
      { id: 'celebrity2', name: 'Celebrity Voice 2', premium: true },
    ];
  
    return (
      <div className="settings-form">
        <div className="form-group">
          <label className="form-label">Daily Delivery Time</label>
          <input
            type="time"
            value={deliveryTime}
            onChange={(e) => setDeliveryTime(e.target.value)}
            className="form-input"
          />
        </div>
  
        <div className="form-group">
          <label className="form-label">Preferred Language</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="form-input"
          >
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
          </select>
        </div>
  
        <div className="form-group">
          <label className="form-label">AI Voice Preference</label>
          <div className="form-radio-group">
            {voiceOptions.map((voice) => (
              <div key={voice.id} className="form-radio-item">
                <input
                  type="radio"
                  id={voice.id}
                  name="voice"
                  value={voice.id}
                  checked={selectedVoice === voice.id}
                  onChange={() => setSelectedVoice(voice.id)}
                  disabled={voice.premium}
                />
                <label htmlFor={voice.id}>
                  {voice.name}
                  {voice.premium && <span className="premium-badge">Premium</span>}
                </label>
              </div>
            ))}
          </div>
        </div>
  
        <div className="form-group">
          <label className="form-label">
            <input
              type="checkbox"
              checked={notificationsEnabled}
              onChange={(e) => setNotificationsEnabled(e.target.checked)}
            />
            <span style={{ marginLeft: '8px' }}>Enable push notifications</span>
          </label>
        </div>
  
        <button className="save-btn">Save Settings</button>
      </div>
    );
  };