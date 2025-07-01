import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ThankYou from "./components/ThankYou";
import UninstallPage from "./components/UninstallPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ThankYou />} />
          <Route path="/uninstall" element={<UninstallPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;