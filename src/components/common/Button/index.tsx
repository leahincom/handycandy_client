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
    size === 'mid' &&
    css`
      padding: 16px 65px;
      line-height: 25.78px;
      font-size: 22px;
      font-weight: 500;
    `}
`;

const colorStyles = css<Pick<ButtonProps, 'color'>>`
  color: #5a5a5a;
  ${({ color }) =>
    color === 'peach' &&
    css`
      background-color: #ffbfbf;
    `}
  ${({ color }) =>
    color === 'gray' &&
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
export interface ButtonProps {
  text: string;
  size: 'sm' | 'mid';
  color: 'peach' | 'gray';
}

export default function Button({ text, size = 'sm', color = 'gray' }: ButtonProps) {
  return (
    <Container size={size} color={color}>
      <Text>{text}</Text>
    </Container>
  );
}
