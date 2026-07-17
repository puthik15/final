import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import PortfolioDetails from "./pages/PortfolioDetails";
import ServiceDetails from "./pages/ServiceDetails";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/portfolio-details" element={<PortfolioDetails />} />
        <Route path="/service-details" element={<ServiceDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
