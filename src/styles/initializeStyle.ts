import { css } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const initializeStyle = css`
  * {
    -webkit-appearance: none;
    box-sizing: border-box;
    margin: 0;
    border: 0;
    padding: 0;
    letter-spacing: -0.022em;
    font: baseline;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  button {
    border: none;
    padding: 0;
  }
  html,
  body {
    background-color: transparent;
    width: 100%;
    height: 100%;
    font-family: Roboto, sans-serif, Helvetica;
    font-size: 16px;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    text-decoration: none;
  }
  img {
    display: inline-block;
    vertical-align: top;
    -webkit-user-drag: none;
    -webkit-touch-callout: none;
  }
  button {
    margin: 0;
    outline: none;
    border: none;
    background: transparent;
    padding: 0;
    width: auto;
    height: min-content;
    overflow: visible;

    line-height: inherit;
    color: inherit;
    font: inherit;
  }

  button::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`;
export default initializeStyle;
