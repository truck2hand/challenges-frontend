import React, { useContext, useReducer } from 'react';

export interface Auth {
  accessToken?: string;
}

export const AuthContext = React.createContext({});

const reducer: React.Reducer<Auth, {}> = state => {
  state.accessToken = 'test';
  return state;
};

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, {});
  return <AuthContext.Provider value={[state, dispatch]}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
