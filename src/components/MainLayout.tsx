import styled from 'styled-components';
import MainMenuBar from './MainMenuBar';

const MainLayout = () => {
  return (
    <Container>
      <MainMenuBar />
      <ContentContainer />
    </Container>
  );
};

export default MainLayout;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.neutral[200]};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.neutral[0]};
`;
