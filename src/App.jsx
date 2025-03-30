import React from "react";
import Dashboard from "./components/Dashboard";

const App = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <Dashboard />
        </div>
    );
};

export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { FiHome, FiBarChart2, FiSettings } from "react-icons/fi";
// import Dashboard from "./components/Dashboard";
// import Settings from "./components/Settings";
// import "./App.css";

// function App() {
//   return (
//     <Router>
//       <div className="app-container">
//         <nav className="modern-navbar">
//           <ul>
//             <li><Link to="/" className="nav-link"><FiHome /> Home</Link></li>
//             <li><Link to="/dashboard" className="nav-link"><FiBarChart2 /> Dashboard</Link></li>
//             <li><Link to="/settings" className="nav-link"><FiSettings /> Settings</Link></li>
//           </ul>
//         </nav>
//         <div className="content">
//           <Routes>
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/settings" element={<Settings />} />
//             <Route path="/" element={<Dashboard />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React from "react";
// import Home from "./pages/Home";
// import "./App.css";

// const App = () => {
//   return (
//     <div className="app-container">
//       <Home />     
//     </div>
//   )
// };
// export default App;

