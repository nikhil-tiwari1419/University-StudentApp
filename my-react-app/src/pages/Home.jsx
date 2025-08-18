import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from 'react';
import Hamburger from "hamburger-react";

import graducationImg from "../assets/loadingDOTED.gif"
import ProfileImg from "../assets/undraw_young-man.png"
import img1 from "../assets/CollegesImages/rtmnu 1.jpg"
import img2 from "../assets/CollegesImages/rtmnu 2.jpg"
import img3 from "../assets/CollegesImages/rtmnu 3.jpg"
import img4 from "../assets/CollegesImages/rtmnu 4.jpg"
import img5 from "../assets/CollegesImages/rtmnu 5.jpg"
import img6 from "../assets/CollegesImages/rtmnu 6.jpg"
import img7 from "../assets/CollegesImages/rtmnu 7.jpg"
import { div } from "framer-motion/client";
import { MdSunny } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { BsFillTelephoneForwardFill } from "react-icons/bs";



function Home() {
  const images = [img1, img2, img3, img4, img5, img6, img7];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);


  const [open, setOpen] = useState(false);
  
let navigation = useNavigate();

  return (
    <div className="overflow-y-auto h-full mx-auto max-w-md w-full bg-gradient-to-b from-gray-300 to-blue-300
 min-h-screen px-4 py-6 space-y-6 pb-20">

      {/* Header 1st child */}
      <header className="text-black  w-full rounded-4xl flex  items-center bg-blue-300 ">
        <Hamburger
          size={24}
          toggled={open}
          toggle={setOpen}
        />
        <h2 className="mx-3 text-indigo-700 font-bold">RTMNU Student App</h2>
        <img
          src={graducationImg}
          className="h-10 w-30 "
          alt="" />
        {open && (
          <>
            <div className={`  
            fixed left-0 pt-3 p-3 top-4 rounded-r-2xl flex flex-col bg-white/90 h-70 w-99   transform transition-transform duration-500 ease-in-out ${open ? "translate-x-0 " : "-translate-x-full "} `}
            >
              <Hamburger
                size={24}
                toggled={open}
                toggle={setOpen}
              />
              <span className="hover:text-emerald-600 font-bold cursor-pointer p-2 flex ">
                <MdSunny className="text-2xl mx-3"/>
                Daynight</span>
              <span className="hover:text-emerald-600 font-bold cursor-pointer p-2 flex">
                <IoSettingsSharp className="text-2xl mx-3 "/>
                Setting</span>
              <span className="hover:text-emerald-600 font-bold cursor-pointer p-2 flex ">
                <IoIosContact className="text-3xl mx-2" />
                About Developer </span>
              <span className="hover:text-emerald-600 font-bold cursor-pointer p-2 flex">
                <BsFillTelephoneForwardFill className="text-2xl  mx-3" />
                Contact</span>
            </div>
          </>
        )}
      </header>
      {/* Header 2nd child  */}
      <div className='bg-white mx-auto w-full max-w-md items-center px-2 py-2 rounded-xl shadow-md p-4 '>
        <div className='flex items-center space-x-4'>
          <img
            src={ProfileImg}
            alt="young-man-profile img"
            className='w-14 h-14 rounded-full object-cover'
          />
          <h2 className='text-black text-2xl font-bold'>Hello, Brime </h2>
        </div>

        <p className='text-sm text-gray-500 pt-2 py-2 px-10 flex items-center'> Find the Colleges you want ! </p>

        <div className="flex items-center space-x-3 w-full max-w-md mt-5">
          <div className="p-2 border rounded-2xl flex items-center cursor-pointer text-gray-500 ">
            Search
          </div>
          <div className="flex items-center flex-grow gap-1.5 border border-gray-400 rounded-md py-2 px-3 text-black">
            <FaSearch className="text-black text-sm items-center" />
            <input
              type="text"
              placeholder="Search"
              className="w-full text-black outline-none text-sm placeholder-gray-400"
            />
          </div>
        </div>
      </div>
      {/* college section */}
      <div className="relative bg-blue-100 mx-auto w-full max-w-md rounded-xl h-60 ">
        <h4 className='text-blue-800 text-xl  text-center font-bold py-2 z-20 relative'>RTMNU College and University Nagpur</h4>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`slide ${index}`}
            className={`absolute top-10 left-0  w-full h-full object-cover rounded-xl shadow-xl transition-opacity duration-1000 ease-in-out ${index === currentImage ? 'opacity-100 ' : 'opacity-0'
              }`}
          />
        ))}
      </div>
      {/* Categories */}
      <div className='flex justify-between  space-x-3 items-center mt-15 mb-2'>
        <h3 className='text-gray-700 font-sans font-bold'>Courses</h3>
        <span className='text-sm text-gray-800' > <button onClick={()=> navigation("/App/View")}> View all
          </button> &gt;</span>
      </div>

      <div className='flex overflow-x-auto  no-scrollbar '>
        <CategoryCard title="B.Tech / B.E" bg="bg-pink-300" />
        <CategoryCard title="BCA / MCA" bg="bg-green-300" />
        <CategoryCard title="MBA" bg="bg-blue-300" />
        <CategoryCard title="UG" bg="bg-yellow-300" />
        <CategoryCard title="PG" bg="bg-purple-300" />
        <CategoryCard title="PhD" bg="bg-blue-300" />
        <CategoryCard title="Diploma" bg="bg-purple-300" />
        <CategoryCard title="PG" bg="bg-gray-300" />
        <CategoryCard title="M.tech" bg="bg-pink-300" />
        <CategoryCard title="Nursing" bg="bg-blue-300" />
      </div>
      <div className="bg-white mx-auto w-full max-w-md items-center px-2 py-2 rounded-xl shadow-md p-4">
        <h3 className="text-black">Notification‼️</h3>
        <p className="text-gray-600">Check out the latest updates and announcements from RTMNU.</p>
        <div className="border rounded h-auto text-black cursor-pointer p-2 m-3">1</div>
        <div className="border rounded h-auto text-black cursor-pointer p-2 m-3">2</div>
        <div className="border rounded h-auto text-black cursor-pointer p-2 m-3">3</div>
        <div className="border rounded h-auto text-black cursor-pointer p-2 m-3">4</div>
        <div className="border rounded h-auto text-black cursor-pointer p-2 m-3">5</div>
        <div className="border rounded h-auto text-black cursor-pointer p-2 m-3">6</div>
        <div className="border rounded h-auto text-black cursor-pointer p-2 m-3">7</div>
        <div className="border rounded h-auto text-black cursor-pointer p-2 m-3">8</div>

      </div>
    </div>
  );
};

const CategoryCard = ({ title, bg }) => (
  <div
    className={`min-w-[120px] h-[100px] ${bg} mx-auto w-full max-w-md cursor-pointer flex items-center justify-center text-black rounded-xl shadow-md px-5 text-center`}
  >
    <span className="text-xl">{title}</span>
  </div>
);

export default Home
