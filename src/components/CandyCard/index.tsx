import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 0;
  width: 254px;
  height: 383px;
`;

const Thumbnail = styled.img`
  border-top-left-radius: 17px;
  border-top-right-radius: 17px;
  width: 100%;
`;

const Metadata = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom-left-radius: 17px;
  border-bottom-right-radius: 17px;
  background-color: white;
  padding: 23px 0 23px 17px;
  width: 100%;
`;

const Category = styled.h2`
  margin-bottom: 4px;
  color: #4b4b4b;
  font-size: 16px;
`;

const Name = styled.h1`
  color: #252525;
  font-size: 24px;
`;

const Date = styled.h3`
  margin-top: 12px;
  color: #a0a0a0;
  font-size: 13px;
`;

export interface CandyCardProps {
  image: string;
  category: string;
  name: string;
  date?: Date;
}

export default function TestCard({ image, category, name, date }: CandyCardProps) {
  return (
    <Container>
      <Thumbnail>
        <Image src={image} alt='me' layout='fill' className='candy__image' />
      </Thumbnail>
      <Metadata>
        <div className='candy__metadata'>
          <Category>{category}</Category>
          <Name>{name}</Name>
          <Date>{date}</Date>
        </div>
      </Metadata>
    </Container>
  );
}
