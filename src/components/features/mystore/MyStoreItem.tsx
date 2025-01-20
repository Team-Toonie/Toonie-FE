import styled from 'styled-components';
import NextIcon from '../../../assets/icons/next-circle.svg';

interface MyStoreItemProps {
  storeName: string;
  location: string;
}

const MyStoreItem: React.FC<MyStoreItemProps> = ({ storeName, location }) => {
  return (
    <Container>
      <InfoContainer>
        <Title>{storeName}</Title>
        <SubTitle>{location}</SubTitle>
      </InfoContainer>
      <Icon src={NextIcon} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.colors.neutral[300]};
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
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.neutral[700]};
`;

const Icon = styled.img`
  width: 36px;
  height: 36px;
`;

export default MyStoreItem;
