import { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Navbar from '../components/common/Navbar';
import { login } from './api';

const Container = styled.div`
  margin: 0 auto;
  margin-top: 94px;
  max-width: 1440px;
`;

const Title = styled.div`
  opacity: 0.9;
  line-height: 135%;
  font-family: var(--nanum);
  font-size: 44px;
  font-weight: 800;
`;

const Desc = styled.div`
  margin-top: 10px;
  line-height: 28px;
  color: var(--gray-5);
  font-family: var(--roboto);
  font-size: 24px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 186px;
`;

const LoginInput = styled.input<{ iconSrc: string }>`
  outline: none;
  border: 1px solid var(--gray-1);
  border-radius: 17px;
  background-color: var(--gray-1);
  background-image: url(${(props) => props.iconSrc});
  background-position: 39px center;
  background-repeat: no-repeat;
  padding-left: 109px;
  width: 575px;
  height: 82px;
  line-height: 28px;
  font-family: var(--roboto);
  font-size: 24px;

  ::placeholder {
    color: var(--gray-5);
  }

  :focus {
    border: 1px solid var(--gray-6);
  }
`;

const LoginMenu = styled.div`
  display: flex;
  align-items: center;
  margin-top: 34px;
  line-height: 130%;
  color: #5a5a5a;
  font-family: var(--roboto);
  font-size: 18px;

  & > div {
    cursor: pointer;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 42px;
  width: 471px;
  line-height: 32px;
  font-family: var(--roboto);
  font-size: 27px;
  font-weight: 500;
`;

const SignInButton = styled.button`
  border-radius: 30px;
  background-color: var(--peach);
  cursor: pointer;
  width: 204px;
  height: 64px;

  :hover {
    background-color: #f5a9a9;
  }
`;

const SignUpButton = styled.button`
  border-radius: 30px;
  background-color: var(--gray-2);
  cursor: pointer;
  width: 228px;
  height: 64px;

  :hover {
    background-color: var(--gray-3);
  }
`;

export default function Login() {
  const router = useRouter();
  const [loginInfo, setLoginInfo] = useState({
    id: '',
    password: '',
  });

  const { id, password } = loginInfo;

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login(loginInfo.id, loginInfo.password);
    router.push('/');
  };

  return (
    <>
      <Navbar />
      <Container>
        <Title>?????????</Title>
        <Desc>????????? ??? ???????????? ??????????????????</Desc>
        <LoginForm onSubmit={handleLogin}>
          <LoginInput
            name='id'
            type='text'
            iconSrc='/assets/icons/IdIcon.svg'
            style={{ marginBottom: '34px' }}
            placeholder='???????????? ??????????????????'
            value={id}
            onChange={handleInputChange}
          />
          <LoginInput
            name='password'
            type='password'
            iconSrc='/assets/icons/PasswordIcon.svg'
            placeholder='??????????????? ??????????????????'
            value={password}
            onChange={handleInputChange}
          />
          <LoginMenu>
            <div>????????? ??????</div>
            <span>&nbsp; | &nbsp; </span>
            <div>???????????? ??????</div>
          </LoginMenu>
          <Buttons>
            <SignInButton type='submit'>?????????</SignInButton>
            <SignUpButton type='button' onClick={() => router.push('/signup')}>
              ????????????
            </SignUpButton>
          </Buttons>
        </LoginForm>
      </Container>
    </>
  );
}
