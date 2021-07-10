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
  letter-spacing: -0.022em;
  color: var(--black);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
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
    letter-spacing: -0.022em;
    color: #5a5a5a;
    font-size: 18px;
  }

  & > p:nth-of-type(2) {
    margin-top: 4px;
    line-height: 16px;
    letter-spacing: -0.022em;
    color: #c1c1c1;
    font-size: 14px;
  }
`;

const notices = {
  notCompleted: [
    {
      content: '한강에서 라이딩하기가 1일이 지났습니다. 캔디를 선물해보세요.',
      date: '7월 16일',
      candy: 'https://dummyimage.com/35x35/000/fff',
    },
    {
      content: '베라 하프겔런 사기가 4일이 지났습니다. 캔디를 선물해보세요.',
      date: '7월 16일',
      candy: 'https://dummyimage.com/35x35/000/fff',
    },
  ],
  completed: [
    {
      content: '산타마리아노벨라 엔젤디피렌체 향수를 선물했어요.',
      date: '7월 16일',
      candy: 'https://dummyimage.com/35x35/000/fff',
    },
    {
      content: '시원스쿨 프랑스어를 선물했어요.',
      date: '7월 16일',
      candy: 'https://dummyimage.com/35x35/000/fff',
    },
    {
      content: '시원스쿨 프랑스어를 선물했어요.',
      date: '7월 16일',
      candy: 'https://dummyimage.com/35x35/000/fff',
    },
    {
      content: '시원스쿨 프랑스어를 선물했어요.',
      date: '7월 16일',
      candy: 'https://dummyimage.com/35x35/000/fff',
    },
    {
      content: '시원스쿨 프랑스어를 선물했어요.',
      date: '7월 16일',
      candy: 'https://dummyimage.com/35x35/000/fff',
    },
    {
      content: '시원스쿨 프랑스어를 선물했어요.',
      date: '7월 16일',
      candy: 'https://dummyimage.com/35x35/000/fff',
    },
  ],
};

const NoticeModal = () => {
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
};

export default NoticeModal;
