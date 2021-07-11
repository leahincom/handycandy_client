import { createGlobalStyle } from 'styled-components';
import colorSystems from './colorSystems';
import initializeStyle from './initializeStyle';
import fontSystems from './fontSystems';

const GlobalStyle = createGlobalStyle`
${initializeStyle};
${colorSystems};
${fontSystems};
`;

export default GlobalStyle;
