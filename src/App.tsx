import React, { useState } from "react";
import logo from "./logo.svg";
import { css, keyframes } from "@emotion/react";

export function App() {
  const [count, setCount] = useState(0);
  return (
    <div css={styles.app}>
      <header css={styles.appHeader}>
        <img src={logo} css={styles.appLogo} alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            css={styles.appLink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            css={styles.appLink}
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

function getPrefersReducedMotion() {
  const QUERY = "(prefers-reduced-motion: no-preference)";
  const mediaQueryList = window.matchMedia(QUERY);
  const prefersReducedMotion = !mediaQueryList.matches;
  return prefersReducedMotion;
}

const prefersReducedMotion = getPrefersReducedMotion();

const appLogoSpin = keyframes({
  from: {
    transform: "rotate(0deg)",
  },
  to: {
    transform: "rotate(360deg)",
  },
});

const styles = {
  app: css({
    textAlign: "center",
  }),
  appLogo: css({
    height: "40vmin",
    pointerEvents: "none",
    animation: prefersReducedMotion
      ? undefined
      : `${appLogoSpin} infinite 20s linear`,
  }),
  appHeader: css({
    backgroundColor: "#282c34",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  }),
  appLink: css({
    color: "#61dafb",
  }),
  button: css({
    fontSize: "calc(10px + 2vmin)",
  }),
};
