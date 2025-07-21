import React, { useState } from 'react';
import UserList from './components/UserList/UserList';
import './App.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
      <header>
        <h1>InstaBoard</h1>
        <button
          className="theme-toggle"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
      <UserList />
    </div>
  );
};

export default App;