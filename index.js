import React from "react";
import ReactDOM from "react-dom/client"; // Use the new `react-dom/client` import
import "./styles.css";
import App from "./App";

// Create a root using ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
