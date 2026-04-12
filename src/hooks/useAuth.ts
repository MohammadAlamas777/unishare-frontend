import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store/store';
import { logout } from '../features/auth/authSlice';

export function useAuth() {
  const dispatch = useDispatch();
  const { user, token, isAuthenticated } = useSelector((s: RootState) => s.auth);

  return {
    user,
    token,
    isAuthenticated,
    role:      user?.role ?? null,
    isAdmin:   user?.role === 'ADMIN',
    isStudent: user?.role === 'STUDENT',
    logout:    () => dispatch(logout()),
  };
}