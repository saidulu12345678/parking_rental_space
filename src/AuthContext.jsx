import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [islogin, setIsLogin] = useState(localStorage.getItem("islogin") === "true");
  const [username, setUsername] = useState(localStorage.getItem("username") || "");

  useEffect(() => {
    localStorage.setItem("islogin", islogin);
  }, [islogin]);

  return (
    <AuthContext.Provider value={{ islogin, setIsLogin, username, setUsername }}>
      {children}
    </AuthContext.Provider>
  );
};
