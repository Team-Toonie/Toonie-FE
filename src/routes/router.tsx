import { createBrowserRouter } from 'react-router-dom';
import { USER_ROLE } from '../constants/userRole';
import Login from '../pages/login/Login';
import Map from '../pages/map/Map';
import Comics from '../pages/comics/Comics';
import ProtectedRoute from '../components/ProtectedRoute';
import Cart from '../pages/cart/Cart';
import MyStore from '../pages/mystore/MyStore';
import Rental from '../pages/rental/Rental';
import Store from '../pages/store/Store';
import MyPage from '../pages/mypage/MyPage';
import MainLayout from '../components/MainLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'map',
        element: <Map />
      },
      {
        path: 'comics',
        element: <Comics />
      },
      {
        path: 'store',
        element: <Store />
      },
      {
        path: 'cart',
        element: (
          <ProtectedRoute allowedRoles={[USER_ROLE.MEMBER]}>
            <Cart />
          </ProtectedRoute>
        )
      },
      {
        path: 'rental',
        element: (
          <ProtectedRoute allowedRoles={[USER_ROLE.MEMBER]}>
            <Rental />
          </ProtectedRoute>
        )
      },
      {
        path: 'mystore',
        element: (
          <ProtectedRoute allowedRoles={[USER_ROLE.OWNER]}>
            <MyStore />
          </ProtectedRoute>
        )
      },
      {
        path: 'mypage',
        element: (
          <ProtectedRoute allowedRoles={[USER_ROLE.OWNER, USER_ROLE.MEMBER]}>
            <MyPage />
          </ProtectedRoute>
        )
      }
    ]
  }
]);

export default router;
