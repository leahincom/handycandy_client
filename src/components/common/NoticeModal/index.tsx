import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.div`
  display: flex;
  position: absolute;
  top: 106px;
  right: 17px;
  z-index: 1000;
  margin-top: 35px;
  margin-left: 28px;
  border-radius: 17px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.09);
  background: var(--white);
  padding: 35px 14px 28px 33px;
`;

const InnerContainer = styled.div`
  width: 448px;
  height: 677px;
  overflow: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--gray-1);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: var(--gray-5);
  }
`;

const NoticeTitle = styled.div`
  margin-bottom: 18px;
  line-height: 23px;
  color: var(--black);
  font-family: var(--roboto);
  font-size: 20px;
  font-weight: bold;
`;

const NoticeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 23px;
  margin-bottom: 7px;
  border-radius: 17px;
  background: var(--gray-1);
  padding-left: 20px;
  width: 392px;
  height: 90px;
`;
const NoticeContent = styled.span`
  margin-left: 19px;
  padding-right: 10px;
  width: 305px;

  & > p:nth-of-type(1) {
    display: flex;
    align-items: center;
    line-height: 130%;
    color: #5a5a5a;
    font-size: 18px;
  }

  & > p:nth-of-type(2) {
    margin-top: 4px;
    line-height: 16px;
    color: #c1c1c1;
    font-size: 14px;
  }
`;

export interface NotCompleted {
  content: string;
  date: string;
  candy: string;
}

export interface completed {
  content: string;
  date: string;
  candy: string;
}

export interface NoticeModalProps {
  notices: {
    notCompleted: NotCompleted[];
    completed: completed[];
  };
}
export default function NoticeModal({ notices }: NoticeModalProps) {
  return (
    <Container>
      <InnerContainer>
        <NoticeTitle>지난 알림</NoticeTitle>
        {notices.notCompleted?.map((notice, idx) => (
          <NoticeContainer key={idx}>
            <Image src={notice.candy} alt='' width='35px' height='35px' />
            <NoticeContent>
              <p>{notice.content}</p>
              <p>{notice.date}</p>
            </NoticeContent>
          </NoticeContainer>
        ))}
        <div style={{ height: '15px' }}></div>
        <NoticeTitle>완료 알림</NoticeTitle>
        {notices.completed?.map((notice, idx) => (
          <NoticeContainer key={idx}>
            <Image src={notice.candy} alt='' width='35px' height='35px' />
            <NoticeContent>
              <p>{notice.content}</p>
              <p>{notice.date}</p>
            </NoticeContent>
          </NoticeContainer>
        ))}
      </InnerContainer>
    </Container>
  );
}
