import { Link } from 'react-router';
import Logo from '../ui/Logo';
import { FiArrowUpRight } from 'react-icons/fi';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
<Logo className="text-[#303030]" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2 bg-base-100 w-40 z-1">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end flex gap-3">
<Link to={'/signin'} className='text-gray-500 px-8 py-4 rounded-2xl border-2 border-gray-500 font-semibold hover:bg-primary'>Sign In</Link>
<Link to={'/signup'} className='  px-4 py-2.5 rounded-2xl  bg-primary  font-semibold hover:brightness-90 transition  flex items-center gap-3  '>Sign Up
<span className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center">
              <FiArrowUpRight className="text-lg" />
            </span>
</Link>

  </div>
</div>
    );
};

export default Navbar;