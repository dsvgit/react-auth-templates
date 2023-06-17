import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/auth-base/provider/AuthContext";

export function RequireNoAuth({ children }: { children: JSX.Element }) {
  const auth = useAuth();
  const location = useLocation();

  if (auth.user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}
