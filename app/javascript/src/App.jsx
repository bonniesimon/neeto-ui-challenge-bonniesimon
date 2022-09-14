import React from "react";

import dayjs from "libs/day"; // eslint-disable-line

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
