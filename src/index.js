import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Speakers } from "./components/speakers/Speakers";
import { Home } from "./components/Home/Home";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { CardSpeaker } from "./components/CardSpeaker/CardSpeaker";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/header" element={<Header />}></Route>
      <Route path="/speakers" element={<Speakers />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/AboutUs" element={<AboutUs />}></Route>
      <Route path="/CardSpeaker" element={<CardSpeaker />}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
