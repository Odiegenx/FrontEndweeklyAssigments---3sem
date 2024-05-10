import { createGlobalStyle } from 'styled-components';

const GlobalStyles   = createGlobalStyle`

    :root{

        --color-purple-900: #2a1b3d;
        --color-purple-50: #f5e1ff;
        --color-green: #134e4a;
        --color-blue: #312e81;
        --color-red: #881337;
        --color-yellow: #ca8a04;

        --color-gray: #a8a29e;
        --color-gray-light: #d6d3d1;
        --color-gray-dark: #292524;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Lato', 'sans-serif';
    }
`;

export default GlobalStyles;