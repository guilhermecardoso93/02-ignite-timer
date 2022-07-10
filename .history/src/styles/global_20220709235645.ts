import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }
 
   body {
    background-color: #000;
   }

   body, input, text-area, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
   }
 `;
