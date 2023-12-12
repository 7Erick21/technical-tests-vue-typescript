import { defineStore } from 'pinia';
import { AUTH_TOKEN } from '../constants/localStorage';

interface IAuthState {
  token: string | null;
}

export const useAuthStore = defineStore('app', {
  state: (): IAuthState => ({
    token: localStorage.getItem(AUTH_TOKEN) || null,
  }),
  actions: {
    setToken(token: string | null) {
      this.token = token;
      localStorage.setItem(AUTH_TOKEN, token || '');
    },
  },
});