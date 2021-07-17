import React, { useState } from 'react';
import styled from 'styled-components';
import { useAtom } from 'jotai';
import { useMutation, useQueryClient } from 'react-query';
import { PutBodyProps, putCandyDate } from '../../../../pages/api/usePuts/putCandyDate';
import { openCandyModal } from '../../../../states';
import Button from '../../Button';
import AddCandyDate from './AddCandyDate';
import { CandyAddedProps } from './CandyAdded';

const Title = styled.h1`
  line-height: 23px;
  letter-spacing: -0.022em;
  color: var(--black);
  font-family: var(--nanum);
  font-size: 20px;
  font-weight: 800;
  font-style: normal;
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 50px;
  letter-spacing: -0.022em;
  font-family: var(--roboto);
  font-size: 28px;
  font-weight: normal;
  font-style: normal;
`;

const TextBox = styled.textarea`
  box-sizing: border-box;
  opacity: 0.5;
  border: 1px solid var(--gray-1);
  border-radius: 10px;
  background: var(--gray-2);
  padding: 23px 27px;
  width: 599px;
  height: 169px;
  line-height: 150%;
  letter-spacing: -0.022em;
  color: var(--black);
  font-family: var(--roboto);
  font-size: 18px;
  font-weight: normal;
  font-style: normal;

  &::placeholder {
    color: var(--gray-5);
  }

  &:focus {
    outline: none;
  }
`;

const CountChar = styled.p`
  display: flex;
  justify-content: flex-end;
  margin: 5px;
  width: 100%;
  line-height: 21px;
  letter-spacing: -0.022em;
  color: var(--gray-5);
  font-family: var(--roboto);
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
`;

const ButtonBar = styled.div`
  display: flex;
  align-items: center;
`;

interface AddCandyProps {
  year: number;
  month: number;
  date: number;
}

export interface AddCandyMessageProps extends CandyAddedProps {
  body: AddCandyProps;
}

export default function AddCandyMessage({ candyId, category, selectedCategory, candy, body }: AddCandyMessageProps) {
  const [script, setScript] = useState('');
  const [goBefore, setGoBefore] = useState(false);
  const [openModal, setOpenModal] = useAtom(openCandyModal);
  const queryClient = useQueryClient();
  const mutation = useMutation((data: PutBodyProps) => putCandyDate(data), {
    onSuccess: () => {
      queryClient.invalidateQueries('waiting');
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setScript(event.target.value);
  };

  const handleFormerClick = () => {
    setGoBefore(true);
  };
  const handleEndClick = () => {
    mutation.mutate({ candy_id: candyId, body: { ...body, message: script } });
    alert('캔디 추가가 완료되었습니다.');
    setOpenModal(false);
  };

  return (
    <>
      {!goBefore ? (
        <>
          <Title>미래의 캔디데이에 남길 메시지</Title>
          <Desc>
            <TextBox placeholder='캔디를 받을 나에게 전할 메시지를 남겨주세요' onChange={handleChange} />
            <CountChar>{script.length}/100자</CountChar>
          </Desc>
          <ButtonBar>
            <Button text='뒤로가기' size='sm' buttonColor='gray' color='black' onClick={handleFormerClick} />
            <div style={{ margin: '9px' }} />
            <Button text='끝내기' size='sm' buttonColor='peach' color='black' onClick={handleEndClick} />
          </ButtonBar>
        </>
      ) : (
        <AddCandyDate candyId={candyId} category={category} selectedCategory={selectedCategory} candy={candy} />
      )}
    </>
  );
}
