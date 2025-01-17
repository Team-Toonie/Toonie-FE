import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    display: flex;
    font-family: 'Pretendard';
    background-color: pink;
  }

  button {
    border: 0;
    cursor: pointer;
  }
`;

export default GlobalStyle;
