/**
 * Mock-авторизація. Реальна автентифікація буде реалізована на backend.
 */
export interface AuthSession {
  email: string;
  username: string;
  roles: string[];
  token: string;
}

const STORAGE_KEY = "pos-admin-session";
const TOKEN_KEY = "pos-admin-token";

const MOCK_EMAIL = "abogak3@gmail.com";
const MOCK_PASSWORD = "R404t2323";

export function getSession(): AuthSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as AuthSession) : null;
  } catch {
    return null;
  }
}

export function signIn(email: string, password: string): AuthSession {
  if (email.trim().toLowerCase() !== MOCK_EMAIL || password !== MOCK_PASSWORD) {
    throw new Error("Невірна електронна пошта або пароль.");
  }
  const session: AuthSession = {
    email: MOCK_EMAIL,
    username: "Артем Богак",
    roles: ["ROLE_ADMIN"],
    token: "mock-token",
  };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  window.localStorage.setItem(TOKEN_KEY, session.token);
  window.dispatchEvent(new Event("pos-admin-session-change"));
  return session;
}

export function signOut(): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
  window.localStorage.removeItem(TOKEN_KEY);
  window.dispatchEvent(new Event("pos-admin-session-change"));
}

export function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}
