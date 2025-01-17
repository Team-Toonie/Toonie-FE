import { USER_ROLE } from '../constants/userRole';

export const getUserRole = (): string => {
  return localStorage.getItem('userRole') || USER_ROLE.OWNER;
}; // TODO: 나중에 제대로 바꿔주기
