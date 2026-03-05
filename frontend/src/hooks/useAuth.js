import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/authApi";

const STORAGE_KEY = "rememberedUsername";

export const useAuth = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getSavedUsername = () => localStorage.getItem(STORAGE_KEY) || "";

  const login = async (username, password, rememberMe) => {
    setIsLoading(true);
    setError("");

    try {
      const data = await loginUser(username, password);

      if (data.success) {
        if (rememberMe) {
          localStorage.setItem(STORAGE_KEY, username);
        } else {
          localStorage.removeItem(STORAGE_KEY);
        }

        sessionStorage.setItem("user", JSON.stringify(data.user));
        navigate("/welcome");
      } else {
        setError(data.message || "Invalid credentials.");
      }
    } catch (err) {
      setError("Cannot connect to server. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    sessionStorage.removeItem("user");
    navigate("/login");
  };

  const getUser = () => {
    const user = sessionStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  };

  return { login, logout, getUser, getSavedUsername, isLoading, error };
};
