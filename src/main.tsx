import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OnBoarding from "./pages/onBoarding";
import Home from "./pages/home";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RecoilRoot>
    <BrowserRouter>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/onboarding" element={<OnBoarding />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  </RecoilRoot>
);
