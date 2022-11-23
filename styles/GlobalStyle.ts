import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    /* body{
        margin: 0;
    } */

    // reset 사용
    ${reset}
    * {
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
