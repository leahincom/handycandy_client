import React from 'react';
import styled from 'styled-components';
import { useAtom } from 'jotai';
import { openCandyModal, openCategoryModal } from '../../states';
import AddCandy from './AddCandy';
import AddCategory from './AddCategory';

const Outside = styled.div`
  opacity: 0.8;
  background: var(--black);
  width: 100%;
  height: 100%;
`;

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

export default function DialogManager() {
  const [candyModal, setCandyModal] = useAtom(openCandyModal);
  const [categoryModal, setCategoryModal] = useAtom(openCategoryModal);

  const handleCloseModal = () => {
    setCandyModal(false);
    setCategoryModal(false);
  };

  return (
    <>
      {(candyModal || categoryModal) && (
        <ModalControl>
          <Outside onClick={handleCloseModal} />
          {candyModal ? <AddCandy /> : categoryModal && <AddCategory />}
        </ModalControl>
      )}
    </>
  );
}
