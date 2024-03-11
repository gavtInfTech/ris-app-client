import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { AuthProvider } from "./contexts/AuthContext";
import App from "./App";
import { MessageProvider } from "./contexts/MessageContext";
import { StyledEngineProvider } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ruRU } from "@mui/x-data-grid";
const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = createTheme(ruRU);
root.render(
  <AuthProvider>
    <MessageProvider>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <App />
        </StyledEngineProvider>
      </ThemeProvider>
    </MessageProvider>
  </AuthProvider>
);
