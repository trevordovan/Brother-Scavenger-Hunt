import { createGlobalStyle } from "styled-components"
import TransitionStyles from "./TransitionStyles.js"

const GlobalStyle = createGlobalStyle`
  :root{
    --font-lato: 'Lato', sans-serif;
    --font-playfair: 'Playfair Display', serif;
    --font-roboto:'Roboto', sans-serif;
    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;
    --tab-height: 42px;
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  html {
    height: 100%;
    width: 100%;
  }

  body {
    color: black;
    height: 100%;
    margin: 0;
    min-height: 100%;
    background: white;
    font-family: var(--font-lato);
    overflow-x: hidden;
    line-height: 1.3;
  }

  .cls-1,.cls-2{
    fill:none;
  }.cls-2{
    stroke:#fff;
    stroke-miterlimit:10;
    stroke-width:120px;
  }
 
  main {
    margin: 0 auto;
    min-height: 100vh;
  }

  section {
    margin: 0 auto;
    padding: 150px 0;
    
    @media (max-width: 1080px) {
      padding: 120px 0;
    }
    @media (max-width: 768px) {
      padding: 80px 0;
    }
    @media (max-width: 480px) {
      padding: 60px 0;
    }
  }

  a {
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
  }

  ${TransitionStyles};
`

export default GlobalStyle