import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { MantineProvider } from "@mantine/core";
import AuthContextProvider from "./Context/AuthContext.jsx";

import EducationContextProvider from "./Context/EducationContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider>
      <BrowserRouter>
        <AuthContextProvider>
          <EducationContextProvider>
            <App />
          </EducationContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);
