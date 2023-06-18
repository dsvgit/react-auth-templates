import React from "react";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { AuthProvider } from "@/auth-base/provider/AuthProvider";
import { MuiRouting } from "@/apps/mui/MuiRouting";
import { LinearProgress } from "@mui/material";
import { mockAuthClient } from "@/common/authClients/mockAuthClient";
import { getBasename } from "@/apps/_utils/getBasename";

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
        <BrowserRouter basename={getBasename(import.meta.env.BASE_URL, "mui")}>
          <MuiRouting />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
