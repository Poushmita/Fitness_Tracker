import React, { useState } from "react";
import Chart from "./Chart";
import ProgressBar from "./ProgressBar";
import { generateData } from "./DataUtils";

const yearlyData = generateData();

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(yearlyData[0]);

  return (
    <div className="w-full h-screen flex flex-col bg-gray-900 text-white">
      {/* Header */}
      <header className="w-full bg-gray-800 p-4 text-center text-lg font-bold">
        Fitness Tracker Dashboard
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-1/5 bg-gray-800 p-4 hidden md:block">
          <nav className="space-y-4">
            <button className="w-full p-2 bg-gray-700 rounded">Yearly</button>
            <button className="w-full p-2 bg-gray-700 rounded">Monthly</button>
            <button className="w-full p-2 bg-gray-700 rounded">Daily</button>
          </nav>
        </aside>

        {/* Main Dashboard */}
        <main className="flex-1 p-6">
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-gray-800 p-4 rounded shadow">
              <h2 className="text-xl">Calories Burned</h2>
              <p className="text-2xl font-bold">{selectedDate.calories}</p>
            </div>
            <div className="bg-gray-800 p-4 rounded shadow">
              <h2 className="text-xl">Active Minutes</h2>
              <p className="text-2xl font-bold">{selectedDate.activeMinutes}</p>
            </div>
            <div className="bg-gray-800 p-4 rounded shadow">
              <h2 className="text-xl">Steps Taken</h2>
              <p className="text-2xl font-bold">{selectedDate.steps}</p>
            </div>
          </div>

          {/* Progress Bar */}
          <ProgressBar progress={selectedDate.progress} />

          {/* Chart */}
          <Chart data={yearlyData} onHover={setSelectedDate} />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;


// import React, { useState } from "react";
// import Chart from "./Chart";
// import ProgressBar from "./ProgressBar";
// import { generateData } from "./DataUtils";

// const yearlyData = generateData();

// const Dashboard = () => {
//     const [hoverData, setHoverData] = useState(yearlyData[0]);

//     return (
//         <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold mb-6">Yearly Health Dashboard</h2>

//             <div className="grid grid-cols-3 gap-4">
//                 <div className="p-4 bg-white rounded shadow">
//                     <h3 className="text-sm text-gray-600">Calories Burned</h3>
//                     <p className="text-lg font-bold">{hoverData.calories} kcal</p>
//                 </div>
//                 <div className="p-4 bg-white rounded shadow">
//                     <h3 className="text-sm text-gray-600">Steps Taken</h3>
//                     <p className="text-lg font-bold">{hoverData.steps} steps</p>
//                 </div>
//                 <div className="p-4 bg-white rounded shadow">
//                     <h3 className="text-sm text-gray-600">Active Minutes</h3>
//                     <p className="text-lg font-bold">{hoverData.activeMinutes} min</p>
//                 </div>
//             </div>

//             <div className="mt-6">
//                 <h3 className="text-sm text-gray-600">Daily Goal Progress</h3>
//                 <ProgressBar progress={hoverData.progress} />
//             </div>

//             {/* Yearly Graph */}
//             <Chart setHoverData={setHoverData} />
//         </div>
//     );
// };

// export default Dashboard;


// import React, { useState } from "react";
// import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// const data = [
//     { date: "10 AM", calories: 200, steps: 1500, activeMinutes: 10, progress: 20 },
//     { date: "11 AM", calories: 350, steps: 3000, activeMinutes: 20, progress: 40 },
//     { date: "12 PM", calories: 500, steps: 4500, activeMinutes: 30, progress: 60 },
//     { date: "1 PM", calories: 600, steps: 5500, activeMinutes: 40, progress: 80 },
// ];

// const Dashboard = () => {
//     const [hoverData, setHoverData] = useState(data[0]);

//     return (
//         <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
//             <h2 className="text-xl font-semibold mb-4">Daily Activity</h2>

//             <div className="grid grid-cols-3 gap-4">
//                 <div className="p-4 bg-white rounded shadow">
//                     <h3 className="text-sm text-gray-600">Calories Burned</h3>
//                     <p className="text-lg font-bold">{hoverData.calories} kcal</p>
//                 </div>
//                 <div className="p-4 bg-white rounded shadow">
//                     <h3 className="text-sm text-gray-600">Steps Taken</h3>
//                     <p className="text-lg font-bold">{hoverData.steps} steps</p>
//                 </div>
//                 <div className="p-4 bg-white rounded shadow">
//                     <h3 className="text-sm text-gray-600">Active Minutes</h3>
//                     <p className="text-lg font-bold">{hoverData.activeMinutes} min</p>
//                 </div>
//             </div>

//             {/* Progress Bar Section */}
//             <div className="mt-6">
//                 <h3 className="text-sm text-gray-600">Daily Goal Progress</h3>
//                 <div className="w-full bg-gray-300 rounded-full h-5 mt-2">
//                     <div
//                         className="bg-blue-500 h-5 rounded-full text-xs text-center text-white"
//                         style={{ width: `${hoverData.progress}%` }}
//                     >
//                         {hoverData.progress}%
//                     </div>
//                 </div>
//             </div>

//             {/* Graph */}
//             <ResponsiveContainer width="100%" height={300}>
//                 <LineChart data={data} onMouseMove={(e) => setHoverData(e.activePayload?.[0]?.payload || hoverData)}>
//                     <XAxis dataKey="date" />
//                     <YAxis />
//                     <Tooltip />
//                     <Line type="monotone" dataKey="calories" stroke="#FF5733" />
//                 </LineChart>
//             </ResponsiveContainer>
//         </div>
//     );
// };

// export default Dashboard;



// import React from "react";
// import { Line } from "react-chartjs-2";
// import "chart.js/auto";
// import "./Dashboard.css";

// const Dashboard = () => {
//   const data = {
//     labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
//     datasets: [
//       {
//         label: "Steps Walked",
//         data: [3000, 4500, 5000, 7000, 8000, 9000, 10000],
//         borderColor: "#4CAF50",
//         backgroundColor: "rgba(76, 175, 80, 0.2)",
//         fill: true,
//       },
//     ],
//   };

//   return (
//     <div className="dashboard-container">
//       <h2>Fitness Progress</h2>
//       <div className="chart-container">
//         <Line data={data} />
//       </div>
//       <div className="stats">
//         <div className="stat-card">
//           <h3>Calories Burned</h3>
//           <p>2200 kcal</p>
//         </div>
//         <div className="stat-card">
//           <h3>Active Minutes</h3>
//           <p>45 min</p>
//         </div>
//         <div className="stat-card">
//           <h3>Steps Taken</h3>
//           <p>10,000</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useState } from "react";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// import "./Dashboard.css";


// const data = [
//   { day: "Mon", steps: 4000 },
//   { day: "Tue", steps: 7000 },
//   { day: "Wed", steps: 5500 },
//   { day: "Thu", steps: 8000 },
//   { day: "Fri", steps: 6200 },
//   { day: "Sat", steps: 9000 },
//   { day: "Sun", steps: 10000 },
// ];

// const FitnessDashboard = () => {
//   const [filter, setFilter] = useState("weekly");

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
//       <motion.h1 className="text-3xl font-bold mb-4" animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -20 }}>Fitness Tracker Dashboard</motion.h1>
      
//       <div className="flex space-x-4 mb-4">
//         <Button variant={filter === "daily" ? "default" : "outline"} onClick={() => setFilter("daily")}>
//           Daily
//         </Button>
//         <Button variant={filter === "weekly" ? "default" : "outline"} onClick={() => setFilter("weekly")}>
//           Weekly
//         </Button>
//       </div>
      
//       <Card className="w-full max-w-3xl p-4 bg-white rounded-xl shadow-md">
//         <CardContent>
//           <h2 className="text-xl font-semibold mb-2">Step Count Progress</h2>
//           <ResponsiveContainer width="100%" height={300}>
//             <LineChart data={data}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="day" />
//               <YAxis />
//               <Tooltip />
//               <Line type="monotone" dataKey="steps" stroke="#4F46E5" strokeWidth={3} />
//             </LineChart>
//           </ResponsiveContainer>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default FitnessDashboard;
