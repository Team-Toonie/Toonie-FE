import styled from 'styled-components';
import MainMenuBar from './MainMenuBar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <Container>
      <MainMenuBar />
      <ContentContainer>
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.neutral[700]};
  width: 100vw;
  height: 100vh;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  justify-content: center;
  overflow-y: auto;
  height: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: salmon;
  width: 100%;
`;

export default MainLayout;
