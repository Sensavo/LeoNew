import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stats from "./components/Stats";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Stats />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

export default App;