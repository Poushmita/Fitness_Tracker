import React from "react";
import { Line } from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  } from "chart.js";
  
  // Register required components
  ChartJS.register(
    CategoryScale,  // Fixes the "category" scale issue
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const Chart = ({ data, onHover }) => { 
  const chartData = {
    labels: data.map((d) => d.date),
    datasets: [
      {
        label: "Calories Burned",
        data: data.map((d) => d.calories),
        borderColor: "rgb(75, 192, 192)",
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            onHover(data[context.dataIndex]); // Update dashboard on hover
            return `Calories: ${context.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="bg-gray-800 p-4 rounded mt-6">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default Chart;


// import React, { useState } from "react";
// import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
// import { generateData } from "./DataUtils";

// const yearlyData = generateData();

// const Chart = ({ setHoverData }) => {
//     return (
//         <ResponsiveContainer width="100%" height={300}>
//             <LineChart
//                 data={yearlyData}
//                 onMouseMove={(e) => setHoverData(e.activePayload?.[0]?.payload || yearlyData[0])}
//             >
//                 <XAxis dataKey="date" />
//                 <YAxis />
//                 <Tooltip />
//                 <Line type="monotone" dataKey="calories" stroke="#FF5733" />
//             </LineChart>
//         </ResponsiveContainer>
//     );
// };

// export default Chart;


// import React from 'react';
// import { LineChart as RechartsLineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// const data = [
//   { name: 'Jan', value: 400 },
//   { name: 'Feb', value: 300 },
//   { name: 'Mar', value: 500 },
//   { name: 'Apr', value: 200 },
//   { name: 'May', value: 600 },
// ];

// const CustomLineChart = () => {
//   return (
//     <ResponsiveContainer width="100%" height={300}>
//       <RechartsLineChart data={data}>
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
//       </RechartsLineChart>
//     </ResponsiveContainer>
//   );
// };

// export default CustomLineChart;

