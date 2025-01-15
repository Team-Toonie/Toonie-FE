import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/login/Login';
import Map from '../pages/map/Map';
import Comics from '../pages/comics/Comics';

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
  }
]);

export default router;
