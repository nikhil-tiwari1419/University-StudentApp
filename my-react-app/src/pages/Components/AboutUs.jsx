import React from 'react'
import Card from '../../Componentss/Card';
import Info from '../../Componentss/Info';
import { useTheme } from '../../context/ThemeContext';
import image1 from "../../assets/CollegesImages/C_P_Radhakrishnan.png";
import image2 from "../../assets/CollegesImages/DrMadhaviKhodeVC.jpg";
import image3 from '../../assets/CollegesImages/ProVCKondawar.jpg';
import image4 from '../../assets/CollegesImages/raju_hivse.jpg';
import image5 from '../../assets/CollegesImages/vijay_Khandal.jpg';

import { IoLogoInstagram } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function AboutUs() {

  const { theme } = useTheme();
  return (
    <div className={`min-h-screen flex-col  mx-auto w-full max-w-md flex  pb-20 ${theme === "dark" ? "bg-gray-700 text-white" : "bg-[linear-gradient(180deg,_#eaf7f7_0%,_#b6e8f9_40%,_#cfd8fc_70%,_#f7d0f9_100%)] text-black"}`}>
      <h2 className='pt-4 flex flex-col items-center underline  text-xl'> About Us</h2>

      <Card user='Shri C.P.Radhakrishnan' position='Honble Chancellor' image={image1} alt='C.P Radha rkishnan' />

      <Card user='Dr Madhvi Khode (IAS)' position='Honble vice Chancellor' image={image2} alt='Dr Madhavi Khode(IAS)' />

      <Card user='Subash .B. Khondwar' position='Pro vice Chancellor' image={image3} alt='Subash .B. Khondwar' />

      <Card user='Dr Raju Hivse' position=' Registrar' image={image4} alt='Dr Raju Hivse' />

      <Card user='Dr Vijay Khandal' position='Student Development' image={image5} alt='Dr Vijay Khandal' />

      {/* contact  */}

      <hr />
      <div className='pt-10 flex flex-col items-center '>
        <h2 className='text-xl'>
          Contact US
        </h2>
        <div className='sm:font:thin md:font-light  text-gray-400 '>
          <Info name='Rashtrasant Tukdoji Maharaj, Nagpur University'/>
          <Info name='Dr. Babasaheb Ambedkar Chair'/>
          <Info name='Dr. Ambedkar Janmashtabdi Bhavan'/>
          <Info name='North Ambajhari Road, Ramdaspeth '/>
          <Info name='Nagpur : 440010'/>
          <Info name='Office : 91-0712-2424450'/>
          <Info name='Mobile  : 9823080573'/>
          <Info name='E-mail : avi.fulzele@gmail.com, dbac@gmail.com'/>
        </div>
      </div>

      {/* Socila media  */}
      <div className='flex flex-col items-center p-10'>
        <h2 className='text-xl'>Social media </h2>
        <div className='flex gap-5.5 text-2xl pt-4 '>
          <a className='hover:text-red-400' href='https://www.instagram.com/rtmnu_updates/?hl=en' target='_blank' rel='noopener noreferrer'><IoLogoInstagram /></a>
          <a className='hover:text-blue-400' href='' target='_blank' rel='noopener noreferrer'><FaSquareFacebook /></a>
          <a className='hover:text-gray-400' href='https://x.com/rtmnu' target='_blank' rel='noopener noreferrer'><FaSquareXTwitter /></a>
          <a className='hover:text-blue-600' href='' target='_blank' rel='noopener noreferrer'><FaLinkedin /></a>
        </div>
      </div>
    </div>

  )
}

export default AboutUs