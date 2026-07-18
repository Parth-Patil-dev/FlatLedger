import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

import { ExpenseProvider } from "./context/ExpenseContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>

    <ExpenseProvider>

      <Toaster
        position="top-right"
        reverseOrder={false}
      />

      <App />

    </ExpenseProvider>

</BrowserRouter>
  </StrictMode>
);