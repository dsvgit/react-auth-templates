import { createContext, useContext } from "react";
import { AuthClient } from "@/auth-base/types";

interface AuthStaticContextValue {
  authClient: AuthClient;
}

export const AuthStaticContext = createContext<AuthStaticContextValue>(null!);

export function useAuthStatic() {
  return useContext(AuthStaticContext);
}
