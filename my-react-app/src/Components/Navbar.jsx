
import { NavLink } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5";
import { MdMenuBook } from "react-icons/md";
import { useTheme } from '../context/ThemeContext';


function Navbar() {
    const { theme } = useTheme();
  
  return (
    <div className='fixed bottom-0  w-full shadow '>
    <nav className={`mx-auto w-full px-7 p-2 rounded flex font-sans max-w-md shadow justify-between items-center ${theme === "dark" ? "bg-gray-400 text-white" : "bg-gray-300"}`}>
      <NavLink
        to="/App/Home"
        className={({ isActive }) =>
          `text-center flex flex-col  items-center ${isActive ? "text-black  border-t-2 border-blue-500" : "text-gray-900"
          }`
        }
      >
        <BiHome size={24} />
        <div className="text-sm">Home</div>
      </NavLink>

      <NavLink
        to="/App/Search"
        className={({ isActive }) =>
          `text-center flex flex-col items-center ${isActive ? "text-black border-t-2 border-blue-500" : "text-gray-900"
          }`
        }
      >
        <IoSearchSharp size={24} />
        <div className="text-sm">Search</div>
      </NavLink>

      <NavLink
        to="/App/Explore"
        className={({ isActive }) =>
          `text-center flex flex-col items-center ${isActive ? "text-black border-t-2 border-blue-500" : "text-gray-900"
          }`
        }
      >
        <MdMenuBook size={24} />
        <div className="text-sm">Explore</div>
      </NavLink>

      <NavLink
        to="/App/Profile"
        className={({ isActive }) =>
          `text-center flex flex-col items-center ${isActive ? "text-black border-t-2 border-blue-500 " : "text-gray-900"
          }`
        }
      >
        <CgProfile size={24} />
        <div className="text-sm">Profile</div>
      </NavLink>
    </nav>
    </div>

  );
}

export default Navbar;

// 