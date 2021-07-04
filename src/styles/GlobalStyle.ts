import { createGlobalStyle } from 'styled-components';
import colorSystems from './colorSystems';
import HCMain from './fonts/HCMain/HCMain';
import initializeStyle from './initializeStyle';

const GlobalStyle = createGlobalStyle`
${initializeStyle};
${colorSystems};
${HCMain};
`;

export default GlobalStyle;
