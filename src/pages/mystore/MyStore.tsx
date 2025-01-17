import styled from 'styled-components';

const MyStore = () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>내 가게 관리</HeaderTitle>
        <RegisterButton>새 가게 등록</RegisterButton>
      </Header>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  background-color: skyblue;
  padding: 52px;
  gap: 52px;
  height: 100vh;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: green;
`;

const HeaderTitle = styled.div`
  font-size: 28px;
  font-weight: 700;
`;

const RegisterButton = styled.div`
  background-color: black;
  color: white;
  padding: 18px;
  border-radius: 8px;
  white-space: nowrap;
`;

export default MyStore;
