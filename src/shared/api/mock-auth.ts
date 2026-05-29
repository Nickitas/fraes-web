import type { User } from "../../entities/user/types";
import type {
  AuthState,
  LoginCredentials,
  RegisterData,
} from "../../entities/auth/types";

// Load users from environment variables
const loadUsersFromEnv = (): User[] => {
  const users: User[] = [];

  // Support up to 10 users from env
  for (let i = 1; i <= 10; i++) {
    const email = import.meta.env[`USER${i}_EMAIL`];
    const password = import.meta.env[`USER${i}_PASSWORD`];
    const name = import.meta.env[`USER${i}_NAME`];

    if (email && password && name) {
      users.push({ id: String(i - 1), email, name });
    }
  }

  // Fallback users if env is not configured
  if (users.length === 0) {
    return [
      { id: "0", email: "user@example.com", name: "Test User" },
      { id: "1", email: "nickitadatsky@gmail.com", name: "Н. М. Кодацкий" },
    ];
  }

  return users;
};

const MOCK_USERS = loadUsersFromEnv();

const getUserPassword = (email: string): string | undefined => {
  for (let i = 1; i <= 10; i++) {
    const userEmail = import.meta.env[`USER${i}_EMAIL`];
    if (userEmail === email) {
      return import.meta.env[`USER${i}_PASSWORD`];
    }
  }
  // Fallback passwords
  const fallbackPasswords: Record<string, string> = {
    "user@example.com": "password",
    "nickitadatsky@gmail.com": "myPassword123",
  };
  return fallbackPasswords[email];
};

const STORAGE_KEY = "fraes_auth";

export const mockAuthApi = {
  getAuthState(): AuthState {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const user = JSON.parse(stored) as User;
      return { user, isAuthenticated: true };
    }
    return { user: null, isAuthenticated: false };
  },

  async login(credentials: LoginCredentials): Promise<AuthState> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const user = MOCK_USERS.find((u) => u.email === credentials.email);
    const expectedPassword = getUserPassword(credentials.email);

    if (
      !user ||
      !expectedPassword ||
      credentials.password !== expectedPassword
    ) {
      throw new Error("Invalid email or password");
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    return { user, isAuthenticated: true };
  },

  async register(data: RegisterData): Promise<AuthState> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const existingUser = MOCK_USERS.find((u) => u.email === data.email);
    if (existingUser) {
      throw new Error("User already exists");
    }

    const newUser: User = {
      id: String(MOCK_USERS.length + 1),
      email: data.email,
      name: data.name,
    };

    MOCK_USERS.push(newUser);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
    return { user: newUser, isAuthenticated: true };
  },

  logout(): AuthState {
    localStorage.removeItem(STORAGE_KEY);
    return { user: null, isAuthenticated: false };
  },
};

// Account API
export const mockAccountApi = {
  async getCurrentUser(): Promise<User> {
    await new Promise((resolve) => setTimeout(resolve, 200));

    const authState = mockAuthApi.getAuthState();
    if (!authState.user) {
      throw new Error("Not authenticated");
    }

    return authState.user;
  },

  async updateProfile(data: Partial<User>): Promise<User> {
    await new Promise((resolve) => setTimeout(resolve, 300));

    const authState = mockAuthApi.getAuthState();
    if (!authState.user) {
      throw new Error("Not authenticated");
    }

    const updatedUser: User = {
      ...authState.user,
      ...data,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedUser));

    // Update in users list too
    const userIndex = MOCK_USERS.findIndex((u) => u.id === updatedUser.id);
    if (userIndex !== -1) {
      MOCK_USERS[userIndex] = updatedUser;
    }

    return updatedUser;
  },
};
