import React from 'react';
import { useEffect, useState } from 'react';
import ChartComponent from './chartComponent';
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
    <div style={{display:'flex',width:'100%',height:'100%'}}>
      <div>
        <button className='backButton'>
          Back
        </button>
      </div>
      <div style={{width:'70%',justifyContent:'center',alignContent:'center',display:'flex',margin:'80px auto'}}>
        <ChartComponent />
      </div>
    </div>
      
    </>
  );
}

export default App;