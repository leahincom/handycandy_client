import styled from 'styled-components';
import { useRouter } from 'next/router';
import Navbar from '../components/common/Navbar';
import InputField from '../components/signup/InputField';

const Container = styled.div`
  margin: 0 auto;
  margin-top: 94px;
  padding-bottom: 32px;
  max-width: 1440px;
`;

const Title = styled.div`
  opacity: 0.9;
  line-height: 135%;
  color: var(--black);
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

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 186px;
`;

const InputWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;

  & > p {
    display: flex;
    align-items: center;
    opacity: 0.9;
    margin-right: 30px;
    width: 185px;
    line-height: 28px;
    color: var(--black);
    font-family: var(--roboto);
    font-size: 24px;
    font-weight: bold;
  }
`;

const BirthWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  outline: none;
  border: 1px solid var(--gray-5);
  border-radius: 17px;
  background: var(--white);
  width: 684px;
  height: 82px;

  span {
    color: var(--gray-5);
  }
`;

const BirthInput = styled.input`
  display: inline;
  outline: none;
  max-width: 70px;
  line-height: 28px;
  font-family: var(--roboto);
  font-size: 24px;

  ::placeholder {
    color: var(--gray-5);
  }
`;

const Button = styled.button`
  margin-top: 42px;
  border-radius: 30px;
  background-color: var(--peach);
  cursor: pointer;
  width: 204px;
  height: 64px;
  line-height: 32px;
  font-family: var(--roboto);
  font-size: 27px;
  font-weight: 500;

  :hover {
    background-color: #f5a9a9;
  }
`;

export default function Signup() {
  const router = useRouter();
  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/signin');
  };
  return (
    <>
      <Navbar />
      <Container>
        <Title>회원가입</Title>
        <Desc>핸디캔디와 함께 해주세요!</Desc>
        <SignupForm onSubmit={handleSignup}>
          <InputWrapper>
            <p>아이디</p>
            <InputField type='email' placeholder='example@email.com' />
          </InputWrapper>
          <InputWrapper>
            <p>이름</p>
            <InputField type='text' placeholder='이름을 입력해주세요' />
          </InputWrapper>
          <InputWrapper>
            <p>생년월일</p>
            <BirthWrapper>
              <BirthInput type='text' maxLength={4} placeholder='YYYY' />
              <span>/</span>
              <BirthInput type='text' maxLength={2} placeholder='MM' />
              <span>/</span>
              <BirthInput type='text' maxLength={2} placeholder='DD' />
            </BirthWrapper>
          </InputWrapper>
          <InputWrapper>
            <p>비밀번호</p>
            <InputField type='password' placeholder='비밀번호를 입력해주세요' />
          </InputWrapper>
          <InputWrapper>
            <p>비밀번호 확인</p>
            <InputField type='password' placeholder='비밀번호를 한번 더 입력해주세요' />
          </InputWrapper>
          <Button type='submit'>가입하기</Button>
        </SignupForm>
      </Container>
    </>
  );
}
