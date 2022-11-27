import * as React from "react";

import { userReducer } from "./user-context.reducer";

import type { State, Dispatch, UserProviderProps } from "./user-context.types";

const UserContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

const initialState = { userCredits: 10000 };

function UserProvider({ children }: UserProviderProps) {
  const [state, dispatch] = React.useReducer(userReducer, initialState);

  const value = { state, dispatch };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

function useUser() {
  const context = React.useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
}

export { UserProvider, useUser };
