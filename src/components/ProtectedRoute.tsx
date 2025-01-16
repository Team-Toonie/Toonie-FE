import { USER_ROLE } from '../constants/userRole';
import NoAccess from '../pages/error/NoAccess';

const getUserRole = (): string => {
  return localStorage.getItem('userRole') || USER_ROLE.VISITOR;
}; // TODO: 나중에 제대로 바꿔주기

const ProtectedRoute = ({ allowedRoles, children }: { allowedRoles: string[]; children: React.ReactNode }) => {
  const userRole = getUserRole();

  if (!allowedRoles.includes(userRole)) {
    return <NoAccess />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
