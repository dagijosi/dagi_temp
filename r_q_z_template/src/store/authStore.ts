import { create } from "zustand";
import { clearTokens, setTokens } from "../utils/token";


export type AuthState = {
  isAuthenticated: boolean;
  setAuth: (token: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: !!localStorage.getItem("accessToken"),
  setAuth: (token: string) => {
    setTokens(token,""); // store in localStorage
    set({ isAuthenticated: true });
  },
  logout: () => {
    clearTokens();
    set({ isAuthenticated: false });
  },
}));
