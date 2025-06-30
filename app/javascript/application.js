import React from "react";
import { createRoot } from "react-dom/client";
import Hello from "./components/Hello.jsx";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("react-root");
  if (container) {
    const root = createRoot(container);
    root.render(<Hello />);
  }
});
