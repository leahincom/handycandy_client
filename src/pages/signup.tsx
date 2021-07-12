import styled from 'styled-components';
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

const SignupForm = styled.div`
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

const Button = styled.button`
  margin-top: 42px;
  border-radius: 30px;
  background-color: var(--peach);
  width: 204px;
  height: 64px;
  line-height: 32px;
  font-family: var(--roboto);
  font-size: 27px;
  font-weight: 500;
`;

export default function Signup() {
  return (
    <>
      <Navbar />
      <Container>
        <Title>회원가입</Title>
        <Desc>핸디캔디와 함께 해주세요!</Desc>
        <SignupForm>
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
            <InputField type='text' placeholder='YYYY / MM / DD' />
          </InputWrapper>
          <InputWrapper>
            <p>비밀번호</p>
            <InputField type='password' placeholder='비밀번호를 입력해주세요' />
          </InputWrapper>
          <InputWrapper>
            <p>비밀번호 확인</p>
            <InputField type='password' placeholder='비밀번호를 한번 더 입력해주세요' />
          </InputWrapper>
          <Button>가입하기</Button>
        </SignupForm>
      </Container>
    </>
  );
}
