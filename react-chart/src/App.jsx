import React from 'react';
import { useEffect, useState } from 'react';
import ChartComponent from './chartComponent';
import './App.css';
import { Button } from '@chakra-ui/react';

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
      <div style={{width:'60%',justifyContent:'center',alignContent:'center',display:'flex',padding:'auto',margin:'auto'}}>
        <ChartComponent />
      </div>
    </div>
      
    </>
  );
}

export default App;