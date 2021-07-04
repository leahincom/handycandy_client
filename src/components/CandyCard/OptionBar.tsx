import styled from 'styled-components';
import Image from 'next/image';
import { CardMore } from '../../../public/assets/icons';

const OptionBarWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  background-color: transparent;
  padding: 17px 16px;
  width: 100%;
`;

const Dday = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25.7385px;
  background-color: rgba(255, 191, 191, 0.9);
  width: 38px;
  height: 20px;
  text-align: center;
  line-height: 15px;
  letter-spacing: -0.022em;
  color: #2f2f2f;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  font-size: 15px;
  font-weight: 500;
  font-style: normal;
`;

interface OptionBarProps {
  plannedDate?: Date;
}

export default function OptionBar({ plannedDate }: OptionBarProps) {
  const now: Date = new Date();
  let remainingDate: number = -1;

  if (plannedDate) {
    // 남은 일자 다시 계산
    remainingDate = Math.floor((now.getTime() - plannedDate.getTime()) * 1.15741e-8);
  }

  const handleClick = () => {};

  return (
    <OptionBarWrapper>
      {remainingDate > -1 ? <Dday>D-{remainingDate}</Dday> : ''}
      <Image src={CardMore} alt='' width='23px' height='15px' onClick={handleClick} />
    </OptionBarWrapper>
  );
}
