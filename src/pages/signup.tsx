import { useState } from 'react';
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
  justify-content: space-between;
  outline: none;
  border: 1px solid var(--gray-5);
  border-radius: 17px;
  background: var(--white);
  padding-right: 55px;
  padding-left: 113px;
  width: 516px;
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
  const [signupInfo, setSignupInfo] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    nickname: '',
    birthYear: '',
    birthMonth: '',
    birthDay: '',
  });

  const { email, password, nickname, birthYear, birthMonth, birthDay, passwordCheck } = signupInfo;

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupInfo({
      ...signupInfo,
      [name]: value,
    });
  };

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/signin');
  };
  return (
    <>
      <Navbar />
      <Container>
        <Title>????????????</Title>
        <Desc>??????????????? ?????? ????????????!</Desc>
        <SignupForm onSubmit={handleSignup}>
          <InputWrapper>
            <p>?????????</p>
            <InputField
              type='email'
              placeholder='example@email.com'
              name='email'
              value={email}
              onChange={handleInputChange}
            />
          </InputWrapper>
          <InputWrapper>
            <p>??????</p>
            <InputField
              type='text'
              name='nickname'
              placeholder='????????? ??????????????????'
              value={nickname}
              onChange={handleInputChange}
            />
          </InputWrapper>
          <InputWrapper>
            <p>????????????</p>
            <BirthWrapper>
              <BirthInput
                type='text'
                name='birthYear'
                maxLength={4}
                placeholder='YYYY'
                value={birthYear}
                onChange={handleInputChange}
              />
              <span>/</span>
              <BirthInput
                type='text'
                name='birthMonth'
                maxLength={2}
                placeholder='MM'
                value={birthMonth}
                onChange={handleInputChange}
              />
              <span>/</span>
              <BirthInput
                type='text'
                name='birthDay'
                maxLength={2}
                placeholder='DD'
                value={birthDay}
                onChange={handleInputChange}
              />
            </BirthWrapper>
          </InputWrapper>
          <InputWrapper>
            <p>????????????</p>
            <InputField
              name='password'
              type='password'
              placeholder='??????????????? ??????????????????'
              value={password}
              onChange={handleInputChange}
            />
          </InputWrapper>
          <InputWrapper>
            <p>???????????? ??????</p>
            <InputField
              name='passwordCheck'
              type='password'
              placeholder='??????????????? ?????? ??? ??????????????????'
              value={passwordCheck}
              onChange={handleInputChange}
            />
          </InputWrapper>
          <Button type='submit'>????????????</Button>
        </SignupForm>
      </Container>
    </>
  );
}
