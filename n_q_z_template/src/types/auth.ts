export type UserRole = 'admin' | 'user' | 'guest';

export type Permission = 
  | 'product:create' 
  | 'product:update' 
  | 'product:delete' 
  | 'user:manage' 
  | 'admin:dashboard' 
  | 'settings:manage';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  permissions: Permission[];
  avatar?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (user: User) => void;
  logout: () => void;
  updateUser: (user: Partial<User>) => void;
}
