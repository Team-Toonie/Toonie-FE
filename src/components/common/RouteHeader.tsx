import styled from 'styled-components';

interface RouteHeaderProps {
  hasShadow: boolean;
}

const RouteHeader = ({ hasShadow }: RouteHeaderProps) => {
  return (
    <Container $hasShadow={hasShadow}>
      <InnerContainer>
        <Title>라우트헤더</Title>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div<{ $hasShadow: boolean }>`
  display: flex;
  top: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  transition: transform 0.3s ease-in-out;
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[400]};
  box-shadow: ${({ $hasShadow }) => ($hasShadow ? '0 4px 16px rgba(0, 0, 0, 0.05)' : 'none')};
`;

const InnerContainer = styled.div`
  display: flex;
  padding: 12px 60px;
  width: 100%;
  max-width: 1400px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export default RouteHeader;
