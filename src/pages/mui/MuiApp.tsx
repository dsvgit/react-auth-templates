import React from "react";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { AuthProvider } from "@/auth-base/provider/AuthProvider";
import { MuiRouting } from "@/pages/mui/MuiRouting";
import { LinearProgress } from "@mui/material";
import { mockAuthClient } from "@/pages/authClients/mockAuthClient";
import { firebaseClient } from "@/pages/authClients/firebaseClient";

export function MuiApp() {
  return (
    <>
      <CssBaseline />
      <AuthProvider
        authClient={mockAuthClient}
        renderLoader={() => (
          <LinearProgress style={{ position: "fixed", left: 0, top: 0 }} />
        )}
      >
        <BrowserRouter>
          <MuiRouting />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
