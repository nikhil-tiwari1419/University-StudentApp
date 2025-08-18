import { useState } from 'react'
import MyAvtar from '../../assets/undraw_young-man.png'
import { FaPencilAlt } from "react-icons/fa";

function Myinfo() {
  // user  full name 
 const [name, setName]=useState("");
//  date of birth 
 const [dob, setDOB] =useState("");
//  user email 
 const [email,setEmail]=useState("");
 const [Ph_number,setPh_number]= useState("");
 const [College_name,setCollege_name] =useState("");
 const [College_code,setCollege_code] = useState("");

 const [isEditable,setEdit] = useState(false);

  return (
    <div className="min-h-screen flex-col mx-auto w-full max-w-md flex bg-gradient-to-b from-blue-300 to-blue-100 pb-20 ">
      <div className="text-black font-semibold flex items-center justify-center pt-6 text-lg">
        Personal Info
      </div>

      {/* Profile Card */}
      <div className="border h-full border-blue-500 rounded-xl shadow-2xl p-4 m-5 pb-15">
        <div className="flex flex-col gap-6 text-black font-semibold items-center">
          {/* Profile Image */}
          <div className="w-full flex justify-center items-center relative">
            <img
              src={MyAvtar}
              className="object-cover rounded-full w-32 h-32"
              alt="my_avatar_image"
            />
            <div className="absolute bottom-2 right-[38%] bg-white rounded-full p-2 shadow cursor-pointer">
              <FaPencilAlt className="text-blue-700" />
            </div>
          </div>

          {/* Form Fields */}
          <div className="w-full space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <input
               value={name}
                type="text"
                onChange={(e)=> setName(e.target.value)}
                disabled={!isEditable}
                className={`border rounded-lg w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${!isEditable ? "bg-gray-200 cursor-not-allowed": ""}`}
                placeholder="Enter your full name"
              />
            </div>
            {/* DOB */}
            <div>
              <label className="block text-sm font-medium">Date of Birth</label>
              <input
               value={dob}
                type="date"
                onChange={(e)=> setDOB(e.target.value)}
                disabled={!isEditable}
                
                className={`border rounded-lg w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${!isEditable ? "bg-gray-200 cursor-not-allowed": ""}`}
                placeholder="DOB"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium">Gender</label>
              <select
              disabled={!isEditable}
                className={ `border rounded-lg w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${!isEditable ?"bg-gray-200 cursor-not-allowed":""}`}
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium">Email ID</label>
              <input
                type="email"
                value={email}
                onChange={(e) =>setEmail(e.target.value)}
               disabled={!isEditable}
                className={`border rounded-lg w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${!isEditable ? "bg-gray-200 cursor-not-allowed":""

                }`}
                placeholder="Enter your email"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium">Phone Number</label>
              <input
               value={Ph_number}
                type="tel"
                onChange={(e)=>setPh_number(e.target.value)}
                disabled={!isEditable}
                className={`border rounded-lg w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${!isEditable ? "bg-gray-200 cursor-not-allowed":""

                }`}
                placeholder="Enter your phone number"
              />
            </div>

            {/* College Name */}
            <div>
              <label className="block text-sm font-medium">College Name</label>
              <input
               value={College_name}
                type="text"
                onChange={(e)=> setCollege_name(e.target.value)}
                disabled={!isEditable}
                className={`border rounded-lg w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${!isEditable ? "bg-gray-200 cursor-not-allowed":""}`}
                placeholder="Enter your college name"
              />
            </div>
            {/* college code  */}
            <div>
              <label className="block text-sm font-medium">College Code</label>
              <input
              value={College_code}
                type="number"
                onChange={(e)=> setCollege_code(e.target.value)}
                disabled={!isEditable}
                className={`border rounded-lg w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${!isEditable ? "bg-gray-200 cursor-not-allowed":""}`}
                placeholder="Enter your college code"
              />
            </div>

            {/* Year of Studying */}
            <div>
              <label className="block text-sm font-medium">Year of Studying</label>
              <select
               disabled={!isEditable}
                className={`border rounded-lg w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${!isEditable ? "bg-gray-200 cursor-not-allowed":""}`}
              >
                <option value="">Select year</option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-around items-center mt-5 mb-9">
        <button 
        onClick={() => setEdit(true)}  
         className="text-black cursor-pointer font-bold border-2 px-6 py-2 rounded-full hover:text-blue-900">
          Edit Profile
        </button>
        <button type='submit' 
        disabled={!isEditable}
        onClick={()=> setEdit(false)}
        className={`text-black cursor-pointer font-bold border-2 px-6 py-2 rounded-full ${
            !isEditable ? "text-red-500 font-bold cursor-not-allowed" : "hover:text-blue-900"
          }`}
          >
          Save
        </button>
      </div>
    </div>
  );
}

export default Myinfo;
