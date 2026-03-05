import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const LoginPage = () => {
  const { login, getSavedUsername, isLoading, error } = useAuth();
  const savedUsername = getSavedUsername();

  const [username, setUsername] = useState(savedUsername);
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(!!savedUsername);
  const [fieldErrors, setFieldErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!username.trim()) errors.username = "Username is required.";
    if (!password.trim()) errors.password = "Password is required.";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    setFieldErrors({});
    await login(username, password, rememberMe);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-10">
        {/* HeEADER */}
        <div className="text-center mb-8">
          {/* ICON */}
          <div className="w-20 h-20 rounded-full bg-[#0f3460] flex items-center justify-center mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-9 h-9 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3A5.25 5.25 0 0012 1.5zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-[#1a1a2e] mb-1">
            Welcome Back
          </h1>
          <p className="text-gray-500 text-sm">Sign in to your account</p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-5"
        >
          {/* BANNER */}
          {error && (
            <div
              className="bg-red-50 border border-red-200 text-red-600 rounded-lg px-4 py-3 text-sm"
              role="alert"
            >
              ⚠️ {error}
            </div>
          )}

          {/* Username */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="username"
              className="text-sm font-semibold text-gray-700"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              disabled={isLoading}
              className={`px-4 py-3 rounded-lg border text-gray-800 text-base outline-none transition-all
                focus:border-[#0f3460] focus:ring-2 focus:ring-[#0f3460]/10
                disabled:opacity-50 disabled:cursor-not-allowed
                ${fieldErrors.username ? "border-red-500" : "border-gray-300"}`}
            />
            {fieldErrors.username && (
              <span className="text-red-500 text-xs">
                {fieldErrors.username}
              </span>
            )}
          </div>

          {/* PSWD */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              disabled={isLoading}
              className={`px-4 py-3 rounded-lg border text-gray-800 text-base outline-none transition-all
                focus:border-[#0f3460] focus:ring-2 focus:ring-[#0f3460]/10
                disabled:opacity-50 disabled:cursor-not-allowed
                ${fieldErrors.password ? "border-red-500" : "border-gray-300"}`}
            />
            {fieldErrors.password && (
              <span className="text-red-500 text-xs">
                {fieldErrors.password}
              </span>
            )}
          </div>

          {/* REMEMBER ME */}
          <div className="flex items-center gap-2">
            <input
              id="rememberMe"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              disabled={isLoading}
              className="w-4 h-4 accent-[#0f3460] cursor-pointer"
            />
            <label
              htmlFor="rememberMe"
              className="text-sm text-gray-600 cursor-pointer"
            >
              Remember username
            </label>
          </div>

          {/* SUBMIT BTN */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-lg bg-linear-to-r from-[#0f3460] to-[#16213e]
              text-white font-semibold text-base transition-all
              hover:opacity-90 hover:-translate-y-0.5
              disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none
              flex items-center justify-center min-h-12"
          >
            {isLoading ? (
              <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        {/* HINT */}
        <p className="text-center text-xs text-gray-400 mt-6">
          Hint: use <strong className="text-gray-500">admin</strong> /{" "}
          <strong className="text-gray-500">admin</strong>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
