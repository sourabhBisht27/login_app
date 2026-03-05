import React from "react";
import { useAuth } from "../hooks/useAuth";

const WelcomePage = () => {
  const { logout, getUser } = useAuth();
  const user = getUser();

  const formatTime = (isoString) => {
    if (!isoString) return "";
    return new Date(isoString).toLocaleString();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-10 text-center">
        {/* AVATAR */}
        <div className="w-20 h-20 rounded-full bg-[#0f3460] flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
          {user?.username?.charAt(0).toUpperCase()}
        </div>

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-[#1a1a2e] mb-2">
          Welcome, {user?.username}!
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          You have successfully logged in.
        </p>

        {/* INFO */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8 text-left flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 font-medium">Role</span>
            <span className="bg-[#0f3460] text-white text-xs font-semibold px-3 py-1 rounded-full capitalize">
              {user?.role}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 font-medium">
              Logged in at
            </span>
            <span className="text-sm text-gray-700 font-medium">
              {formatTime(user?.loginTime)}
            </span>
          </div>
        </div>

        {/* LOGOUT BTN */}
        <button
          onClick={logout}
          className="px-8 py-3 rounded-lg border-2 border-red-500 text-red-500 font-semibold
            transition-all hover:bg-red-500 hover:text-white"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
