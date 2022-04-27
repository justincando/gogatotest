import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import Registration from "./components/Registration";
import Login from "./components/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
