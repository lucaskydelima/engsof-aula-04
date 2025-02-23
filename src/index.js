import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { ContextoLoginProvider } from "./contexts/ContextLogin";

import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextoLoginProvider>
      <App />
    </ContextoLoginProvider>
  </React.StrictMode>
);
