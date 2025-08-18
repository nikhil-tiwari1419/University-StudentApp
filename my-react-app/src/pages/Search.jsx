import  { useRef } from 'react'
import { FaSearch } from "react-icons/fa";
import { FaArrowTurnDown } from "react-icons/fa6";


function search() {

   const sectionRef = useRef(null); //target section ka ref 

   const scrollTosection = () => {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth' })
   };

   return (

      <div className="min-h-screen flex mx-auto max-w-md w-full rounded bg-gradient-to-b from-blue-200 via-green-100 to-white flex-col items-center p-6 pb-20">

         {/*  Heading  */}

         <h1 className='text-2xl font-bold text-gray-800 mb-6'> Find Yourself ! </h1>

         {/* Search Input box  */}

         <div className='text-black flex items-center w-full max-w-md bg-white shadow-md rounded-full px-4 py-2  '>
            <FaSearch className='text-gray-500 mr-2 ' />
            <input
               type="text"
               placeholder='Search here .....'
               className='w-full bg-transperent focus:outline-none text-black placeholder:text-gray-400'
            />
         </div>

         {/* suggestion list  */}

         <div className='mt-8 w-auto max-w-md '>
            <p className='text-lg '>
               <ul className='space-y-2 '>
                  <li className='border-sky-300 rounded-lg px-1 py-1 shadow text-gray-700 hover:bg-blue-100 cursor-pointer'> Sem result</li>
                  <li className='border-sky-300 px-1 py-1 rounded-lg shadow text-gray-700 hover:bg-blue-100 cursor-pointer'> Attendence </li>
                  <li className='border-sky-300 px-1 py-1 rounded-lg shadow text-gray-700 hover:bg-blue-100 cursor-pointer'> Other Activity </li>
                  <li className='border-sky-300 px-1 py-1 rounded-lg shadow text-gray-700 hover:bg-blue-100 cursor-pointer'> Acadimic performance  </li>
               </ul>
            </p>
         </div>
         <div className='items-center text-black tracking-wider flex text-center max-w-md mt-20 p-4 rounded-full border '>
          Download's
         <FaArrowTurnDown />
         </div>

         <div className='border h-80 w-full rounded-t-2xl text-black mt-5'> 

         </div>
      </div>
   );
}

export default search
