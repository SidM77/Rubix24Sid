import React from "react";
import Mumbai from "./Mumbai";
import Resto from "./Resto";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import ComparePg from "./ComparePg";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/resto" element={<Resto />} />
        <Route path="/mumbai" element={<Mumbai />} />
        <Route path="/home" element={<Home />} />
        <Route path="/compare" element={<ComparePg />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
