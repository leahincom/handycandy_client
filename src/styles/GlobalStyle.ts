import { createGlobalStyle, css } from 'styled-components';
import colorSystems from './colorSystems';
import initializeStyle from './initializeStyle';

const globalStyles = css`
  ${initializeStyle}
  ${colorSystems}
`;
const GlobalStyle = createGlobalStyle`
${globalStyles}
`;

export default GlobalStyle;
