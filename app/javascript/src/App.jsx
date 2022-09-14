import React from "react";

// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports

import { AuthProvider } from "contexts/auth";
import { UserProvider } from "contexts/user";

import Main from "./components/Main";

const App = props => (
  <AuthProvider>
    <UserProvider>
      <Main {...props} />
    </UserProvider>
  </AuthProvider>
);

export default App;
