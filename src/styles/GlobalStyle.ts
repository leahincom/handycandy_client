import { createGlobalStyle } from 'styled-components';
import colorSystems from './colorSystems';
import initializeStyle from './initializeStyle';

const GlobalStyle = createGlobalStyle`
${initializeStyle};
${colorSystems};
`;

export default GlobalStyle;
