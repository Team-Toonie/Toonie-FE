import styled from 'styled-components';
import MyStoreItem from '../../components/features/mystore/MyStoreItem';

const MyStore = () => {
  return (
    <Container>
      <Header>내 가게 관리</Header>
      <ContentContainer>
        <MyStoreItem></MyStoreItem>
        <MyStoreItem></MyStoreItem>
        <MyStoreItem></MyStoreItem>
        <MyStoreItem></MyStoreItem>
        <MyStoreItem></MyStoreItem>
        <MyStoreItem></MyStoreItem>
        <MyStoreItem></MyStoreItem>
        <MyStoreItem></MyStoreItem>
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
  height: 100vh;
  position: relative;
  background-color: ${({ theme }) => theme.colors.neutral[0]};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 60px;
  gap: 20px;
  background-color: wihte;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  padding: 20px 0px;
`;

export default MyStore;
