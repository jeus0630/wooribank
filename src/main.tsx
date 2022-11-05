import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RecoilRoot>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RecoilRoot>
);
