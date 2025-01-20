import styled from 'styled-components';
import MyStoreItem from '../../components/features/mystore/MyStoreItem';

interface Store {
  id: string;
  storeName: string;
  location: string;
}

const MyStore = () => {
  const myStoreData: Store[] = [
    {
      id: '1',
      storeName: '벌툰 성신여대점',
      location: '서울특별시 성북구 돈암동'
    },
    {
      id: '2',
      storeName: '재밌는 만화방',
      location: '서울특별시 성북구 길음동'
    },
    {
      id: '3',
      storeName: '재미없는 만화방',
      location: '서울특별시 성북구 길음동'
    },
    {
      id: '4',
      storeName: '성신만화',
      location: '서울특별시 성북구 돈암동'
    },
    {
      id: '5',
      storeName: '다인만화',
      location: '서울특별시 성북구 돈암동'
    }
  ];

  return (
    <Container>
      <HeaderContainer>
        <HeaderTitle>내 가게 관리</HeaderTitle>
        <RegisterButton>새 가게 등록</RegisterButton>
      </HeaderContainer>
      <ContentContainer>
        {myStoreData.map(myStore => (
          <MyStoreItem key={myStore.id} storeName={myStore.storeName} location={myStore.location} />
        ))}
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 40px;
  gap: 60px;
  background-color: ${({ theme }) => theme.colors.neutral[0]};
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  padding: 20px 0px;
`;

const HeaderTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const RegisterButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: black;
  color: white;
  font-size: 18px;
  font-weight: 400;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: wihte;
`;

export default MyStore;
