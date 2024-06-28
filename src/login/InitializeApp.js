import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/UserContaxt"; // Ensure the path and name are correct

const InitializeApp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setUserExist, userExist } = UserAuth();

  const restrictedPaths = [
    "/admin",
    "/admin/manage-products",
    "/admin/post-products",
  ];

  useEffect(() => {
    const checkAuthentication = () => {
      let token = localStorage.getItem("token");      
      if (!token || token === "null") {
        setUserExist(false);
        // navigate("/login");
      } else {
        setUserExist(true);
      }
    };

    checkAuthentication();
  }, [location, navigate, setUserExist, userExist]);

  return null;
};

export default InitializeApp;
