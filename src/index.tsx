import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "containers/App";
import { GlobalStyle } from "styles";
import reportWebVitals from "./reportWebVitals";
import { theme } from "styles";
import "@fontsource/roboto";

import { BrowserRouter, Route } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <QueryParamProvider ReactRouterRoute={Route}>
          <App />
          <GlobalStyle />
        </QueryParamProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
