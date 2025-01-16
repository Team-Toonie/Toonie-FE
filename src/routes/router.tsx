import { createBrowserRouter } from 'react-router-dom';
import { USER_ROLE } from '../constants/userRole';
import Login from '../pages/login/Login';
import Map from '../pages/map/Map';
import Comics from '../pages/comics/Comics';
import ProtectedRoute from '../components/ProtectedRoute';
import Cart from '../pages/cart/Cart';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/map',
    element: <Map />
  },
  {
    path: '/comics',
    element: <Comics />
  },
  {
    path: '/cart',
    element: (
      <ProtectedRoute allowedRoles={[USER_ROLE.MEMBER]}>
        <Cart />
      </ProtectedRoute>
    )
  }
]);

export default router;
