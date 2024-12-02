import React from 'react';
import { useEffect, useState } from 'react';
import ChartComponent from './chartComponent';
import './App.css';

function ChartPage() {
  const languageTime = [
    { language: 'javascript', time: 2 },
    { language: 'python', time: 3 },
    { language: 'java', time: 6 },
    { language: 'c++', time: 5 },
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
      <div style={{width:'60%',justifyContent:'center',alignContent:'center',display:'flex',margin:'100px auto'}}>
        <ChartComponent />
      </div>
    </div>
      
    </>
  );
}

export default ChartPage;