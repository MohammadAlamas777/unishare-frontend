import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { UserDto } from '../../types/api.types';

interface AuthState {
  token:           string | null;
  user:            UserDto | null;
  isAuthenticated: boolean;
}

const storedToken = localStorage.getItem('unishare_token');
const storedUser  = localStorage.getItem('unishare_user');

const initialState: AuthState = {
  token:           storedToken ?? null,
  user:            storedUser ? JSON.parse(storedUser) : null,
  isAuthenticated: !!storedToken,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials(state, action: PayloadAction<{ token: string; user: UserDto }>) {
      const { token, user } = action.payload;
      state.token           = token;
      state.user            = user;
      state.isAuthenticated = true;
      localStorage.setItem('unishare_token', token);
      localStorage.setItem('unishare_user', JSON.stringify(user));
    },
    logout(state) {
      state.token           = null;
      state.user            = null;
      state.isAuthenticated = false;
      localStorage.removeItem('unishare_token');
      localStorage.removeItem('unishare_user');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;