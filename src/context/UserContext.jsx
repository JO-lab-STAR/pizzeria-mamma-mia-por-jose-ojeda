import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(""); // JWT
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState(null);

  // Login
  const login = async (emailInput, passwordInput) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailInput, password: passwordInput })
      });
      const data = await res.json();
      if (res.ok && data.token) {
        setToken(data.token);
        setEmail(data.email);
        return { success: true };
      } else {
        return { success: false, error: data.error || "Login failed" };
      }
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  // Register
  const register = async (emailInput, passwordInput) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailInput, password: passwordInput })
      });
      const data = await res.json();
      if (res.ok && data.token) {
        setToken(data.token);
        setEmail(data.email);
        return { success: true };
      } else {
        return { success: false, error: data.error || "Register failed" };
      }
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  // Logout
  const logout = () => {
    setToken("");
    setEmail("");
    setProfile(null);
  };

  // Get Profile
  const getProfile = async () => {
    if (!token) return null;
    try {
      const res = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      });
      const data = await res.json();
      if (res.ok) {
        setProfile(data);
        return data;
      } else {
        return null;
      }
    } catch (err) {
      return null;
    }
  };

  return (
    <UserContext.Provider value={{ token, email, profile, login, register, logout, getProfile }}>
      {children}
    </UserContext.Provider>
  );
};
