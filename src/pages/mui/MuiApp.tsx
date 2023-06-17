import React from "react";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { AuthProvider } from "@/auth-base/provider/AuthProvider";
import { MuiRouting } from "@/pages/mui/MuiRouting";
import { LinearProgress } from "@mui/material";
import { mockAuthClient } from "@/pages/authClients/mockAuthClient";
import { firebaseClient } from "@/pages/authClients/firebaseClient";

console.log(import.meta.env.BASE_URL);
console.log(getBasename(import.meta.env.BASE_URL));

function getBasename(baseUrl: string | undefined) {
  if (baseUrl) {
    return "/" + baseUrl.match(/([^\/]*)\/*$/)?.[1];
  }

  return undefined;
}

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
        <BrowserRouter basename={getBasename(import.meta.env.BASE_URL)}>
          <MuiRouting />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
