import React from "react";
import { ErrorBoundary } from "@/ErrorBoundary";
import { MuiApp } from "@/pages/mui/MuiApp";
import { BootstrapApp } from "@/pages/bootstrap/BootstrapApp";

function App() {
  return (
    <ErrorBoundary>
      <MuiApp />
    </ErrorBoundary>
  );
}

export default App;
