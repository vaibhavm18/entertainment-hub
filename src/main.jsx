import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./app";

ReactDOM.createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Router>
            <App />
        </Router>
    </StrictMode>
);
