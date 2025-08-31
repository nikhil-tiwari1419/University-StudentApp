import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { FaArrowTurnDown } from "react-icons/fa6";
import { useTheme } from "../context/ThemeContext";

function Search() {
  const sectionRef = useRef(null); // target section ka ref

  const scrollTosection = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col mx-auto max-w-md w-full rounded p-6 pb-20
        ${
          theme === "dark"
            ? "bg-gray-800 text-white"
            : "bg-gradient-to-b from-blue-200 via-green-100 to-white text-black"
        }`}
    >
      {/* Heading */}
      <h1 className="text-2xl text-center font-bold mb-6">Find Yourself !</h1>

      {/* Search Input box */}
      <div
        className={`flex justify-center items-center w-full max-w-md rounded-full px-4 py-2 
          ${
            theme === "dark"
              ? "bg-gray-900 text-white"
              : "bg-white shadow-md text-black"
          }`}
      >
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search here ....."
          className={`w-full bg-transparent focus:outline-none rounded 
            ${
              theme === "dark"
                ? "focus:ring-gray-600 text-white placeholder:text-gray-400"
                : "focus:ring-blue-400 text-black placeholder:text-gray-500"
            }`}
        />
      </div>

      {/* suggestion list */}
      <div className="mt-8 w-full text-center">
        <ul className="space-y-2">
          {["Sem result", "Attendance", "Other Activity", "Academic performance"].map(
            (item, idx) => (
              <li
                key={idx}
                className={`rounded-lg px-2 py-2 shadow cursor-pointer 
                  ${
                    theme === "dark"
                      ? "bg-gray-700 text-white hover:bg-gray-600"
                      : "border border-sky-300 text-gray-700 hover:bg-blue-100"
                  }`}
              >
                {item}
              </li>
            )
          )}
        </ul>
      </div>

      {/* Downloads */}
      <div
        onClick={scrollTosection}
        className={`items-center justify-center ${theme === 'dark' ? "text-white" : "text-black "}  tracking-wider flex gap-2 text-center max-w-md mt-20 p-4 rounded-full border cursor-pointer`}
      >
        Download's
        <FaArrowTurnDown />
      </div>

      {/* Downloads Section */}
      <div
        ref={sectionRef}
        className={`border h-80 w-full rounded-t-2xl mt-5 
          ${theme === "dark" ? "border-white text-white" : "border-gray-900 text-black"}`}
      ></div>
    </div>
  );
}

export default Search;
