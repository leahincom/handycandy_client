import styled, { css } from 'styled-components';

const sizeStyles = css<Pick<ButtonProps, 'size'>>`
  ${({ size }) =>
    size === 'ls' &&
    css`
      padding: 12px 30px;
      line-height: 28px;
      font-size: 24px;
      font-weight: 400;
    `}
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
  transition: 0.3s;
  color: ${({ color }) => (color ? color : '#5a5a5a')};
  ${({ buttonColor }) =>
    buttonColor === 'peach' &&
    css`
      background-color: var(--peach);
      :hover {
        background-color: var(--peach-hover);
      }
    `}
  ${({ buttonColor }) =>
    buttonColor === 'gray' &&
    css`
      background-color: var(--gray-2);
      :hover {
        background-color: var(--gray-3);
      }
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

const Text = styled.span`
  font-family: --var(roboto);
`;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonColor: 'peach' | 'gray';
  color?: string;
  text: string;
  size: 'ls' | 'sm' | 'md';
}

export default function Button({ buttonColor, color, text, size, ...props }: ButtonProps) {
  return (
    <Container {...props} buttonColor={buttonColor} color={color} size={size}>
      <Text>{text}</Text>
    </Container>
  );
}
