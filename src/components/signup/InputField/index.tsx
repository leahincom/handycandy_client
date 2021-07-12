import styled from 'styled-components';

const InputWrapper = styled.input`
  box-sizing: border-box;
  outline: none;
  border: 1px solid var(--gray-5);
  border-radius: 17px;
  background: var(--white);
  padding: 11px 28px;
  width: 684px;
  height: 82px;
  line-height: 28px;
  font-family: var(--roboto);
  font-size: 24px;

  :focus {
    border: 1px solid #808080;
  }

  ::placeholder {
    color: var(--gray-5);
  }
`;
export interface InputFieldProps {
  placeholder: string;
  type: string;
}

export default function InputField({ placeholder, type }: InputFieldProps) {
  return <InputWrapper type={type} placeholder={placeholder} />;
}
