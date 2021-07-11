import styled, { css } from 'styled-components';

const sizeStyles = css<Pick<ButtonProps, 'size'>>`
  ${({ size }) =>
    size === 'sm' &&
    css`
      padding: 12px 50px;
      line-height: 23.44px;
      font-size: 20px;
      font-weight: 400;
    `}
  ${({ size }) =>
    size === 'md' &&
    css`
      padding: 16px 65px;
      line-height: 25.78px;
      font-size: 22px;
      font-weight: 500;
    `}
`;

const colorStyles = css<Pick<ButtonProps, 'color' | 'buttonColor'>>`
  color: ${({ color }) => (color ? color : '#5a5a5a')};
  ${({ buttonColor }) =>
    buttonColor === 'peach' &&
    css`
      background-color: #ffbfbf;
    `}
  ${({ buttonColor }) =>
    buttonColor === 'gray' &&
    css`
      background-color: #e9e9e9;
    `}
`;

const Container = styled.button<Omit<ButtonProps, 'text'>>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  ${colorStyles}
  ${sizeStyles}
`;

const Text = styled.span``;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonColor: 'peach' | 'gray';
  color?: string;
  text: string;
  size: 'sm' | 'md';
}

export default function Button({ buttonColor, color, text, size }: ButtonProps) {
  return (
    <Container buttonColor={buttonColor} color={color} size={size}>
      <Text>{text}</Text>
    </Container>
  );
}
