import { createContext } from 'preact';

export const UserContext = createContext({
  user: "anonymous",
  login: () => { },
  logout: () => { },
});

export const UserProvider = UserContext.Provider;
