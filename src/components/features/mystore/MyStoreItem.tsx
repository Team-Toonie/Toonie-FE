import styled from 'styled-components';
import NextIcon from '../../../assets/icons/next-circle.svg';

const MyStoreItem = () => {
  return (
    <Container>
      <InfoContainer>
        <Title>내 가게 1</Title>
        <SubTitle>서울시 성북구</SubTitle>
      </InfoContainer>
      <Icon src={NextIcon} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.colors.neutral[500]};
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;
  align-items: center;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral[900]};
`;

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.neutral[700]};
`;

const Icon = styled.img`
  width: 36px;
  height: 36px;
`;

export default MyStoreItem;
