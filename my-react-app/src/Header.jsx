import "./index.css";
import graduationImage from "./assets/graduation_image.png"
import { useNavigate } from "react-router-dom";
import { ImGoogle2 } from "react-icons/im";
// import { ImFacebook2 } from "react-icons/im";
// import { FaSquareXTwitter } from "react-icons/fa6";

function Header() {

  let navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/Signin");
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-300 to-pink-300 mx-auto max-w-md w-full ">
      <div className="flex flex-center flex-col text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 via-purple-500 to-blue-600 bg-clip-text text-transparent">
          RTMNU <h2 className="text-2xl">Student App</h2>
        </h1>
        <div className="w-[360px] h-[670px] bg-white rounded-lg shadow-lg p-6">
          <img src={graduationImage} alt="graduation image" />
          <br />
          <h4 className="text-black text-2xl py-12">
            Hello dear student this is the university app <br />
            it is develop for student fast productivity  and all info at once palce
          </h4>
          <h5 className="px-6 py-7 text-1xl text-black"> &copy; Develop by Nikhil tiwari </h5>
          <button onClick={handleGetStarted}
            className="px-5 py-2 hover:bg-blue-200 border rounded text-black text-2xl border-purple-300 m-2"> Sign-in </button>
          <button onClick={() => navigate("/Signup")}
            className="px-5 py-2 hover:bg-blue-200 border rounded text-black text-2xl border-purple-300 m-2"> Sign-up</button>
          <h1 className="text-black">..............or connect  using..............</h1>
          <div className="flex flex-col text-black justify-center items-center cusor-pointer text-2xl border border-purple-400 p-1 rounded-2xl space-x-4 mt-4">
            <ImGoogle2 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
