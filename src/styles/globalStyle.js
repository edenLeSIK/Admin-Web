import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
    }
    body{
        box-sizing: border-box;
        margin: 0 auto;
    }
    a {
    color: inherit;
    text-decoration: none;
    }
    li {
        list-style: none;
    }
    button{
        background: none;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
    }
`;
