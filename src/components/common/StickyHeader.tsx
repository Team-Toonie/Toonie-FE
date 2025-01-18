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
  background-color: orange;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;
  transform: translateY(${({ $isVisible }) => ($isVisible ? '0' : '-100%')});
  transition: transform 0.3s ease-in-out;
`;

const Title = styled.div`
  font-size: 20px;
`;

export default StickyHeader;
