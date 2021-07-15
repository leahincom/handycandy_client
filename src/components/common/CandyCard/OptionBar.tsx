import styled from 'styled-components';
import Image from 'next/image';
import { Dday } from '../../../../public/assets/icons';

const OptionBarWrapper = styled.div<OptionBarProps>`
  box-sizing: border-box;
  display: flex;
  position: absolute;
  top: 0;
  left: ${(props) => (props.d_day === 0 ? '-5px' : '16px')};
  align-items: center;
  justify-content: flex-start;
  z-index: 100;
  background-color: transparent;
  padding-top: 17px;
  width: 100%;
`;

const DdayBar = styled.div`
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
  d_day?: number;
}

export default function OptionBar({ d_day }: OptionBarProps) {
  return (
    <OptionBarWrapper d_day={d_day}>
      {d_day === null ? '' : d_day === 0 ? <Image src={Dday} alt='' /> : <DdayBar>D-{d_day}</DdayBar>}
    </OptionBarWrapper>
  );
}
