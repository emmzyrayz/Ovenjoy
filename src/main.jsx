// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";


import "./index.css";


import {BrowserRouter as Router} from "react-router-dom/dist";
import { ImageProvider } from "./context/ImageContext";

console.log("Rendering Main Component");

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <ImageProvider>
        <App />
      </ImageProvider>
    </Router>
  </React.StrictMode>
);