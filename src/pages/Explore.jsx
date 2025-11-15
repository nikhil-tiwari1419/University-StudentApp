import React from 'react'
import { useTheme } from '../context/ThemeContext'
import intrsnShalla from '../assets/internShalla.png'
import { a, div } from 'framer-motion/client';


function Explore() {
   const { theme } = useTheme();   // 👈 yaha se theme milega

   return (
      <div className={`min-h-screen flex-col mx-auto w-full max-w-md flex pb-20
    ${theme === "dark"
            ? "bg-gray-800 text-white"
            : "bg-[linear-gradient(180deg,_#eaf7f7_0%,_#b6e8f9_40%,_#cfd8fc_70%,_#f7d0f9_100%)]  text-black"
         }`}>
         <h1 className='text-center items-center font-bold text-2xl  mt-5 mb-6'>Explore</h1>

         <h2 className='text-lg  font-semibold mx-4 mb-2'> Training Section</h2>

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
                  { name: "Student Assistance Fund", url: "https://embeddedcreation.in/rtmnu/uploaded_files/YOJANA-1.pdf" },
                  { name: "Mata Manjulabai Student", url: "https://embeddedcreation.in/rtmnu/uploaded_files/YOJANA-2.pdf" },
                  { name: "Rashtrasant Tukdoji Maharaj Earn and Learn Scheme", url: "https://embeddedcreation.in/rtmnu/uploaded_files/YOJANA-3.pdf" },
                  { name: "Savitribai Phule Girls’ Travel Fare Concession Scheme", url: "https://embeddedcreation.in/rtmnu/uploaded_files/YOJANA-4.pdf" },
                  { name: "Best Student Award", url: "https://embeddedcreation.in/rtmnu/uploaded_files/YOJANA-5A.pdf" },
                  { name: "Best Student Cadet Award", url: "https://embeddedcreation.in/rtmnu/uploaded_files/YOJANA-5B.pdf" },
                  { name: "Best Cultural Activity Award", url: "https://embeddedcreation.in/rtmnu/uploaded_files/YOJANA-5C.pdf" },
                  { name: "Student Skill Development Scheme", url: "https://embeddedcreation.in/rtmnu/uploaded_files/YOJANA-6.pdf" },
                  { name: "College Student Responsibility Fund Scheme (CSR)" },
                  { name: "Student Insurance Scheme", url: "https://embeddedcreation.in/rtmnu/uploaded_files/YOJANA-9.pdf" },
               ].map((items, index) => (

                  <a
                     key={index}
                     href={items.url}
                     target="_blank"
                     rel="noopener noreferrer"
                     className={`border cursor-pointer rounded mx-3 p-2 m-2 h-20 flex justify-center space-x-3 text-center text-xl 
                  ${theme === "dark"
                           ? "border-gray-500 bg-gray-400 text-black"
                           : "text-blue-800 border-blue-400 bg-blue-200"}`}
                  >
                     {items.name}
                  </a>
               ))}
            </div>
         </div>

         <h2 className='text-lg font-semibold max-w-md mx-3  p-4'>Placement and Intership Links</h2>
         <div className='border h-80 mx-3 rounded-xl border-blue-900 text-lx overflow-y-auto no-scrollbar'>
            <div className='flex flex-col'>
               {[
                  { name: "AICET placement portal", url: "https://www.aicte.gov.in/opportunities/students/placements", logo: "https://i0.wp.com/sjbit.edu.in/wp-content/uploads/2021/07/AICTE-Logo-250x250-1.png?ssl=1" },
                  { name: "Agriculture Scientest Recruitment", url: "https://asrb.org.in/", logo: "https://asrb.org.in/asset/img/head/Indian.png" },
                  { name: "Central inetegence agencies", url: "https://www.cia.gov/", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/CIA_logo_%282021%29.svg/1200px-CIA_logo_%282021%29.svg.png" },
                  { name: "IIEST", url: "https://www.iist.ac.in/placementcell", logo: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Indian_Institute_of_Engineering_Science_and_Technology%2C_Shibpur_Logo.png" },
                  { name: "Indian government job portal", url: "https://www.indgovtjobs.in/?m=1", logo: "https://sc.filehippo.net/images/t_app-icon-l/p/e280fd16-81f6-4d8a-ac95-1b07eb6dd137/2040477866/employment-news-govt-jobs-sarkari-naukri-logo" },
                  { name: "Indian Air-force", url: "https://indianairforce.nic.in/", logo: "https://indianairforce.nic.in/admin/assets/images/outerimages/logo.png" },
                  { name: "Indian Navy", url: "https://www.joinindiannavy.gov.in/", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIMde7JiSUk87BoZvsqwgByx6U5fcbcUPNLSQkyhAPsnhHOMMpJS4v8E&s=10" },
                  { name: "Indian Army", url: "https://joinindianarmy.nic.in/authentication.aspx", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Indian_Army_Insignia_circular.png/250px-Indian_Army_Insignia_circular.png" },
                  { name: "Internshala", url: "https://internshala.com/", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVMkr-4z9DPFV4A1PVYTiYuALluRtvibicnw&usqp=CAU" },
                  { name: "Glassdoor", url: "https://www.glassdoor.co.in/Job/n%C4%81gpur-internship-jobs-SRCH_IL.0,6_IC2951950_KO7,17.htm", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW6757ivFZFxFtqSMIOjnXvUT-ccyxe7y6K3TG9r_RH2bg3rbxM2jBTOk&s=10" },
                  { name: "Handshake", url: "https://joinhandshake.com/", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXCS0pyS93W7GM9ZamD4Lg4lGr8Wnw-Zm6AHHJLGO4DvLJTSBCmtaioIA&s=10" },
                  { name: "WayUp", url: "https://www.wayup.com/s/internships/", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2kufINKOoiesr_2TtVsiQTmjYGdo-0iqJoxdR_5qetxNtbbXd_aD78Lg&s=10" },
               ].map((item, indx) => (
                  <a
                     key={indx}
                     href={item.url}
                     traget="_blank"
                     rel="noopener noreferrer"
                     className={`border cursor-pointer mx-3 p-2 m-2 h-20 flex justify-center space-x-3 rounded text-xl ${theme === 'dark' ? "bg-gray-400 border-gray-500 text-black " : "text-blue-800 border-blue-400 bg-blue-100"}`}
                  >
                     {/* logo yaha per hai  */}
                     <img 
                     src={item.logo}
                     alt={`${item.name} logo`} className="w-10 h-10 rounded-full" />
                     <span>{item.name}</span>
                  </a>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Explore
