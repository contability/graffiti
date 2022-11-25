import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

const globalStyle = css`
  /* body{
      margin: 0;
  } */

  // reset 사용
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: Noto Sans, Noto Sans KR;
  }
`;

const GlobalStyle = createGlobalStyle`
    ${globalStyle}
`;

export default GlobalStyle;
