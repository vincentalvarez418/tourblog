import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Content from "./components/Content";
import Day1 from "./components/days/day1";
import Day2 from "./components/days/Day2";
import Day3 from "./components/days/Day3";
import Day4 from "./components/days/Day4";
import Day5 from "./components/days/Day5";
import Day6 from "./components/days/Day6";
import Navbar from "./components/Navbar";
import Header from "./components/header";
import "./App.css";

const Layout = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname === "/" && <Header />} 
      <Navbar />
      <main id="destinations" className="pt-20">
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/day1" element={<Day1 />} />
            <Route path="/day2" element={<Day2 />} />
            <Route path="/day3" element={<Day3 />} />
            <Route path="/day4" element={<Day4 />} />
            <Route path="/day5" element={<Day5 />} />
            <Route path="/day6" element={<Day6 />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
