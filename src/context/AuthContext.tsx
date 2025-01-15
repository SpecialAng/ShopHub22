import React, { createContext, useContext, useReducer } from 'react';
import { AuthState, User, LoginCredentials, RegisterData } from '../types/auth';

type AuthAction =
  | { type: 'LOGIN_SUCCESS'; payload: User }
  | { type: 'LOGOUT' }
  | { type: 'SET_LOADING'; payload: boolean };

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
};

const AuthContext = createContext<{
  state: AuthState;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
} | null>(null);

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Simulated authentication functions
  const login = async (credentials: LoginCredentials) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Demo admin account
      if (credentials.email === 'admin@example.com' && credentials.password === 'admin123') {
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: {
            id: '1',
            email: credentials.email,
            name: 'Admin',
            role: 'admin'
          }
        });
        return;
      }

      // Demo user account
      if (credentials.email === 'user@example.com' && credentials.password === 'user123') {
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: {
            id: '2',
            email: credentials.email,
            name: 'User',
            role: 'user'
          }
        });
        return;
      }

      throw new Error('Invalid credentials');
    } catch (error) {
      throw error;
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const register = async (data: RegisterData) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Simulate successful registration
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          id: Math.random().toString(),
          email: data.email,
          name: data.name,
          role: 'user'
        }
      });
    } catch (error) {
      throw error;
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ state, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};