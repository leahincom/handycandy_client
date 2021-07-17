import { useAtom } from 'jotai';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from 'react-query';
import styled from 'styled-components';
import { deleteCandy } from '../../../pages/api/useDeletes/deleteCandy';
import { DeleteModalAtom } from '../../../states';
import Button from '../../common/Button';

interface BackgroundProps {
  isOpen: boolean;
}

const Background = styled.div<BackgroundProps>`
  display: ${({ isOpen }) => (isOpen ? 'box' : 'none')};
  position: fixed;
  top: 0%;
  left: 0%;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div<BackgroundProps>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  flex-direction: column;
  align-items: center;
  transform: translate(-50%, -50%);
  z-index: 3;
  border-radius: 25px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: var(--white);
  padding: 52px 0px 50px 0px;
  width: 728px;
`;

const Candy = styled(Image)`
  border-radius: 100px;
`;

const Title = styled.h1`
  margin-top: 26px;
  text-align: center;
  line-height: 25px;
  font-family: 'NanumSquareRound', sans-serif;
  font-size: 25px;
  font-weight: 800;
  font-style: normal;
`;

const SubTitle = styled.h2`
  margin-top: 9px;
  text-align: center;
  line-height: 26px;
  color: var(--black);
  font-family: Roboto;
  font-size: 22px;
  font-weight: 500;
  font-style: normal;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 35px;
`;

const Empty = styled.div`
  width: 20px;
`;

export interface DeleteModalProps {
  candy: string;
}

export default function DeleteModal({ candy }: DeleteModalProps) {
  const [isOpen, setIsOpen] = useAtom(DeleteModalAtom);
  const router = useRouter();
  const candyId = router.query.id as string;
  const handleClickClose = () => {
    setIsOpen(false);
  };
  const queryClient = useQueryClient();
  const deleteCandyMutation = useMutation(() => deleteCandy(candyId), {
    onSuccess: () => {
      queryClient.invalidateQueries('complete');
    },
  });
  const handleClickDelete = () => {
    deleteCandyMutation.mutate();
    setIsOpen(false);
    router.push('/complete');
  };

  return (
    <>
      <Background isOpen={isOpen} onClick={handleClickClose} />
      <Container isOpen={isOpen}>
        <Candy src={candy} width='100px' height='100px' />
        <Title>선택한 캔디 삭제</Title>
        <SubTitle>
          캔디를 영구 삭제한 후에는 <br />이 작업을 실행 취소할 수 없습니다!
        </SubTitle>
        <ButtonWrapper>
          <Button buttonColor='gray' size='sm' text='취소하기' onClick={handleClickClose} />
          <Empty />
          <Button buttonColor='peach' size='sm' text='삭제 완료' onClick={handleClickDelete} />
        </ButtonWrapper>
      </Container>
    </>
  );
}
