// User types
export interface User {
  id: string;
  email: string;
  name: string;
  firstName: string;
  lastName: string;
  role: "admin" | "user";
}

// Auth types
export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

// Service types
export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl?: string;
  steps?: ServiceStep[];
  faq?: FAQ[];
}

export interface ServiceStep {
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  consent: boolean;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface ProfileFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  notifications: boolean;
}

// Dashboard types
export interface StatItem {
  label: string;
  value: number | string;
  description?: string;
  trend?: "up" | "down" | "stable";
}

export interface ActivityItem {
  id: string;
  type: "info" | "success" | "warning" | "error";
  title: string;
  description: string;
  date: string;
}
