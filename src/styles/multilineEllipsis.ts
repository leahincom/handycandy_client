import { css } from 'styled-components';

export default function multilineEllipsis(line = 2) {
  return css`
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${line};
    -webkit-box-orient: vertical;
  `;
}
