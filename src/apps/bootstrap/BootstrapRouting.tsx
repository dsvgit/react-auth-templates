import React from "react";
import { NavLink, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { RequireAuth } from "@/auth-base/guards/RequireAuth";
import { RequireNoAuth } from "@/auth-base/guards/RequireNoAuth";
import { SignupPage } from "@/apps/bootstrap/auth/SignupPage";
import { LoginPage } from "@/apps/bootstrap/auth/LoginPage";
import { useAuth } from "@/auth-base/provider/AuthContext";
import { useAuthStatic } from "@/auth-base/provider/AuthStaticContext";

export function BootstrapRouting() {
  return (
    <Routes>
      <Route element={<Layout />}>
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

function Layout() {
  const { authClient } = useAuthStatic();
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <header className="mb-auto">
        <div>
          <h3 className="float-md-start mb-0">
            <NavLink className="nav-link" to="/">
              Bootstrap demo
            </NavLink>
          </h3>
          {!user && (
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <NavLink
                className="nav-link fw-bold py-1 px-0"
                aria-current="page"
                to="signup"
              >
                Sign up
              </NavLink>
              <NavLink className="nav-link fw-bold py-1 px-0" to="/login">
                Sign in
              </NavLink>
            </nav>
          )}
          {user && (
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <a
                className="nav-link fw-bold py-1 px-0 active"
                aria-current="page"
                href="src#"
                onClick={async (e) => {
                  e.preventDefault();
                  await authClient.signOut();
                  navigate("/");
                }}
              >
                Log out
              </a>
            </nav>
          )}
        </div>
      </header>

      <Outlet />

      <footer className="mt-auto text-white-50">
        <p></p>
      </footer>
    </>
  );
}
