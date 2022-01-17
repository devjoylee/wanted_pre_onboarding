import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    background-color: transparent;
    line-height: inherit;
    border: none;
  }
`;

export default GlobalStyles;
