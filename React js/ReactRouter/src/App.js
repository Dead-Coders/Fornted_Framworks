import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
     
          <Route path="/" element={<div>Home Page</div>}/>
          <Route path="about" element={<div>About Page</div>}/>
          <Route path="contact" element={<div>Contact Page</div>}/>
      
        </Routes>
      </BrowserRouter>
          <Navbar/>
    </>
  );
}

export default App;
