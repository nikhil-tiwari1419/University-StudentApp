import React from 'react'
import { useTheme } from '../../context/ThemeContext';
import image1 from "../../assets/CollegesImages/C_P_Radhakrishnan.png";
import image2 from "../../assets/CollegesImages/DrMadhaviKhodeVC.jpg";
import image3 from '../../assets/CollegesImages/ProVCKondawar.jpg' ;
import image4 from '../../assets/CollegesImages/raju_hivse.jpg';
import image5 from '../../assets/CollegesImages/vijay_Khandal.jpg';

import { IoLogoInstagram } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function AboutUs() {

const {theme} =useTheme();
  return (
      <div className={`min-h-screen flex-col  mx-auto w-full max-w-md flex  pb-20 ${theme === "dark" ? "bg-gray-700 text-white":"bg-[linear-gradient(180deg,_#eaf7f7_0%,_#b6e8f9_40%,_#cfd8fc_70%,_#f7d0f9_100%)] text-black"}`}>
        <h2 className='pt-4 flex flex-col items-center underline  text-xl'> About Us</h2>
        <div className='flex flex-col items-center pt-10'>
            <img className='h-60 w-60 rounded-xl '  src={image1} alt="C.P Radha rkishnan" />
            <h3 className='text-xl text-blue-500'>Shri C.P.Radhakrishnan</h3> <h5  className='sm:font-thin md:font-light hover:text-white '>Hon'ble Chancellor </h5>
        </div>
        <div className='flex flex-col items-center pt-20'>
            <img className='h-60 w-60 rounded-xl '  src={image2} alt="Dr Madhvi Khode (IAS)" />
            <h3 className='text-xl text-blue-500'>Dr Madhavi Khode(IAS)</h3> <h5  className='sm:font-thin md:font-light hover:text-white '>Hon'ble vice Chancellor</h5>  <h5  className='sm:font-thin md:font-light hover:text-white '> RTMNU Nagpur</h5>
        </div>
        <div className='flex flex-col items-center pt-20'>
            <img className='h-60 w-60 rounded-xl '  src={image3} alt="Dr Subash .B. Khondwar" />
            <h3 className='text-xl text-blue-500'>Subash .B. Khondwar </h3> <h5 className='sm:font-thin md:font-light hover:text-white' >Pro vice Chancellor</h5> <h5  className='sm:font-thin md:font-light hover:text-white '>RTMNU Nagpur</h5> 
        </div>
        <div className='flex flex-col items-center pt-20'>
            <img className='h-60 w-60 rounded-xl '  src={image4} alt="Dr Raju hivse" />
            <h3 className='text-xl text-blue-500'> Dr Raju Hivse</h3>    <h5  className='sm:font-thin md:font-light hover:text-white '> Registrar</h5> <h5  className='sm:font-thin md:font-light hover:text-white '>RTMNU Nagpur</h5> 
        </div>
        <div className='flex flex-col items-center pt-20 '>
            <img  className='h-60 w-60 rounded-xl ' src={image5} alt="Dr Vijay khandal" />
            <h3 className='text-xl text-blue-500'>Dr Vijay Khandal </h3>
            <h5  className='sm:font-thin md:font-light hover:text-white '>Student Development </h5> 
            <h5  className='pb-20 sm:font-thin md:font-light hover:text-white '>RTMNU Nagpur</h5>
        </div>
          {/* contact  */}

        <hr />
          <div className='pt-10 flex flex-col items-center '> 
            <h2 className='text-xl'>
                Contact US 
            </h2>
            <div className='sm:font:thin md:font-light  text-gray-400 '> 
                <h4 className='hover:text-white'>Rashtrasant Tukdoji Maharaj, Nagpur University</h4>
                <h4 className='hover:text-white'>Dr. Babasaheb Ambedkar Chair</h4>
                <h4 className='hover:text-white'>Dr. Ambedkar Janmashtabdi Bhavan</h4>
                <h4 className='hover:text-white'>North Ambajhari Road, Ramdaspeth </h4>
                <h4 className='hover:text-white'>Nagpur : 440010</h4>
                <h4 className='hover:text-white'>Office : 91-0712-2424450</h4>
                <h4 className='hover:text-white'>Mobile  : 9823080573</h4>
                <h4 className='hover:text-white'>E-mail : avi.fulzele@gmail.com, dbac@gmail.com</h4>
            </div>
          </div>

          {/* Socila media  */}
          <div className='flex flex-col items-center p-10'> 
             <h2 className='text-xl'>Social media </h2>
             <div className='flex gap-5.5 text-2xl pt-4 '>
               <a className='hover:text-red-400' href='https://www.instagram.com/rtmnu_updates/?hl=en' target='_blank' rel='noopener noreferrer'><IoLogoInstagram /></a>
               <a className='hover:text-blue-400' href='' target='_blank' rel='noopener noreferrer'><FaSquareFacebook/></a>
               <a className='hover:text-gray-400' href='https://x.com/rtmnu' target='_blank' rel='noopener noreferrer'><FaSquareXTwitter/></a>
               <a className='hover:text-blue-600' href='' target='_blank' rel='noopener noreferrer'><FaLinkedin/></a>
             </div>
          </div>
      </div>

  )
}

export default AboutUs