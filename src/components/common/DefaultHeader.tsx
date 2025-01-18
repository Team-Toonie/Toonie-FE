import { forwardRef } from 'react';
import styled from 'styled-components';

interface DefaultHeaderProps {
  title: string;
}

const DefaultHeader = forwardRef<HTMLDivElement, DefaultHeaderProps>(({ title }, ref) => {
  return (
    <Container ref={ref}>
      <InnerContainer>
        <Title>{title}</Title>
      </InnerContainer>
    </Container>
  );
});

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  align-items: center;
  padding: 40px 60px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1000px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
`;

export default DefaultHeader;
