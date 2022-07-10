import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }
 
   body {
    background-color: ${props => props.theme['gray-900']};
    color: ${props => props.theme['gray-300']};
   }

   body, input, text-area, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
   }
 `;
