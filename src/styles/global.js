import { createGlobalStyle } from 'styled-components';
import 'react-credit-cards/es/styles-compiled.css';


const theme = {
    colors: {
            background: '#DE4B4B'
    }
};

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100% !important;
    height: 100%;
    max-height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: #FFF;
  }

  label {
      font-family: 'Verdana Regular' !important;
  }

  .hasError {
      color: #f44336;
      font-size: 12px;
      margin-top: 10px;
      font-family: 'Verdana Regular';
      font-size: 13px
  }

  .rccs {
      width: 364px;
      height: 224px;
  }

  .rccs__card {    
      width: 364px;
      height: 224px;
  }

`;

export { GlobalStyle, theme };
