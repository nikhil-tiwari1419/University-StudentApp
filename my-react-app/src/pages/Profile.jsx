import React, { useEffect, useState } from 'react'
import ProfileImg from "../assets/undraw_young-man.png"
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from "react-router-dom";
import { MdPrivacyTip } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";


import { FaRegArrowAltCircleRight, FaWallet, FaBell, FaQuestionCircle, FaSignOutAlt, FaFileInvoice, FaLock } from "react-icons/fa";

function Profile() {

  const { theme } = useTheme();

  let navigate = useNavigate();
  const [notificationOn, setNotificationsOn] = useState(false);

  const handleGetMyinfo = () => {
    navigate("/App/Myinfo")
  }
  const handelGetPrivacy = () => {
    navigate("/App/privacyPolicy")
  }
  const handleGetWallet = () => {
    navigate("/App/Wallet")
  }
  const handleGetHelp = () => {
    navigate("/App/Help")
  }
  const hangelAboutus = () => {
    navigate("/App/AboutUs")
  }
  const handlepass = () => {
    navigate("/App/ChangePass")
  }

  return (
    <div className={`min-h-screen mx-auto max-w-md w-full pb-20  ${theme === "dark" ? "bg-gray-800 text-white" : "app-background text-black"}`}>
      <h2 className={`text-center text-xl font-semibold pt-5 pb-3 ${theme === 'dark' ? "text-white ":"text-black"}`}> My Profile</h2>


      <div className='text-black flex flex-col items-center mb-6'>
        <div className='relative'>
          <img
            src={ProfileImg}
            alt="young-man-profile img"
            className='w-24 h-24 rounded-full object-cover'
          />
          {/* pencil thi yaha per */}
        </div>
        <h3 className={`text-xl font-bold mt-2 ${theme === "dark" ? "text-white" : "text-black"}`}>Brime O'corno</h3>
        <p className="text-sm text-yellow-500">BrimeO'corno@mail.com</p>
      </div>
      <div className='space-y-6 pr-4 pl-4 border p-2 m-6 rounded-xl shadow-2xl'>
        <MenuItem icon={<FaFileInvoice />} label="My info" onClick={handleGetMyinfo}   theme={theme}/>
        <MenuItem icon={<FaLock />} label="Change password" onClick={handlepass}  theme={theme} />
        <MenuItem icon={<FaWallet />} label="Wallet" onClick={handleGetWallet}  theme={theme} />
        <MenuItem icon={<FaAddressCard />} label="About Us" onClick={hangelAboutus}   theme={theme}/>
        <MenuItem icon={<MdPrivacyTip />} label="Privacy Policy" onClick={handelGetPrivacy}  theme={theme} />
      </div>
      <div className='space-y-6 pr-4 pl-4 border p-2 m-6 rounded-xl shadow-2xl'>
        {/* notificatio toggle */}
        <MenuItem
          icon={<FaBell />}
          label="Notification"
          theme={theme}
          rightContent={
            <label className='relative inline-flex items-center cursor-pointer'>
              <input type="checkbox"
                checked={notificationOn}
                onChange={() => setNotificationsOn(!notificationOn)}
                className='sr-only peer'
              />
              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-500 
              after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 
              after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>

            </label>
          }
        />
        <MenuItem icon={<FaQuestionCircle />} label="FAQ ?" onClick={handleGetHelp} theme={theme} />
        <MenuItem icon={<FaSignOutAlt />} label="Sign out" color="text-red-600" theme={theme} />
      </div>
    </div>
  );
}
const MenuItem = ({ icon, label, color, onClick, rightContent,theme }) => (
  <div className={`flex justify-between items-center p-2 rounded-xl cursor-pointer ${theme === "dark" ? "text-white hover:border border-white" : "text-blue-900 hover:border border-blue-600" }`}>
    <div className="flex items-center space-x-8">
      <div className={`text-lg ${color}`}>{icon}</div>
      <span className={`font-medium ${color}`}>{label}</span>
    </div>
    <div className="text-gray-900  cursor-pointer text-2xl ">
      {rightContent ? (
        rightContent
      ) : (onClick && (
        <button onClick={onClick} className={`${theme === "dark" ? ' text-blue-500 hover:text-white hover:rotate-180 transition-transform duration-300 hover:cursor-pointer'  :'hover:text-blue-500 hover:rotate-180 transition-transform duration-300 hover:cursor-pointer'}`}>
          <FaRegArrowAltCircleRight />
        </button>
      )
      )}
    </div>
  </div>
);

export default Profile;

