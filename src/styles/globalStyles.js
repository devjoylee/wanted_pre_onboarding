import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: "Helvetica", "Arial", sans-serif;
  }
  ul, li {
    list-style: none;
  }
  a {
    text-decoration: none;
    outline: none;
    color: inherit;
  }
  a:hover, a:active {
    text-decoration: none;
  }
  button {
    background-color: transparent;
    line-height: inherit;
    border: none;
  }
  input,
  label,
  select,
  button,
  textarea
  {
    margin:0;
    border:0;
    padding:0;
    display:inline-block;
    background:none;
    line-height:1;
    font-family:Arial;
  }
`;

export default GlobalStyles;
