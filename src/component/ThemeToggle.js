import React from 'react';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <div className='text-end mt-3'>
      <button onClick={toggleTheme}>
        {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </button>
    </div>
  );
};

export default ThemeToggle;
