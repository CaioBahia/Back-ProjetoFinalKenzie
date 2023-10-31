import React from "react";
import { AuthProvider } from "./providers/AuthProvider";
import { RoutesMain } from "./routes";
import GlobalStyle from "./styles/globalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </>
  );
}

export default App;
