import { createContext } from "react";
import type {
  AuthState,
  LoginCredentials,
  RegisterData,
} from "@/entities/auth/types";

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
