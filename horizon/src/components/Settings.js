import React from 'react';
import '../styles/Settings.css';

const Settings = ({ currentLanguage, onLanguageChange }) => {
  const languages = ['English', 'French', 'German', 'Russian', 'Spanish', 'Chinese'];

  return (
    <div className="settings">
      <label htmlFor="language-select">Choose Language:</label>
      <select
        id="language-select"
        value={currentLanguage}
        onChange={(e) => onLanguageChange(e.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Settings;
