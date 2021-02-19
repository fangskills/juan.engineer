import React from "react";
import axios from "axios";
import { createGlobalStyle } from "styled-components";

import FontStyle from "../components/fonts";
import { SetTheme } from "../utils/theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: var(--background)
  }
  html,
  body {
    padding: 0;
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
  :root {
    --text: #000000;
    --highlight-color: #127796;
    --widget-background: #ffffff;
    --background: #ffffff;
  }
  .__react_component_tooltip {
    box-shadow: 2px 2px 10px 0px #00000026;
  }
`;

function Portfolio({ Component, pageProps }) {
  axios({
    baseURL: "https://go.juan.engineer/api"
  })
  
  React.useEffect(() => {
    if (localStorage.getItem("theme-name"))
      SetTheme(localStorage.getItem("theme-name") as "light" | "dark");
  }, []);
  return (
    <>
    <FontStyle />
    <GlobalStyle />
    <Component {...pageProps} />
    </>
  )
}

export default Portfolio;