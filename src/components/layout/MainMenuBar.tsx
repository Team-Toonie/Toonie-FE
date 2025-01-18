import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/toonie-logo.svg';
import { getUserRole } from '../../utils/getUserRole';
import { USER_ROLE } from '../../constants/userRole';

import MapIconGrey from '../../assets/icons/map-grey.svg';
import MapIconBlue from '../../assets/icons/map-blue.svg';
import ComicsIconGrey from '../../assets/icons/comics-grey.svg';
import ComicsIconBlue from '../../assets/icons/comics-blue.svg';
import LoginIconGrey from '../../assets/icons/login-grey.svg';
import LoginIconBlue from '../../assets/icons/login-blue.svg';
import CartIconGrey from '../../assets/icons/cart-grey.svg';
import CartIconBlue from '../../assets/icons/cart-blue.svg';
import RentalIconGrey from '../../assets/icons/rental-grey.svg';
import RentalIconBlue from '../../assets/icons/rental-blue.svg';
import MyPageIconGrey from '../../assets/icons/mypage-grey.svg';
import MyPageIconBlue from '../../assets/icons/mypage-blue.svg';
import MyStoreIconGrey from '../../assets/icons/mystore-grey.svg';
import MyStoreIconBlue from '../../assets/icons/mystore-blue.svg';

const MainMenuBar = () => {
  const userRole = getUserRole();
  const location = useLocation();
  return (
    <Container>
      <Logo src={logo} />
      <NavContainer>
        <NavBar>
          {menuItems[userRole]?.map(item => {
            const isActive = location.pathname === item.path;
            const icon = isActive ? item.icons.blue : item.icons.grey;

            return (
              <NavItem to={item.path} isActive={isActive}>
                <Icon src={icon} />
                {item.name}
              </NavItem>
            );
          })}
        </NavBar>
      </NavContainer>
    </Container>
  );
};

const menuItems = {
  [USER_ROLE.VISITOR]: [
    { name: '만화카페지도', path: '/map', icons: { grey: MapIconGrey, blue: MapIconBlue } },
    { name: '만화책 탐색', path: '/comics', icons: { grey: ComicsIconGrey, blue: ComicsIconBlue } },
    { name: '로그인/회원가입', path: '/login', icons: { grey: LoginIconGrey, blue: LoginIconBlue } }
  ],
  [USER_ROLE.MEMBER]: [
    { name: '만화카페지도', path: '/map', icons: { grey: MapIconGrey, blue: MapIconBlue } },
    { name: '만화책 탐색', path: '/comics', icons: { grey: ComicsIconGrey, blue: ComicsIconBlue } },
    { name: '장바구니', path: '/cart', icons: { grey: CartIconGrey, blue: CartIconBlue } },
    { name: '예약/대여', path: '/rental', icons: { grey: RentalIconGrey, blue: RentalIconBlue } },
    { name: '마이페이지', path: '/mypage', icons: { grey: MyPageIconGrey, blue: MyPageIconBlue } }
  ],
  [USER_ROLE.OWNER]: [
    { name: '만화카페지도', path: '/map', icons: { grey: MapIconGrey, blue: MapIconBlue } },
    { name: '만화책 탐색', path: '/comics', icons: { grey: ComicsIconGrey, blue: ComicsIconBlue } },
    { name: '내 가게 관리', path: '/mystore', icons: { grey: MyStoreIconGrey, blue: MyStoreIconBlue } },
    { name: '마이페이지', path: '/mypage', icons: { grey: MyPageIconGrey, blue: MyPageIconBlue } }
  ]
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  padding: 20px;
  gap: 32px;
  height: 100vh;
  border-right: 1px solid ${({ theme }) => theme.colors.neutral[300]};
`;

const Logo = styled.img`
  width: 180px;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const NavItem = styled(Link)<{ isActive: boolean }>`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  font-weight: ${({ isActive }) => (isActive ? '600' : '500')};
  color: ${({ theme, isActive }) => (isActive ? theme.colors.blue[100] : theme.colors.neutral[700])};
  background-color: ${({ theme, isActive }) => (isActive ? theme.colors.blue[10] : theme.colors.neutral[100])};
  width: 240px;
  align-items: center;
  padding: 16px;
  gap: 12px;
  border-radius: 8px;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

export default MainMenuBar;
