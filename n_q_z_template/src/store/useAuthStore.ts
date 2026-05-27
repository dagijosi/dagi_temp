import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { AuthState, User } from '@/types/auth';

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,

      login: (user: User) => set({ 
        user, 
        isAuthenticated: true, 
        isLoading: false 
      }),

      logout: () => set({ 
        user: null, 
        isAuthenticated: false, 
        isLoading: false 
      }),

      updateUser: (updatedUser: Partial<User>) => set((state) => ({
        user: state.user ? { ...state.user, ...updatedUser } : null
      })),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
