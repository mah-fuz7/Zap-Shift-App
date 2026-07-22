import { useState, useRef, useEffect } from "react";
import { Outlet, NavLink, useNavigate } from "react-router";
import {
  FiHome,
  FiTruck,
  FiCheckCircle,
  FiBox,
  FiCreditCard,
  //   FiMapPin,
  FiSettings,
  FiLock,
  FiHelpCircle,
  FiLogOut,
  FiMenu,
  FiX,
} from "react-icons/fi";

import Logo from "../Components/ui/Logo";
import useAuth from "../hooks/useAuth";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
    };

    if (profileDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [profileDropdownOpen]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      setProfileDropdownOpen(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const getInitials = (name) => {
    if (!name) return "?";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* ================= Sidebar ================= */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ease-in-out`}
      >
        {/* Logo */}
        <div
          className={`flex items-center justify-between px-4 py-4 ${!sidebarOpen && "justify-center"}`}
        >
          {sidebarOpen && <Logo />}
          <button
            onClick={toggleSidebar}
            className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
            title={sidebarOpen ? "Close" : "Open"}
          >
            {sidebarOpen ? (
              <FiX className="text-xl text-gray-600" />
            ) : (
              <FiMenu className="text-xl text-gray-600" />
            )}
          </button>
        </div>

        {/* Menu */}
        <div className={sidebarOpen ? "px-6" : "px-2"}>
          {sidebarOpen && (
            <p className="text-xs uppercase text-gray-400 font-semibold mb-3">
              Menu
            </p>
          )}

          <nav className="space-y-2">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? "bg-lime-300 text-black font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                } ${!sidebarOpen && "justify-center"}`
              }
              title={!sidebarOpen ? "Dashboard" : ""}
            >
              <FiHome className="text-lg flex-shrink-0" />
              {sidebarOpen && <span>Dashboard</span>}
            </NavLink>

            <NavLink
              to="/dashboard/assigned-deliveries"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? "bg-lime-300 text-black font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                } ${!sidebarOpen && "justify-center"}`
              }
              title={!sidebarOpen ? "Assigned Deliveries" : ""}
            >
              <FiTruck className="text-lg flex-shrink-0" />
              {sidebarOpen && <span>Assigned Deliveries</span>}
            </NavLink>

            <NavLink
              to="/dashboard/completed-deliveries"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? "bg-lime-300 text-black font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                } ${!sidebarOpen && "justify-center"}`
              }
              title={!sidebarOpen ? "Completed Deliveries" : ""}
            >
              <FiCheckCircle className="text-lg flex-shrink-0" />
              {sidebarOpen && <span>Completed Deliveries</span>}
            </NavLink>

            <NavLink
              to="/dashboard/my-parcels"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? "bg-lime-300 text-black font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                } ${!sidebarOpen && "justify-center"}`
              }
              title={!sidebarOpen ? "My Parcels" : ""}
            >
              <FiBox className="text-lg flex-shrink-0" />
              {sidebarOpen && <span>My Parcels</span>}
            </NavLink>

            <NavLink
              to="/dashboard/payment-history"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? "bg-lime-300 text-black font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                } ${!sidebarOpen && "justify-center"}`
              }
              title={!sidebarOpen ? "Payment History" : ""}
            >
              <FiCreditCard className="text-lg flex-shrink-0" />
              {sidebarOpen && <span>Payment History</span>}
            </NavLink>

            {/* <NavLink
              to="/dashboard/coverage"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? "bg-lime-300 text-black font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                } ${!sidebarOpen && "justify-center"}`
              }
              title={!sidebarOpen ? "Coverage Area" : ""}
            >
              <FiMapPin className="text-lg flex-shrink-0" />
              {sidebarOpen && <span>Coverage Area</span>}
            </NavLink> */}
          </nav>

          {/* General */}
          {sidebarOpen && (
            <p className="text-xs uppercase text-gray-400 font-semibold mt-8 mb-3">
              General
            </p>
          )}

          <nav className="space-y-2 mt-6">
            <NavLink
              to="/dashboard/settings"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? "bg-lime-300 text-black font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                } ${!sidebarOpen && "justify-center"}`
              }
              title={!sidebarOpen ? "Settings" : ""}
            >
              <FiSettings className="text-lg flex-shrink-0" />
              {sidebarOpen && <span>Settings</span>}
            </NavLink>

            <NavLink
              to="/dashboard/change-password"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? "bg-lime-300 text-black font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                } ${!sidebarOpen && "justify-center"}`
              }
              title={!sidebarOpen ? "Change Password" : ""}
            >
              <FiLock className="text-lg flex-shrink-0" />
              {sidebarOpen && <span>Change Password</span>}
            </NavLink>

            <NavLink
              to="/dashboard/help"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? "bg-lime-300 text-black font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                } ${!sidebarOpen && "justify-center"}`
              }
              title={!sidebarOpen ? "Help" : ""}
            >
              <FiHelpCircle className="text-lg flex-shrink-0" />
              {sidebarOpen && <span>Help</span>}
            </NavLink>

            <button
              onClick={handleLogout}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-500 transition-all duration-200 ${
                !sidebarOpen && "justify-center"
              }`}
              title={!sidebarOpen ? "Logout" : ""}
            >
              <FiLogOut className="text-lg flex-shrink-0" />
              {sidebarOpen && <span>Logout</span>}
            </button>
          </nav>
        </div>
      </aside>

      {/* ================= Right Section ================= */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center gap-4 px-8">
          {/* Left */}
          <button
            onClick={toggleSidebar}
            className="text-xl text-gray-600 hover:text-gray-800 transition-colors md:hidden"
            title="Toggle sidebar"
          >
            <FiMenu />
          </button>

          <NavLink
            to="/"
            className="text-xl text-gray-600 hover:text-gray-800 transition-colors"
            title="Go to home"
          >
            <FiHome />
          </NavLink>

          {/* Right - Profile Dropdown */}
          <div className="relative ml-auto" ref={dropdownRef}>
            {user ? (
              <>
                <button
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                  title="Profile menu"
                >
                  <div className="w-10 h-10 rounded-full bg-lime-300 flex items-center justify-center text-sm font-semibold text-black border border-gray-200">
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt={user.displayName}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      getInitials(user.displayName)
                    )}
                  </div>
                </button>

                {/* Dropdown Menu */}
                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50 animate-in fade-in duration-200">
                    {/* User Info */}
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-semibold text-gray-900">
                        {user.displayName || "User"}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {user.email}
                      </p>
                    </div>

                    {/* Logout */}
                    <button
                      onClick={handleLogout}
                      className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors flex items-center gap-2 border-t border-gray-100"
                    >
                      <FiLogOut className="text-base" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                )}
              </>
            ) : (
              <NavLink
                to="/login"
                className="px-4 py-2 bg-lime-300 text-black font-medium rounded-lg hover:bg-lime-400 transition-colors text-sm"
              >
                Sign In
              </NavLink>
            )}
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-8 bg-gray-100">
          <div className="bg-white rounded-xl shadow-sm min-h-[calc(100vh-120px)] p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;