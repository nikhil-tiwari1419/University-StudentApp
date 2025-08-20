import React from 'react'
import { useTheme } from '../context/ThemeContext'
import { a, div } from 'framer-motion/client';


function Explore() {
   const { theme } = useTheme();   // 👈 yaha se theme milega

   return (
      <div className={`min-h-screen flex-col mx-auto w-full max-w-md flex pb-20
    ${theme === "dark"
            ? "bg-gray-700 text-white"
            : "bg-gradient-to-b from-blue-200 via-white to-violet-200 text-black"
         }`}>
         <h1 className='text-center items-center font-bold text-2xl  mt-5 mb-6'>Explore</h1>

         <h2 className='text-lg  font-semibold mx-4 mb-2'>InterShip / Training Section</h2>

         <div className=' border overflow-y-auto no-scrollbar h-80 mx-3 rounded-xl '>
            {[
               "Tech jobs",
               "Opportunities in Educational sector",
               "Government and Online platforms",
               "Teaching Science (Biology)",
               "Teaching (Physics)", "Teaching (Math's)", "Intern (Excel & PowerBI)", "Intern (English)", "Intern (Marathi)", "Intern (Frontend)", "Intern (Backend)", "Intern (Flutter dev)", "Intern (MERN dev)", "Intern Student (Geology)", "Intern (Web 3)", "Intern (Node.js developer)"
            ].map((n) => (
               <div
                  key={n}
                  className={`border cursor-pointer rounded mx-3 p-2 m-2 h-15 text-center text-xl 
                  ${theme === "dark"
                        ? "border-gray-500 bg-gray-400 text-black"
                        : "text-blue-800 border-blue-400 bg-blue-100"}`}
               >
                  {n}
               </div>
            ))}

         </div>

         <h2 className='text-lg font-semibold max-w-md mx-3  p-4'>Schemas</h2>
         <div className='border h-80 mx-3 overflow-y-auto no-scrollbar rounded-xl '>
            <div className='flex flex-col'> 

            {[
              {name:"Student Assistance Fund",url:"https://embeddedcreation.in/rtmnu/uploaded_files/YOJANA-1.pdf"} ,
              { name:"Mata Manjulabai Student",url:"https://embeddedcreation.in/rtmnu/uploaded_files/YOJANA-2.pdf"},
              { name:"Rashtrasant Tukdoji Maharaj Earn and Learn Scheme",url:"https://embeddedcreation.in/rtmnu/uploaded_files/YOJANA-3.pdf"},
              { name:"Savitribai Phule Girls’ Travel Fare Concession Scheme",url:"https://embeddedcreation.in/rtmnu/uploaded_files/YOJANA-4.pdf"},
              { name:"Best Student Award",url:"https://embeddedcreation.in/rtmnu/uploaded_files/YOJANA-5A.pdf"},
              { name:"Best Student Cadet Award",url:"https://embeddedcreation.in/rtmnu/uploaded_files/YOJANA-5B.pdf"},
              { name:"Best Cultural Activity Award",url:"https://embeddedcreation.in/rtmnu/uploaded_files/YOJANA-5C.pdf"},
              { name:"Student Skill Development Scheme",url:"https://embeddedcreation.in/rtmnu/uploaded_files/YOJANA-6.pdf"},
              { name:"College Student Responsibility Fund Scheme (CSR)"},
              { name:"Student Insurance Scheme",url:"https://embeddedcreation.in/rtmnu/uploaded_files/YOJANA-9.pdf"},
            ].map((items , index) => (

               <a
                  key={index}
                  href={items.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`border cursor-pointer rounded-2xl mx-3 p-2 m-2 h-20 flex justify-center space-x-3 text-center text-xl 
                  ${theme === "dark"
                        ? "border-gray-500 bg-gray-400 text-black"
                        : "text-blue-800 border-blue-400 bg-red-100"}`}
               >
                  {items.name}
               </a>
            ))}
            </div>
         </div>

         <h2 className='text-lg font-semibold max-w-md mx-3  p-4'>Placement and Important Links</h2>
         <div className='border h-80 mx-3 rounded-2xl border-blue-900 text-lx overflow-y-auto no-scrollbar'>
            <div className='flex flex-col'>
               {[
               { name: "AICET placement portal", url: "https://www.aicte.gov.in/opportunities/students/placements", logo:""},
               { name: "Agriculture Scientest Recruitment", url: "https://asrb.org.in/" ,logo:"https://asrb.org.in/asset/img/head/Indian.png"},
               { name: "Central inetegence agencies", url: "https://www.cia.gov/" ,logo:""},
               { name: "IIEST", url: "https://www.iist.ac.in/placementcell" ,logo:""},
               { name: "Indian government job portal", url: "https://www.indgovtjobs.in/?m=1" ,logo:""},
               { name: "Indian Air-force", url: "https://indianairforce.nic.in/",logo:"https://indianairforce.nic.in/admin/assets/images/outerimages/logo.png" },
               { name: "Indian Navy", url: "https://www.joinindiannavy.gov.in/",logo:"" },
               { name: "Indian Army", url: "https://joinindianarmy.nic.in/authentication.aspx" ,logo:"" },
               { name: "Internshala", url: "https://internshala.com/",logo:"" },
               { name: "Glassdoor", url: "https://www.glassdoor.co.in/Job/n%C4%81gpur-internship-jobs-SRCH_IL.0,6_IC2951950_KO7,17.htm",logo:"" },
               { name: "Handshake", url: "https://joinhandshake.com/" ,logo:""},
               { name: "WayUp", url: "https://www.wayup.com/s/internships/",logo:"https://www.wayup.com/cdn/assets/wayup_logos/wayup_primary_horizontal_rgb_2018_2.svg" },
                ].map((item, indx) => (
                  <a
                     key={indx}
                     href={item.url}
                     traget="_blank"
                     rel="noopener noreferrer"
                     className={`border cursor-pointer mx-3 p-2 m-2 h-20 flex text-center justify-center space-x-3 rounded-full text-xl ${theme === 'dark' ? "bg-gray-400 border-gray-500 text-black " : "text-blue-800 border-blue-400 bg-blue-100"}`}
                  >
                     {/* logo yaha per hai  */}
                     <img  src={item.logo} alt={`${item.name} logo`} className="w-10 h-10 rounded-full"  />
                     <span>{item.name}</span>
                  </a>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Explore
