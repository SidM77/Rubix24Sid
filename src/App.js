import React from "react";
import Mumbai from "./Mumbai";
import Resto from "./Resto";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/resto" element={<Resto />} />
        <Route path="/mumbai" element={<Mumbai />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
