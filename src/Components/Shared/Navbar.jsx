import { useState } from 'react';
import { Link, NavLink } from 'react-router'; // Changed to react-router-dom
import Logo from '../ui/Logo';
import { FiArrowUpRight, FiChevronDown, FiLogOut, FiMenu } from 'react-icons/fi';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
  const { user,logout } = useAuth();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `relative text-sm font-medium tracking-wide transition-colors duration-200 pb-0.5
    after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300
    ${isActive
      ? "text-primary after:w-full"
      : "text-base-content/70 hover:text-base-content after:w-0 hover:after:w-full"
    }`;

  const navLinks = (
    <>
      <NavLink to="/" className={navLinkClass} onClick={() => setIsMenuOpen(false)} end>Home</NavLink>
      <NavLink to="/coverage" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>Coverage</NavLink>
      <NavLink to="/pricing" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>Pricing</NavLink>
      <NavLink to="/trackorder" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>Track Order</NavLink>
      <NavLink to="/sendparcel" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>Send A parcel</NavLink>
      <NavLink to="/aboutus" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>About US</NavLink>
      <NavLink to="/rider" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>Be a rider</NavLink>

    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm relative z-50">
      {/* Navbar Start: Logo & Mobile/Tablet Dropdown */}
      <div className="navbar-start flex items-center gap-2">
        {/* Mobile & Tablet Dropdown Trigger (hidden on large screens) */}
        <div className="relative lg:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="btn btn-ghost btn-sm px-2 flex items-center gap-1"
            aria-label="Toggle navigation menu"
          >
            <FiMenu className="text-xl" />
            <FiChevronDown className={`transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {/* Dropdown Menu Box */}
          {isMenuOpen && (
            <div className="absolute left-0 mt-3 w-52 p-4 bg-base-100 rounded-xl shadow-xl border border-base-200 flex flex-col gap-4 z-50">
              {navLinks}
            </div>
          )}
        </div>

        <Logo className="text-[#303030]" />
      </div>

      {/* Navbar Center: Desktop Only (Visible on lg screens and up) */}
      <div className="navbar-center gap-3 hidden lg:flex">
        {navLinks}
      </div>

      {/* Navbar End: Auth actions & Profile Modal/Dropdown */}
      <div className="navbar-end flex gap-2 md:gap-3">
        {user ? (
          <div className="relative flex gap-2 md:gap-3 items-center">
            {/* Profile Pic Button with Arrow Down */}
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-1 focus:outline-none group"
              aria-label="Open profile menu"
            >
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100 overflow-hidden transition-transform duration-200 group-hover:scale-105">
                <img
                  src={user.photoURL}
                  alt={user.name || "User profile"}
                  className="w-full h-full object-cover"
                />
              </div>
              <FiChevronDown className={`text-gray-500 transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Profile Dropdown Modal */}
            {isProfileOpen && (
              <div className="absolute right-0 top-12 w-48 bg-base-100 rounded-xl shadow-xl p-4 border border-base-200 flex flex-col gap-3 z-50">
                <div className="text-xs font-semibold text-gray-400 truncate">{user?.displayName || "User"}</div>
                <hr className="border-base-200" />
                 {/* Logout */}
                                    <button
                                      onClick={()=>{logout()}}
                                      className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors flex items-center gap-2 border-t border-gray-100"
                                    >
                                      <FiLogOut className="text-base" />
                                      <span>Sign Out</span>
                                    </button>
              </div>
            )}

            <div className="flex items-center gap-2">
              {/* <NavLink to="/rider" className="btn btn-primary text-white btn-sm md:btn-md h-auto min-h-0 py-2">Be a rider</NavLink> */}
              <Link 
                  to="/dashboard" 
                  onClick={() => setIsProfileOpen(false)}
                  className="btn btn-primary  text-white   text-center "
                >
                   Dashboard
                </Link>
              <span className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-900 text-white flex items-center justify-center -ml-2 shrink-0">
                <FiArrowUpRight className="text-sm md:text-lg" />
              </span>
            </div>
          </div>
        ) : (
          <>
            <Link to="/login" className="text-gray-500 px-3 py-1.5 md:px-6 md:py-2.5 rounded-xl md:rounded-2xl border-2 border-gray-500 font-semibold hover:bg-primary hover:text-white transition text-xs md:text-base">
              Sign In
            </Link>

            <Link to="/signup" className="pl-3 pr-1 py-1 md:pl-4 md:py-1.5 rounded-xl md:rounded-2xl bg-primary font-semibold hover:brightness-90 transition flex items-center gap-1.5 md:gap-3 text-xs md:text-base">
              Sign Up
              <span className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0">
                <FiArrowUpRight className="text-xs md:text-sm" />
              </span>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;