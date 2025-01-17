import styled from 'styled-components';
import logo from '../assets/toonie-logo.svg';

const MainMenuBar = () => {
  return (
    <Container>
      <Logo src={logo} />
      <NavBar>
        <NavItem>만화카페지도</NavItem>
        <NavItem>만화책 탐색</NavItem>
        <NavItem>로그인/회원가입</NavItem>
      </NavBar>
    </Container>
  );
};

export default MainMenuBar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  padding: 20px;
  gap: 20px;
  height: 100vh;
`;

const Logo = styled.img`
  width: 140px;
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral[700]};
  background-color: pink;
  width: 240px;
  align-items: center;
  padding: 16px;
`;
