import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Expenses from "./pages/Expenses";
import Wallet from "./pages/Wallet";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;