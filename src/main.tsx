import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./Header/Navbar";
import Setup from "./Pages/Setup";

ReactDOM.render(
  <React.StrictMode>
    <Router basename={import.meta.env.BASE_URL}>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/setup" element={<Setup />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
