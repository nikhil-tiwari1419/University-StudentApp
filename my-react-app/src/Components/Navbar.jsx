import React from 'react'
import { NavLink } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5";
import { MdMenuBook } from "react-icons/md";
import { div } from 'framer-motion/client';

function Navbar() {
  return (
    <div className='fixed bottom-0 py-3  bg-gray-200 w-full shadow px-1'>
    <nav className="mx-auto w-full px-7 flex font-sans max-w-md shadow justify-between items-center">
      <NavLink
        to="/App/Home"
        className={({ isActive }) =>
          `text-center flex flex-col no-underline hover:underline items-center ${isActive ? "text-blue-900" : "text-gray-700"
          }`
        }
      >
        <BiHome size={24} />
        <div className="text-sm">Home</div>
      </NavLink>

      <NavLink
        to="/App/Search"
        className={({ isActive }) =>
          `text-center flex flex-col no-underline hover:underline items-center ${isActive ? "text-blue-900" : "text-gray-700"
          }`
        }
      >
        <IoSearchSharp size={24} />
        <div className="text-sm">Search</div>
      </NavLink>

      <NavLink
        to="/App/Explore"
        className={({ isActive }) =>
          `text-center flex flex-col no-underline hover:underline items-center ${isActive ? "text-blue-900" : "text-gray-700"
          }`
        }
      >
        <MdMenuBook size={24} />
        <div className="text-sm">Explore</div>
      </NavLink>

      <NavLink
        to="/App/Profile"
        className={({ isActive }) =>
          `text-center flex flex-col no-underline hover:underline items-center ${isActive ? "text-blue-900" : "text-gray-700"
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
