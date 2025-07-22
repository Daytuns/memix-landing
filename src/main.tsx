import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Projects from "./Pages/Projects";
import Components from "./Pages/Components";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./Header/Navbar";
import Setup from "./Pages/Setup";
import Present from "./Pages/Present";

ReactDOM.render(
  <React.StrictMode>
    <Router basename={import.meta.env.BASE_URL}>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/team" element={<Team />} /> */}
        <Route path="/setup" element={<Setup />} />
        {/* <Route path="/projects" element={<Projects />} />
        <Route path="/components" element={<Components />} />
        <Route path="/present" element={<Present />} />  */}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
