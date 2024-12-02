import React from 'react';
import { useEffect, useState } from 'react';
import ChartComponent from './chartComponent';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('saveCount');
    return savedCount ? Number(savedCount) : 0;
  });

  useEffect(() => {
    localStorage.setItem('saveCount', count);
  }, [count]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <ChartComponent />
      </div>
    </>
  );
}

export default App;