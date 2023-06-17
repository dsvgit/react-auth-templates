import { User } from "firebase/auth";
import { UserBase, AuthClientBase } from "@/auth-base";
import { mockAuthClient } from "@/pages/authClients/mockAuthClient";
import { firebaseClient } from "@/pages/authClients/firebaseClient";

declare module "@/auth-base/types" {
  interface CustomTypes {
    User: UserBase & { email: string };
    AuthClient: AuthClientBase & typeof mockAuthClient;
    // User: UserBase & User;
    // AuthClient: AuthClientBase & typeof firebaseClient;
  }
}
