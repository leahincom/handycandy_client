import * as nextImage from 'next/image';
import './storybook.css';
import GlobalStyle from '../src/styles/GlobalStyle';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}     
Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />,
});

export const decorators = [
  (Story, context) => (
    <>
      <GlobalStyle />
      <Story {...context} />
    </>
  ),
];
