import { useRef } from 'react';
import styled from 'styled-components';
import MainMenuBar from './MainMenuBar';
import RouteHeader from '../common/RouteHeader';
import useScrollShadow from '../../hooks/useScrollShadow';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const hasScrolled = useScrollShadow(contentRef);

  return (
    <Container>
      <MainMenuBar />
      <SectionContainer>
        <RouteHeader hasShadow={hasScrolled} />
        <ContentContainer ref={contentRef}>
          <ContentWrapper>
            <Outlet />
          </ContentWrapper>
        </ContentContainer>
      </SectionContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  width: 100vw;
  height: 100vh;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  height: 100%;
  width: 100%;
  overflow-y: auto;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  background-color: white;
  overflow-y: auto;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  padding-bottom: 20px;
  margin: 0 auto;
`;

export default MainLayout;
