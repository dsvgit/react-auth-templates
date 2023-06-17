import {
  AuthChangeEvent,
  AuthClientBase,
  Session,
  User,
} from "@/auth-base/types";

export type SignUpWithPasswordCredentials = {
  email: string;
  password: string;
};

export type AuthResponse =
  | {
      data: {
        user: User | null;
        session: Session | null;
      };
      error: null;
    }
  | {
      data: {
        user: null;
        session: null;
      };
      error: Error;
    };

const delay = (ms: number = 0) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export class MockAuthClient implements AuthClientBase {
  session: Session | null = null;
  listeners: Set<(event: AuthChangeEvent, session: Session | null) => void> =
    new Set();
  persistKey = "auth_session";

  constructor() {
    this.onAuthStateChange((event) => this.persistListener(event));
  }

  persistListener(event: AuthChangeEvent) {
    switch (event) {
      case "INITIAL_SESSION":
        const json = localStorage.getItem(this.persistKey);
        this.session = json ? JSON.parse(json) : null;
        break;
      case "SIGNED_IN":
        localStorage.setItem(this.persistKey, JSON.stringify(this.session));
        break;
      case "SIGNED_OUT":
        localStorage.removeItem(this.persistKey);
        break;
      default:
    }
  }

  onAuthStateChange(
    callback: (event: AuthChangeEvent, session: Session | null) => void
  ): () => boolean {
    this.listeners.add(callback);
    callback("INITIAL_SESSION", this.session);
    const unsubscribe = () => this.listeners.delete(callback);
    return unsubscribe;
  }

  async signInWithPassword(
    credentials: SignUpWithPasswordCredentials
  ): Promise<AuthResponse> {
    await delay();

    const user = { email: credentials.email };
    this.session = { user };
    this.listeners.forEach((l) => l("SIGNED_IN", this.session));

    return { data: { user, session: this.session }, error: null };
  }

  async signUp(
    credentials: SignUpWithPasswordCredentials
  ): Promise<AuthResponse> {
    await delay();

    const user = { email: credentials.email };
    return { data: { user, session: null }, error: null };
  }

  async signOut(): Promise<{ error: Error | null }> {
    await delay();

    this.session = null;
    this.listeners.forEach((l) => l("SIGNED_OUT", this.session));

    return { error: null };
  }
}

export const mockAuthClient = new MockAuthClient();
