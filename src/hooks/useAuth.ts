
import { useState, useEffect } from 'react';

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

const AUTH_TOKEN_KEY = 'dropship_auth_token';
const AUTH_USER_KEY = 'dropship_auth_user';

export const useAuth = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing auth on mount
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    const userData = localStorage.getItem(AUTH_USER_KEY);
    
    if (token && userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error('Error parsing user data:', error);
        logout();
      }
    }
    
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock validation
    if (email === 'demo@example.com' && password === 'password') {
      const mockUser: AuthUser = {
        id: '1',
        name: 'Demo User',
        email: email,
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent('Demo User')}&background=0078D4&color=fff`
      };
      
      const mockToken = 'mock_jwt_token_' + Date.now();
      
      localStorage.setItem(AUTH_TOKEN_KEY, mockToken);
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify(mockUser));
      setUser(mockUser);
      
      return { success: true };
    }
    
    return { success: false, error: 'Invalid credentials' };
  };

  const signup = async (name: string, email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser: AuthUser = {
      id: Date.now().toString(),
      name: name,
      email: email,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0078D4&color=fff`
    };
    
    const mockToken = 'mock_jwt_token_' + Date.now();
    
    localStorage.setItem(AUTH_TOKEN_KEY, mockToken);
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(mockUser));
    setUser(mockUser);
    
    return { success: true };
  };

  const loginWithGoogle = async (): Promise<{ success: boolean; error?: string }> => {
    // Simulate Google OAuth
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const mockUser: AuthUser = {
      id: 'google_' + Date.now(),
      name: 'Google User',
      email: 'user@gmail.com',
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent('Google User')}&background=0078D4&color=fff`
    };
    
    const mockToken = 'mock_google_token_' + Date.now();
    
    localStorage.setItem(AUTH_TOKEN_KEY, mockToken);
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(mockUser));
    setUser(mockUser);
    
    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(AUTH_USER_KEY);
    setUser(null);
  };

  const isAuthenticated = !!user;

  return {
    user,
    isLoading,
    isAuthenticated,
    login,
    signup,
    loginWithGoogle,
    logout
  };
};
