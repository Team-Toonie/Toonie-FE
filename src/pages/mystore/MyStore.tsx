import { useRef } from 'react';
import styled from 'styled-components';
import StickyHeader from '../../components/common/StickyHeader';
import MyStoreItem from '../../components/features/mystore/MyStoreItem';
import useStickyHeader from '../../hooks/useStickyHeader';

const MyStore = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const defaultHeaderRef = useRef<HTMLDivElement>(null);
  const isStickyHeaderVisible = useStickyHeader(contentRef, defaultHeaderRef);

  return (
    <Container>
      <StickyHeader isVisible={isStickyHeaderVisible}></StickyHeader>
      <ContentContainer ref={contentRef}>
        <DefaultHeader ref={defaultHeaderRef}>
          <HeaderTitle>내 가게 관리</HeaderTitle>
          <RegisterButton>새 가게 등록</RegisterButton>
        </DefaultHeader>
        <MyStoreItem></MyStoreItem>
        <MyStoreItem></MyStoreItem>
        <MyStoreItem></MyStoreItem>
        <MyStoreItem></MyStoreItem>
        <MyStoreItem></MyStoreItem>
        <MyStoreItem></MyStoreItem>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  height: 100vh;
  position: relative;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 60px;
  gap: 20px;
  background-color: wihte;
  overflow-y: auto;
`;

const DefaultHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  padding: 20px 0px;
`;

const HeaderTitle = styled.div`
  font-size: 28px;
  font-weight: 700;
`;

const RegisterButton = styled.div`
  background-color: black;
  color: white;
  padding: 12px;
  border-radius: 8px;
  white-space: nowrap;
`;

export default MyStore;
