import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import Residencies from "./components/Residencies";
import Value from "./components/Value";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="header-hero">
      <div className="blur"></div>
      <Header />
      <Hero />
    </div>
    <Companies />
    <Residencies />
    <Value />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
