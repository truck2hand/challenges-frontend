import { css } from 'styled-components';

export const theme = {
  colors: {
    primary: '#00000',
    secondary: '#000000',
  },
} as const;

// ______________________________________________________
//
type AppTheme = typeof theme;
// ______________________________________________________
//
declare module 'styled-components' {
  interface DefaultTheme extends AppTheme {}
}

export default css`
  a {
    text-decoration: none;
    color: rgb(0, 0, 238);
    border-bottom: 1px solid !important;
    border-bottom-color: rgba(0, 0, 238, 0.3) !important;
  }
  a:visited {
    color: rgb(85, 26, 139);
    border-bottom-color: rgba(85, 26, 139, 0.3) !important;
  }
  a:hover {
    color: #ff0000;
    border-bottom-color: rgba(255, 0, 0, 0.3) !important;
  }

  html {
    height: 100%;
    width: 100%;
  }

  body {
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    position: relative;
    font: 13px/20px Helvetica, Arial, 'Lucida Grande', sans-serif;
    overflow-x: hidden;
  }

  #__next {
    width: 100%;
    height: 100%;
    position: relative;
  }
`;
