import * as React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./legacy-app.jsx";
import "./image-slot.js";
import "./index.css";

createRoot(document.getElementById("root")).render(<App />);
