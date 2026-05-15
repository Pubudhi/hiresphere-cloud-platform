import { HashRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Submissions from "./pages/Submissions";
import History from "./pages/History";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/submissions" element={<Submissions />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </HashRouter>
  );
}

export default App;