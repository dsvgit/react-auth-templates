import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "@/auth-base/provider/AuthProvider";
import { BootstrapRouting } from "@/apps/bootstrap/BootstrapRouting";
import { mockAuthClient } from "@/pages/authClients/mockAuthClient";
import { getBasename } from "@/apps/_utils/getBasename";

export function BootstrapApp() {
  return (
    <AuthProvider
      authClient={mockAuthClient}
      renderLoader={() => <div>loading...</div>}
    >
      <BrowserRouter
        basename={getBasename(import.meta.env.BASE_URL, "bootstrap")}
      >
        <BootstrapRouting />
      </BrowserRouter>
    </AuthProvider>
  );
}
