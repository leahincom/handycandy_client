import Image from 'next/image';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { IdIcon, PasswordIcon } from '../../public/assets/icons';
import Navbar from '../components/common/Navbar';

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

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 186px;
`;

const LoginInput = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 17px;
  background: var(--gray-1);
  padding-left: 39px;
  width: 684px;
  height: 82px;

  input {
    margin-left: 46px;
    outline: none;
    background-color: var(--gray-1);
    width: 500px;
    height: 100%;
    line-height: 28px;
    font-family: var(--roboto);
    font-size: 24px;

    ::placeholder {
      color: var(--gray-5);
    }
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
  return (
    <>
      <Navbar />
      <Container>
        <Title>로그인</Title>
        <Desc>로그인 후 서비스를 이용해주세요</Desc>
        <LoginForm>
          <LoginInput style={{ marginBottom: '34px' }}>
            <Image src={IdIcon} alt='' />
            <input placeholder='아이디를 입력해주세요' />
          </LoginInput>
          <LoginInput>
            <Image src={PasswordIcon} alt='' />
            <input type='password' placeholder='비밀번호를 입력해주세요' />
          </LoginInput>
          <LoginMenu>
            <div>아이디 찾기</div>
            <span>&nbsp; | &nbsp; </span>
            <div>비밀번호 찾기</div>
          </LoginMenu>
          <Buttons>
            <SignInButton>로그인</SignInButton>
            <SignUpButton onClick={() => router.push('/signup')}>회원가입</SignUpButton>
          </Buttons>
        </LoginForm>
      </Container>
    </>
  );
}
