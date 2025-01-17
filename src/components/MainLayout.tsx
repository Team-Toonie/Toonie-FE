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
  /* overflow: hidden; */
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  /* overflow-x: auto; */
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: salmon;
  width: 100%;
  max-width: 1000px;
`;

export default MainLayout;
