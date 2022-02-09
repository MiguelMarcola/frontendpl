import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --cor-bg: #F6F4F6;
        --cor-stroke: #EDD8F3;
        --cor-branco: #FFFFFF;
        --cor-cinza: #F6F4F6;
        --cor-aviso: #FFC400;
        --cor-erro: #DB2525;
        --cor-sucesso: #51C421;
        --cor-texto: #454545;
        --cor-destaque: #E76316;
        --cor-primaria: #5F1478;
        --cor-secundaria: #AE276F;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px){
            font-size: 93.75%
        }

        @media (max-width: 720px){
            font-size: 87.5%
        }
    }

    body { 
        background: var(--cor-bg);
        -webkit-font-smoothing: antialised;
    }

    body, input, textarea, button {
        font-family: "muli", sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    .main{
        width: 100%;
    }

`