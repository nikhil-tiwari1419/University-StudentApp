import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import { useTheme } from "../context/ThemeContext"; // ✅ ThemeContext se theme import

import graducationImg from "../assets/loadingDOTED.gif";
import ProfileImg from "../assets/undraw_young-man.png";
import img1 from "../assets/CollegesImages/rtmnu 1.jpg";
import img2 from "../assets/CollegesImages/rtmnu 2.jpg";
import img3 from "../assets/CollegesImages/rtmnu 3.jpg";
import img4 from "../assets/CollegesImages/rtmnu 4.jpg";
import img5 from "../assets/CollegesImages/rtmnu 5.jpg";
import img6 from "../assets/CollegesImages/rtmnu 6.jpg";
import img7 from "../assets/CollegesImages/rtmnu 7.jpg";
import { MdSunny } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { div } from "framer-motion/client";

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

  const { theme, toggleTheme } = useTheme(); // ✅ ThemeContext se theme state aa rahi hai
  const [AboutInfo, setAboutInfo] = useState(false);
  const [ContactInfo, setContactInfo] = useState(false);
  return (
    <div
      className={`overflow-y-auto h-full mx-auto max-w-md w-full min-h-screen px-4 py-6 space-y-6 pb-20 transition-all duration-500 
        ${theme === "dark"
          ? "dark bg-gray-900 text-white"
          : "bg-gradient-to-b from-gray-300 to-blue-300 text-black"
        }`}
    >
      {/* Header */}
      <header
        className={`w-full rounded-4xl flex items-center px-2 ${theme === "dark"
          ? "bg-gray-800 text-white"
          : "bg-blue-300 text-black"
          }`}
      >
        <Hamburger size={24} toggled={open} toggle={setOpen} />
        <h2 className="mx-3 font-bold">RTMNU Student App</h2>
        <img src={graducationImg} className="h-10 w-30 " alt="" />

        {open && (
          <div
            className={`fixed left-0 pt-3 p-3 top-4 rounded-r-2xl flex flex-col h-70 w-64 transform transition-transform duration-500 ease-in-out 
            ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}
            ${open ? "translate-x-0" : "-translate-x-full"}`}
          >
            <Hamburger size={24} toggled={open} toggle={setOpen} />

            {/* Day/Night Toggle */}
            <span className="hover:text-emerald-600 font-bold p-2">
              <button onClick={toggleTheme}>
                <MdSunny className="text-2xl mx-3 inline" />
                {theme === "light" ? "Dark Mode" : "Light Mode"}
              </button>
            </span>

            {/* Setting */}
            <span className="hover:text-emerald-600 font-bold cursor-pointer p-2 flex">
              <IoSettingsSharp className="text-2xl mx-3" />
              Setting
            </span>

            {/* About Developer */}
            <span className="hover:text-emerald-600 font-bold cursor-pointer p-2 flex"
              onClick={() => setAboutInfo(!AboutInfo)} //tap moible
              onMouseEnter={()=> setAboutInfo(true)} // hover desktop
              onMouseMove={()=> setAboutInfo(false)} //hovet khatam 
            >
              <IoIosContact className="text-3xl mx-2" />

              About Developer
            </span>
            {AboutInfo &&(
              <div className="absolute left-17 mt-2 w-48 bg-white text-sm text-gray-700 border rounded-lg shadow-lg p-2 z-10">
                <p className="font-semibold"> Nikhil Tiwari</p>
                <a href="https://github.com/nikhil-tiwari1419"
                   target="_blank"
                   rel="noopener noreferrer"
                    className="text-emerald-600 font-medium hover:underline block mt-2"
                    >🔗 Github profile</a>
              </div>
            )}

            {/* Contact */}
            <span className="hover:text-emerald-600 font-bold cursor-pointer p-2 flex"
            onClick={() => setContactInfo(!ContactInfo)} //tap moible
              onMouseEnter={()=> setContactInfo(true)} // hover desktop
              onMouseMove={()=> setContactInfo(false)} //hovet khatam
            >
              <BsFillTelephoneForwardFill className="text-2xl mx-3" />
              Contact
            </span>
             {ContactInfo &&(
              <div className="absolute left-17 mt-2 w-48 bg-white text-sm text-gray-700 border rounded-lg shadow-lg p-2 z-10">
                <p className="font-semibold"> Nikhil Tiwari</p>
                <p>Ph: 7057320974</p>
                <p>Add:- Nagpur maharastra</p>
              </div>
            )}
          </div>
        )}
      </header>

      {/* Profile Card */}
      <div
        className={`mx-auto w-full max-w-md items-center px-2 py-2 rounded-xl shadow-md p-4 
       ${theme === "dark"
          ? "bg-gray-800 text-white"
          : "bg-white text-black"
        }`}
      >
        <div className="flex items-center space-x-4">
          <img
            src={ProfileImg}
            alt="young-man-profile img"
            className="w-14 h-14 rounded-full object-cover"
          />
          <h2 className="text-2xl font-bold">Hello, Brime </h2>
        </div>
        <p className="text-sm pt-2 py-2 px-10 flex items-center">
          Find the Colleges you want!
        </p>

        {/* Search Box */}
        <div className="flex items-center space-x-3 w-full max-w-md mt-5">
          <div className="p-2 border rounded-2xl flex items-center cursor-pointer">
            Search
          </div>
          <div className="flex items-center flex-grow gap-1.5 border border-gray-400 rounded-md py-2 px-3">
            <FaSearch className="text-sm items-center" />
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none text-sm bg-transparent"
            />
          </div>
        </div>
      </div>

      {/* College Images Carousel */}
      <div
        className={`relative mx-auto w-full max-w-md rounded-xl h-60 ${theme === "dark"
          ? "bg-gray-700"
          : "bg-blue-100"
          }`}
      >
        <h4 className="text-xl text-center font-bold py-2 z-20 relative">
          RTMNU College and University Nagpur
        </h4>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`slide ${index}`}
            className={`absolute top-10 left-0 w-full h-full object-cover rounded-xl shadow-xl transition-opacity duration-1000 ease-in-out ${index === currentImage ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}
      </div>

      {/* Categories */}
      <div className="flex justify-between space-x-3 items-center mt-15 mb-2">
        <h3 className="font-bold">Courses</h3>
        <span className="text-sm">
          <button onClick={() => navigation("/App/View")}>View all</button> &gt;
        </span>
      </div>

      <div className="flex overflow-x-auto no-scrollbar">
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

      {/* Notifications */}
      <div
        className={`mx-auto w-full max-w-md items-center px-2 py-2 rounded-xl shadow-md p-4 
        ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}`}
      >
        <h3>Notification‼️</h3>
        <p>Check out the latest updates and announcements from RTMNU.</p>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
          <div
            key={n}
            className={`border rounded h-auto cursor-pointer p-2 m-3 
              ${theme === "dark" ? "border-gray-500 bg-gray-200 text-black" : "border-gray-400 bg-white text-black"}`}
          >
            {n}
          </div>
        ))}
      </div>
    </div>
  );
}

const CategoryCard = ({ title, bg }) => (
  <div
    className={`min-w-[120px] h-[100px] ${bg} mx-auto w-full max-w-md cursor-pointer flex items-center justify-center rounded-xl shadow-md px-5 text-center`}
  >
    <span className="text-xl">{title}</span>
  </div>
);

export default Home;
