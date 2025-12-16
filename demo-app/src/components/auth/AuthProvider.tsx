import { createContext, useState, useEffect, useCallback, type ReactNode } from "react";
import type { User, AuthContextType } from "../../types";

export const AuthContext = createContext<AuthContextType | null>(null);

const STORAGE_KEY = "dsfr-demo-auth";

// Simulated user for demo
const DEMO_USER: User = {
  id: "1",
  email: "jean.dupont@example.fr",
  name: "Jean Dupont",
  firstName: "Jean",
  lastName: "Dupont",
  role: "user"
};

// Simulated credentials
const VALID_CREDENTIALS = {
  email: "demo@example.fr",
  password: "demo123"
};

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setUser(parsed);
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
    setIsLoading(false);
  }, []);

  const login = useCallback(async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // Check credentials (demo only)
    if (email === VALID_CREDENTIALS.email && password === VALID_CREDENTIALS.password) {
      const loggedUser = { ...DEMO_USER, email };
      setUser(loggedUser);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(loggedUser));
      setIsLoading(false);
      return true;
    }

    setIsLoading(false);
    return false;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
