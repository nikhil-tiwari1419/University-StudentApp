import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
// import { button, div, p } from "framer-motion/client";

function View() {
  const { theme } = useTheme();
  const [colleges, setColleges] = useState([]);

  // ✅ Fetch college data
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/nikhil-tiwari1419/CollegeData/main/College.json")
      .then((res) => res.json())
      .then((data) => setColleges(data))
      .catch((err) => console.error("Error Fetching colleges : ", err))
  }, []);

  return (
    <div
      className={`h-full min-h-screen mx-auto max-w-md w-full pb-20 rounded 
  ${theme === "dark"
          ? "bg-gray-900 text-white" : "text-black bg-[linear-gradient(180deg,_#eaf7f7_0%,_#b6e8f9_40%,_#cfd8fc_70%,_#f7d0f9_100%)]"
        } `}>

      <h2 className="items-center flex flex-col pt-4 font-bold text-lg underline-offset-4"> All Colleges / Cources</h2>

      <h2 className="mx-5 flex flex-col pt-4 font-bold text-lg underline"> All Colleges Affilited By rtmnu</h2>

      <div className="border-2  border-blue-500 h-80 overflow-y-auto no-scrollbar m-3 rounded-xl ">
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 m-2 `}>
          {colleges.length > 0 ? (
            colleges.map((colleges, index) => (
              <div
                key={index}
                className={`rounded-xl border shadow-mb p-4 flex flex-col justify-between 
            ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white"}`}>

                <h3 className="font-semibold text-lg">{colleges.name}</h3>
                {/* College url Button  */}

                {colleges.url ? (
                  <button
                    onClick={() => window.open(colleges.url, "_blank")}
                    className="mt-auto  px-3 py-2 text-sm font-medium rounded-lg bg-green-700 text-white  hover:bg-blue-600 transition">
                    View College
                  </button>
                ) : (
                  <p className="text-xs opacity-70 mt-2">Website not Avalliable</p>
                )}
              </div>
            ))
          ) : (
            <p className="text-center opacity-70"> Loading Colleges....</p>
          )}
        </div>
      </div>

      {/*  courses section  */}
       <h2 className="mx-5 flex flex-col pt-4 font-bold text-lg underline"> All Cources</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 m-2  ">{[

        {title: "B.Tech / B.E", bg:"bg-blue-500", url:"https://nikhil-tiwari1419.github.io/B.tech/"},
        {title : "BCA /MCA", bg:"bg-blue-300" , url:"https://nikhil-tiwari1419.github.io/BCA/"},
        {title : "BSc" ,bg:"bg-blue-300"},
        {title : "MSc in Botany", bg:"bg-cyan-300"},
        {title : "MSc in Physics", bg:"bg-gray-300"},
        {title : "MSc in Chemestry", bg:"bg-blue-300"},
        {title : "MSc in Biology" ,bg:"bg-yellow-100"},
        {title : "MSc in Litreature" ,bg:"bg-blue-300"},
        {title : "MSc in Math's", bg:"bg-blue-300"},
        {title : "PhD in Computer Science" ,bg : "bg-blue-300"},
        {title : "PhD in Botayn", bg:"bg-green-200"},
        {title : "PhD in Math's" ,bg:"bg-blue-300"},
        {title : "PhD in Physics", bg:"bg-red-300"},
        {title : "PhD in Chemestry", bg:"bg-blue-300"},
        {title : "PhD in Litreature", bg:"bg-blue-300"},
        {title : "DIploma", bg:"bg-blue-300"},
        {title : "M.Tech", bg:"bg-yellow-100"},
        {title : "Nursing" ,bg:"bg-blue-100"},
        {title : "LAW", bg:"bg-blue-300"},
        {title : "Soft Skill", bg:"bg-blue-600"},
        {title : "Computer techinecian" ,bg:"bg-blue-300"},
        {title : "Mobile techinecian ", bg:"bg-blue-300"},
        {title : "MBA" ,bg:"bg-blue-300"},
        {title : "M.COm" ,bg:"bg-pink-300"},
        {title : "B.COm", bg:"bg-yellow-100"},

      ].map((course,index)=>(
        <Course key={index} title={course.title} bg={course.bg} url={course.url}/>
      ))} 
      </div>
    </div>
  );
}

const Course = ({ title, bg, url }) => (
  <div 
    onClick={()=> url &&window.open(url,"_blank")}
    className={`min-w-[120px] h-[100px] ${bg} mx-auto w-full max-w-md cursor-pointer flex items-center justify-center rounded-2xl shadow-md px-5 text-center`}>
    <span className="text-xl text-black">{title}</span>
  </div>
)
export default View;
