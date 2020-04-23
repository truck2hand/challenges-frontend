import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

import base from './base';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${base}
`;

export default GlobalStyle;
