import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { useAuth } from "@/auth-base/provider/AuthContext";
import { useAuthStatic } from "@/auth-base/provider/AuthStaticContext";

export function MuiLayout() {
  const { authClient } = useAuthStatic();
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <AppBar component="nav" position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Link component={NavLink} to="/" sx={{ color: "#fff" }}>
              MUI Demo
            </Link>
          </Typography>
          {!user && (
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Button sx={{ color: "#fff" }} component={NavLink} to="signup">
                Sign up
              </Button>
              <Button sx={{ color: "#fff" }} component={NavLink} to="login">
                Sign in
              </Button>
            </Box>
          )}
          {user && (
            <Button
              onClick={async (e) => {
                e.preventDefault();
                await authClient.signOut();
                navigate("/");
              }}
              component="a"
              sx={{ color: "#fff" }}
            >
              Log out
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  );
}
