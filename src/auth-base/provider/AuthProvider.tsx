import { ReactNode, useEffect, useState } from "react";
import { AuthClient, User } from "@/auth-base/types";
import { AuthStaticContext } from "@/auth-base/provider/AuthStaticContext";
import { AuthContext } from "@/auth-base/provider/AuthContext";

type AuthProviderProps = {
  children: ReactNode;
  authClient: AuthClient;
  renderLoader: () => JSX.Element;
};

export function AuthProvider(props: AuthProviderProps) {
  const { authClient, renderLoader, children } = props;

  const [initialized, setInitialized] = useState(false);
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    const unsubscribe = authClient.onAuthStateChange((event, session) => {
      switch (event) {
        case "INITIAL_SESSION":
          setUser(session?.user);
          setInitialized(true);
          break;
        case "SIGNED_IN":
          setUser(session?.user);
          break;
        case "SIGNED_OUT":
          setUser(undefined);
          break;
        default:
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (!initialized) {
    return renderLoader();
  }

  return (
    <AuthStaticContext.Provider value={{ authClient }}>
      <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    </AuthStaticContext.Provider>
  );
}
