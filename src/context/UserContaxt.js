import React, { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UserContaxt = createContext();

export default function UserContaxtProvider({ children }) {
  const [userExist, setUserExist] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userName, setUserName] = useState();

  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.setItem("username", null);
    localStorage.setItem("email", null);
    localStorage.setItem("userId", null);
    localStorage.setItem("token", null);
    setUserExist(false);
    const notify = (msg) => toast.success(msg);
    notify("User logged out successfully");
    navigate("/"); // Redirect to the homepage after logout
  };

  return (
    <UserContaxt.Provider
      value={{
        userExist,
        setUserExist,
        email,
        setEmail,
        password,
        setPassword,
        userName,
        setUserName,
        handleLogOut,
      }}
    >
      {children}
    </UserContaxt.Provider>
  );
}

export const UserAuth = () => {
  return useContext(UserContaxt);
};
