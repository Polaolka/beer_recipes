import { create } from 'zustand';
import { registerUser, logInUser, logOutUser } from './authApi';
import { loadState, saveState } from './localStorage';

const useAuthStore = create(set => ({
  currentUser: null,
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  error: null,
  register: async newUserData => {
    try {
      const user = await registerUser(newUserData);
      set({ currentUser: user, userId: user.id, isAuth: true, });
    } catch (error) {
      console.error('Error register user:', error);
    }
  },
  logIn: async userData => {
    try {
      const user = await logInUser(userData);
      set({ currentUser: user });
    } catch (error) {
      console.error('Error logIn user:', error);
    }
  },
  logOut: async userData => {
    set({ currentUser: null });
  },
}));

export default useAuthStore;
