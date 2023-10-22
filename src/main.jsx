import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { App } from "./Pages/App";
import { NotFound } from "./Pages/NotFound";
import { Projects } from "./Pages/Projects";
import { Pricing } from "./Pages/Pricing";

import "./assets/styles/main.css";
import { Squad } from "./Pages/Squad";

document.body.setAttribute(
  "data-bs-theme",
  localStorage.getItem("theme") || "dark"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/squad" element={<Squad />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);
