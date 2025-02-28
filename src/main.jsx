import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./AuthContext";
import './index.css'
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>  {/* ✅ Wrap your app with BrowserRouter */}
      <AuthProvider>  
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);