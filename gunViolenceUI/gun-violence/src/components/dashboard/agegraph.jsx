import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export const data = {
  datasets: [
    {
      label: 'Adults',
      data: [23,54,33,11],
      backgroundColor: 'rgba(255, 99, 132, 1)',
    },
    {
        label: 'Teenagers',
        data: [34,21,45,65],
        backgroundColor: 'rgba(255, 187, 51, 0.4)',
      },
      {
        label: 'Children',
        data: [23,21,22,45],
        backgroundColor: 'rgba(0,200,81,0.4)',
      },
  ],
};

export function App() {
  return <Scatter options={options} data={data} />;
}
