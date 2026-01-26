import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(false); // false por defecto

  const logout = () => setToken(false);
  const login = () => setToken(true);

  return (
    <UserContext.Provider value={{ token, setToken, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
