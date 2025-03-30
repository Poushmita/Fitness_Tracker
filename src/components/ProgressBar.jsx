import React from "react";

const ProgressBar = ({ progress }) => {
    return (
        <div className="w-full bg-gray-300 rounded-full h-5 mt-2">
            <div
                className="bg-blue-500 h-5 rounded-full text-xs text-center text-white"
                style={{ width: `${progress}%`, transition: "width 0.5s ease-in-out" }}
            >
                {progress}%
            </div>
        </div>
    );
};

export default ProgressBar;


// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// import React from 'react';
// import { Line } from 'react-chartjs-2';


// const ProgressBar = () => {
//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: true, // Set to false if you don't want a legend
//       },
//       title: {
//         display: true,
//         text: "Progress Chart",
//       },
//     },
//     scales: {
//       x: {
//         type: "category",
//         title: {
//           display: true,
//           text: "Time",
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: "Progress",
//         },
//       },
//     },
//   };
  
//   const data = {
//     labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
//     datasets: [
//       {
//         label: 'Steps Taken',
//         data: [5000, 7000, 8000, 6500, 9000],
//         backgroundColor: 'rgba(75,192,192,0.2)',
//         borderColor: 'rgba(75,192,192,1)',
//         borderWidth: 2,
//       },
//     ],
//   };

//   return (
//     <div className="chart-container">
//       <Line key={JSON.stringify(data)} data={data} options={options} />
//       {/* <Line data={data} /> */}
//     </div>
//   );
// };

// export default ProgressBar;



// import React from "react";

// const ProgressBar = ({ progress }) => {
//   return (
//     <div className="w-full bg-gray-200 rounded-full h-5">
//       <div
//         className="bg-green-500 h-5 rounded-full"
//         style={{ width: `${progress}%` }}
//       ></div>
//     </div>
//   );
// };

// export default ProgressBar;

