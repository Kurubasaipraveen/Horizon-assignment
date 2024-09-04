import React, { useState } from 'react';
import Menu from './components/Menu';
import Settings from './components/Settings';
import './App.css';

const App = () => {
  const [language, setLanguage] = useState('English');

  return (
    <div className="app">
      <Settings currentLanguage={language} onLanguageChange={setLanguage} />
      <Menu language={language} />
    </div>
  );
};

export default App;
