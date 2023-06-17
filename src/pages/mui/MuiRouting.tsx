import React from "react";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "@/auth-base/guards/RequireAuth";
import { RequireNoAuth } from "@/auth-base/guards/RequireNoAuth";
import { SignupPage } from "@/pages/mui/auth/SignupPage";
import { LoginPage } from "@/pages/mui/auth/LoginPage";
import { MuiLayout } from "@/pages/mui/MuiLayout";

export function MuiRouting() {
  return (
    <Routes>
      <Route element={<MuiLayout />}>
        <Route
          path="/"
          element={
            <RequireAuth>
              <div>Main page</div>
            </RequireAuth>
          }
        />
        <Route
          path="/signup"
          element={
            <RequireNoAuth>
              <SignupPage />
            </RequireNoAuth>
          }
        />
        <Route
          path="/login"
          element={
            <RequireNoAuth>
              <LoginPage />
            </RequireNoAuth>
          }
        />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Route>
    </Routes>
  );
}
