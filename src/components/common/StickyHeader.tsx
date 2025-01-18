import styled from 'styled-components';

interface StickyHeaderProps {
  isVisible: boolean;
}

const StickyHeader = ({ isVisible }: StickyHeaderProps) => {
  return (
    <Container $isVisible={isVisible}>
      <Title>내 가게 관리</Title>
    </Container>
  );
};

const Container = styled.div<{ $isVisible: boolean }>`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 20px 60px;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;
  transform: translateY(${({ $isVisible }) => ($isVisible ? '0' : '-100%')});
  transition: transform 0.3s ease-in-out;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[400]};
  box-shadow: ${({ $isVisible }) => ($isVisible ? '0 4px 16px 4px rgba(0, 0, 0, 0.05)' : 'none')};
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

export default StickyHeader;
