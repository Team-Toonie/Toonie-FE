import { useRef } from 'react';
import styled from 'styled-components';
import MainMenuBar from './MainMenuBar';
import StickyHeader from '../common/StickyHeader';
import DefaultHeader from '../common/DefaultHeader';
import useStickyHeader from '../../hooks/useStickyHeader';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const defaultHeaderRef = useRef<HTMLDivElement>(null);
  const isStickyHeaderVisible = useStickyHeader(contentRef, defaultHeaderRef);

  return (
    <Container>
      <MainMenuBar />
      <SectionContainer>
        <StickyHeader isVisible={isStickyHeaderVisible}></StickyHeader>
        <ContentContainer ref={contentRef}>
          <ContentWrapper>
            <DefaultHeader ref={defaultHeaderRef} title="내 가게 관리 ㅎㅎ" />
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
  position: relative;
  height: 100%;
  width: 100%;
  overflow-y: auto;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  background-color: wihte;
  overflow-y: auto;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

export default MainLayout;
