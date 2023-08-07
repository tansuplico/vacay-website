import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.jsx";
import "./styles/index.css";

import { Hotels, Rewards } from "./pages";
import { SelectedHotel } from "./components";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotels/:id" element={<SelectedHotel />} />
        <Route path="/rewards" element={<Rewards />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
