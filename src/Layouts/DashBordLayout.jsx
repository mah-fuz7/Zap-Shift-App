import { useState } from "react";
import { Outlet, NavLink } from "react-router";
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
  FiBell,
  FiChevronDown,
  FiX,
} from "react-icons/fi";

import Logo from "../Components/ui/Logo";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
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
        <div className={`flex items-center justify-between px-4 py-4 ${!sidebarOpen && "justify-center"}`}>
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
        <header className="h-16 bg-white border-b border-gray-200 flex items-center px-8">
          {/* Left */}
          <button
            onClick={toggleSidebar}
            className="text-xl text-gray-600 hover:text-gray-800 transition-colors md:hidden"
            title="Toggle sidebar"
          >
            <FiMenu />
          </button>

          {/* Right */}
          <div className="flex items-center gap-6 ml-auto">
            <button className="relative">
              <FiBell className="text-xl text-gray-600 hover:text-gray-800 transition-colors" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500"></span>
            </button>

            <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors">
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>

              <div className="leading-4">
                <h3 className="font-semibold text-sm">Zahid Hossain</h3>
                <p className="text-xs text-gray-500">Admin</p>
              </div>

              <FiChevronDown className="text-gray-500" />
            </div>
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