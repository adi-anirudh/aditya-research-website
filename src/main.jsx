import React from "react";
import { createRoot } from "react-dom/client";
import PersonalResearchWebsite from "./App.jsx";
import "./style.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PersonalResearchWebsite />
  </React.StrictMode>
);
