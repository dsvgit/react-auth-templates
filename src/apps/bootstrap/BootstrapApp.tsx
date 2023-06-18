import React from "react";
import { HashRouter } from "react-router-dom";
import { AuthProvider } from "@/auth-base/provider/AuthProvider";
import { BootstrapRouting } from "@/apps/bootstrap/BootstrapRouting";
import { mockAuthClient } from "@/common/authClients/mockAuthClient";

export function BootstrapApp() {
  return (
    <AuthProvider
      authClient={mockAuthClient}
      renderLoader={() => <div>loading...</div>}
    >
      <HashRouter>
        <BootstrapRouting />
      </HashRouter>
    </AuthProvider>
  );
}
