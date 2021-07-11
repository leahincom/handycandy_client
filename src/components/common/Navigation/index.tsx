import styled from 'styled-components';

const Container = styled.div``;

const Title = styled.h1``;

const Decs = styled.p``;

const Thumbnail = styled.img``;

export interface TestCardProps {
  title: string;
  decs?: string;
  image?: string;
}

export default function TestCard({ title, decs, image }: TestCardProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Decs>{decs}</Decs>
      <Thumbnail src={image} />
    </Container>
  );
}
