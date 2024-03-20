import React from 'react';
import useLocalStorage from './useLocalStorage';

const LightDarkMode = () => {
    const [theme, setTheme] = useLocalStorage('theme', 'dark');
    const handleToggelTheme = () => {
        setTheme(theme === 'light'? 'dark' : 'light');
    }
  return (
    <div>
      <div className={`w-full h-screen flex justify-center items-center ${theme === 'light'? 'bg-white text-slate-900' : 'bg-slate-900 text-white'}`}>
        <div className="text" data-theme={theme}>
        <h1 className="text">Hello World</h1>
        <button onClick={handleToggelTheme} className="text">Change Theme</button>

        </div>
      </div>
    </div>
  )
}

export default LightDarkMode
