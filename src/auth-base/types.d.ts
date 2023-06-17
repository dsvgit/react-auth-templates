export type UserBase = {};
export declare type User = ExtendedType<"User", UserBase>;

export interface SessionBase {
  user: User;
}
export declare type Session = ExtendedType<"Session", SessionBase>;

export type AuthChangeEventBase =
  | "INITIAL_SESSION"
  | "PASSWORD_RECOVERY"
  | "SIGNED_IN"
  | "SIGNED_OUT"
  | "TOKEN_REFRESHED"
  | "USER_UPDATED";
export declare type AuthChangeEvent = ExtendedType<
  "AuthChangeEvent",
  AuthChangeEventBase
>;

export type AuthClientBase = {
  onAuthStateChange(
    callback: (event: AuthChangeEvent, session: Session | null) => void
  ): () => boolean;
};
export declare type AuthClient = ExtendedType<"AuthClient", AuthClientBase>;

declare type ExtendableTypes =
  | "User"
  | "Session"
  | "AuthChangeEvent"
  | "AuthClient";
export interface CustomTypes {
  [key: string]: unknown;
}
export declare type ExtendedType<
  K extends ExtendableTypes,
  B
> = unknown extends CustomTypes[K] ? B : CustomTypes[K];

export {};
