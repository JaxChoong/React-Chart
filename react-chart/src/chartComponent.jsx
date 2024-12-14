import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';


const ChartComponent = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  useEffect(() => {
    // Retrieve and parse the data from localStorage
    // get totalTimes from localstorage
    let totalTimes = JSON.parse(localStorage.getItem('totalTimes'));
    // go through totalTimes and convert it to an array of dicts
    let storedData = Object.entries(totalTimes).map(([language, time]) => ({
        language,
        time,
    }));

    const data = storedData;

    const ctx = chartRef.current.getContext('2d');

    // Destroy the previous chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Create a new chart instance
    chartInstanceRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map(row => row.language),
        datasets: [
          {
            label: 'Time spent on languages (seconds)',
            data: data.map(row => row.time),
          },
        ],
      }
    });

    // Cleanup function to destroy the chart instance when the component unmounts
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return <canvas id="acquisitions" ref={chartRef}></canvas>;
};

export default ChartComponent;