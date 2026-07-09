import { Link, NavLink } from 'react-router';
import Logo from '../ui/Logo';
import { FiArrowUpRight } from 'react-icons/fi';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
  const {user}=useAuth()

   const navLinkClass = ({ isActive }) =>
        `relative text-sm font-medium tracking-wide transition-colors duration-200 pb-0.5
        after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300
        ${isActive
            ? "text-primary after:w-full"
            : "text-base-content/70 hover:text-base-content after:w-0 hover:after:w-full"
        }`;

    const navLinks = (
        <>
            <NavLink to="/" className={navLinkClass} end>Home</NavLink>
 <NavLink to={'/coverage'} className={navLinkClass}>Coverage</NavLink>
      <NavLink to={'/rider'} className={navLinkClass}>Be a Rider</NavLink>        
      <NavLink to={'/sendparcel'} className={navLinkClass}>Send A parcel</NavLink>        
      <NavLink to={'/aboutus'} className={navLinkClass}>About US</NavLink>     
         </>
    );
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
   
<Logo className="text-[#303030]" />
  </div>


  <div className="navbar-center gap-3 lg:flex">
        {navLinks}
  </div>
  <div className="navbar-end flex gap-3">

                    {user ? (
                        <div className="relative flex gap-3 items-center" >
                            <div
                                
                                className="w-9 h-9 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100 overflow-hidden transition-transform duration-200 hover:scale-105 focus:outline-none"
                                aria-label="Open profile"
                            >
                                <img
                                    src={user.photoURL}
                                    alt={user.name}
                                    className="w-full h-full object-cover"
                                />
                         
                            </div>
<div className='flex'>
  <NavLink to={'/rider'} className='btn btn-primary text-white'>Be a rider

</NavLink>
<span className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center -mr-2">
              <FiArrowUpRight className="text-lg" />
            </span> 
  </div>                       
                        </div>
                    ) : (<>
                       <Link to={'/signin'} className='text-gray-500 px-8 py-4 rounded-2xl border-2 border-gray-500 font-semibold hover:bg-primary'>Sign In</Link>

                        <Link to={'/signup'} className='  px-4 py-2.5 rounded-2xl  bg-primary  font-semibold hover:brightness-90 transition  flex items-center gap-3  '>Sign Up
<span className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center">
              <FiArrowUpRight className="text-lg" />
            </span>
</Link>

                      </>
                    )} 




  </div>
</div>
    );
};

export default Navbar;