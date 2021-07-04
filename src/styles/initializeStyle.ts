import { css } from 'styled-components';

const initializeStyle = css`
  * {
    -webkit-appearance: none;
    margin: 0;
    border: 0;
    padding: 0;
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
    font-family: AppleSDGothicNeo, Noto-Sans, Roboto, Helvetica, sans-serif;
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
