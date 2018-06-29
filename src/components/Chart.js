import React from 'react';
import {Bar} from 'react-chartjs-2';

const Chart = ({ metrics, title, color }) => {

  const data = {
    labels: ['1', '2', '3'],
    datasets: [
      {
        label: title,
        backgroundColor: color,
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        interval: 50,
        data: metrics
      }
    ]
  };

  return  (
    <div className="chart-container">
      <Bar data={data} options={{maintainAspectRatio: false}} />
    </div>
  );
}

export default Chart;
