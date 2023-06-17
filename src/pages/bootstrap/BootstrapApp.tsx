import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "@/auth-base/provider/AuthProvider";
import { BootstrapRouting } from "@/pages/bootstrap/BootstrapRouting";
import { mockAuthClient } from "@/pages/authClients/mockAuthClient";

function getBasename(baseUrl: string | undefined) {
  if (baseUrl) {
    return "/" + baseUrl.match(/([^\/]*)\/*$/)?.[1];
  }

  return undefined;
}

export function BootstrapApp() {
  return (
    <AuthProvider
      authClient={mockAuthClient}
      renderLoader={() => <div>loading...</div>}
    >
      <BrowserRouter basename={getBasename(import.meta.env.BASE_URL)}>
        <BootstrapRouting />
      </BrowserRouter>
    </AuthProvider>
  );
}
