import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Estilos globais */
    *{
        font-family: Helvetica;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
      background-color: #000;
      color: #fff;
    }

    a{
      text-decoration: none;
      color: #cf2d2d;
      transition: .5s;
    }

    a:hover{
        color: #b22020;
    }

    
  /* Mais estilos globais */
`;

export default GlobalStyles;