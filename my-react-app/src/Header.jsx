import "./index.css";
import graduationImage from "./assets/graduation_image.png"
import { useNavigate } from "react-router-dom";


function Header() {

  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-300 to-pink-200 mx-auto max-w-md w-full ">
      <div className="flex flex-center flex-col text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-800 via-blue-500 to-red-600 bg-clip-text text-transparent">
          RTMNU <h2 className="text-2xl">Student App</h2>
        </h1>
        <div className="w-[360px] bg-white rounded-lg shadow-lg p-6">
          <img src={graduationImage} alt="graduation image" />
          <br />
          <h4 className="text-black text-xl py-10">
            Hello dear student this is the university app <br />
            it is develop for student fast productivity  and all info at once palce
          </h4>
          <h5 className="px-6 py-7 text-1xl text-black"> &copy; Develop by Nikhil tiwari </h5>
          <div className="pb-5">
            <button onClick={() => navigate("/Signup")}
              className="px-5 py-2 hover:bg-gray-400 border-2 rounded text-black text-2xl border-purple-600 m-2"> Sign-In / Sign-Up
            </button>
          </div>
          <span
            onClick={() => navigate('/App/Home')}
            className="text-center text-black border-b-4 border-b-gray-500  bg-blue-400  px-12 text-2xl rounded-2xl p-1 underline cursor-pointer hover:text-white">
            Get started
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
