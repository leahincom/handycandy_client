import { createGlobalStyle } from 'styled-components';
import colorSystems from './colorSystems';
import fontSystems from './fontSystems';
import initializeStyle from './initializeStyle';

const GlobalStyle = createGlobalStyle`
${initializeStyle};
${colorSystems};
${fontSystems};
`;

export default GlobalStyle;
