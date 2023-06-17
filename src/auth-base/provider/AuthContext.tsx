import { createContext, useContext } from "react";
import { User } from "@/auth-base/types";

interface AuthContextValue {
  user: User | undefined;
}

export const AuthContext = createContext<AuthContextValue>(null!);

export function useAuth() {
  return useContext(AuthContext);
}
