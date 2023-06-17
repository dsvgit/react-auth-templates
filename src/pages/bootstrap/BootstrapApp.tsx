import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "@/auth-base/provider/AuthProvider";
import { BootstrapRouting } from "@/pages/bootstrap/BootstrapRouting";
import { mockAuthClient } from "@/pages/authClients/mockAuthClient";

export function BootstrapApp() {
  return (
    <AuthProvider
      authClient={mockAuthClient}
      renderLoader={() => <div>loading...</div>}
    >
      <BrowserRouter>
        <BootstrapRouting />
      </BrowserRouter>
    </AuthProvider>
  );
}
