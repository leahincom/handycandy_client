import React from 'react';
import styled from 'styled-components';
import { useAtom } from 'jotai';
import { openCandyModal, openCategoryModal } from '../../../states';
import AddCandy from './AddCandy';
import AddCategory from './AddCategory';

const ModalControl = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Outside = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: var(--black);
  width: 100%;
  height: 100%;
  animation: fadein 0.2s linear forwards;

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.8;
    }
  }
`;

const Dialog = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  visibility: hidden;
  z-index: 100;
  border: 2px solid var(--gray-1);
  border-radius: 25px;
  background-color: var(--white);
  padding: 40px 0 20px 0;
  width: 726px;
  height: 400px;
  animation: 0.2s popup linear forwards;
  animation-delay: 0.15s;

  @keyframes popup {
    0% {
      opacity: 0;
    }
    100% {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export default function DialogManager() {
  const [candyModal, setCandyModal] = useAtom(openCandyModal);
  const [categoryModal, setCategoryModal] = useAtom(openCategoryModal);

  const open = candyModal || categoryModal;

  const handleCloseModal = () => {
    setCandyModal(false);
    setCategoryModal(false);
  };

  return (
    <>
      {open && (
        <ModalControl>
          <Outside onClick={handleCloseModal} />
          <Dialog>{candyModal ? <AddCandy /> : categoryModal && <AddCategory />}</Dialog>
        </ModalControl>
      )}
    </>
  );
}
