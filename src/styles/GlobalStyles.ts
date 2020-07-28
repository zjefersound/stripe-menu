import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    min-height: 100%;
    background: var(--primary);
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: 'Roboto', -apple-system, sans-serif;

  }
  ul {
    list-style: none;
    padding-left: 0;
  }

  :root {
    --primary: #202020;
    --secondary: #15181C;
    --search: #202327;
    --white: #D9D9D9;
    --gray: #7A7A7A;
    --outline: #2F3336;
  }
`;