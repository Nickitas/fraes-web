import { useState, type ReactNode } from "react";
import { mockAuthApi } from "@/shared/api";
import type {
  AuthState,
  LoginCredentials,
  RegisterData,
} from "@/entities/auth/types";
import { AuthContext } from "./auth-context";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>(() =>
    mockAuthApi.getAuthState()
  );

  const login = async (credentials: LoginCredentials) => {
    const newState = await mockAuthApi.login(credentials);
    setState(newState);
  };

  const register = async (data: RegisterData) => {
    const newState = await mockAuthApi.register(data);
    setState(newState);
  };

  const logout = () => {
    const newState = mockAuthApi.logout();
    setState(newState);
  };

  return (
    <AuthContext.Provider value={{ ...state, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
