import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/Mobile/NavBar";
import HomePage from "./Components/Mobile/mobileHome";
import MoonPage from "./Components/Mobile/mobileMoon";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
  
       <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Moon" element={<MoonPage />} />
        </Routes>
    </Router>
  );
}

export default App;
