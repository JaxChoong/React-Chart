import React from 'react';
import { useEffect, useState } from 'react';
import ChartComponent from './chartComponent';
import './App.css';

function ChartPage() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('saveCount');
    return savedCount ? Number(savedCount) : 0;
  });

  const languageTime = [
    { language: 'javascript', time: 2 },
    { language: 'python', time: 3 },
    { language: 'java', time: 6 },
    { language: 'c#', time: 1 },
    { language: 'c++', time: 5 },
    { language: 'go', time: 1 },
    { language: 'ruby', time: 3 },
    { language: 'swift', time: 2 },
    { language: 'kotlin', time: 2 },
    { language: 'typescript', time: 0 },
  ];
  useEffect(() => {
    localStorage.setItem('languageTime', JSON.stringify(languageTime));
  }, [languageTime]);

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

export default ChartPage;