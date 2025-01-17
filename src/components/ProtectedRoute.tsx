import { getUserRole } from '../utils/getUserRole';
import NoAccess from '../pages/error/NoAccess';

const ProtectedRoute = ({ allowedRoles, children }: { allowedRoles: string[]; children: React.ReactNode }) => {
  const userRole = getUserRole();

  if (!allowedRoles.includes(userRole)) {
    return <NoAccess />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
