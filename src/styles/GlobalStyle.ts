import { createGlobalStyle } from 'styled-components';
import colorSystems from './colorSystems';
import initializeStyle from './initializeStyle';

const GlobalStyle = createGlobalStyle`
@import url('https://cdn.rawgit.com/innks/NanumSquareRound/master/nanumsquareround.min.css');
${initializeStyle};
${colorSystems};
`;

export default GlobalStyle;
