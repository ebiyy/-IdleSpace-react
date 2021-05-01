import React from "react";
import ReactDOM from "react-dom";
import { css, Global } from "@emotion/react";
import { App } from "./App";

const globalStyles = css({
  body: {
    margin: 0,
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
  },
  code: {
    fontFamily:
      "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
