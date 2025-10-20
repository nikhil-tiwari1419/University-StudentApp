import React, { useState } from "react";
import lodingGif from "../../assets/loading.gif";
import { useTheme } from "../../context/ThemeContext";


import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";

function ChangePass() {
  const [email, setEmail] = useState("");
  const [OTP, setOTP] = useState("");
  const [newPass, setNewPass] = useState("");

  const [seePassword, setSeePassword] = useState(false);
  const togglePasswordVisibility = () => {
    setSeePassword((prev) => !prev);
  };


  const [isVerify, setVerify] = useState(false);

  const handelVerify = () => {
    setVerify(true);

    setTimeout(() => {
      setVerify(false);
      alert(' verification Completed ✅');
    }, 3000);
  };

  const [isSubmit, setSubmit] = useState(false);

  const handelSubmit = () => {
    setSubmit(true);

    setTimeout(() => {
      setSubmit(false);
      alert('Password has been changed');
    }, 2000);
  }

  const { theme } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("OTP:", OTP);
    console.log("New Password:", newPass);

    // API call yaha karein
  };

  return (
    <div className={`min-h-screen px-10 mx-auto w-full max-w-md ${theme === "dark" ? "bg-gray-800 text-white" : "bg-[linear-gradient(180deg,_#eaf7f7_0%,_#b6e8f9_40%,_#cfd8fc_70%,_#f7d0f9_100%)] text-black"} `}>

      <h4 className="text-black  text-2xl items-center flex flex-col mb-4 pt-3">my-profile</h4>
      <div className="bg-white/50 rounded-xl shadow-xl p-10 ">
        {/* Heading */}
        <h2 className="text-center text-black font-bold text-2xl mb-40">
          Change Password
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 ">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border text-black rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 "
              placeholder="Enter your email"
              required
            />
            <div className="relative mt-2">
              <div className="h-10 flex items-center">
                {!isVerify ? (
                  <button
                    type="button"
                    disabled={!email}
                    className={`cursor-pointer text-sm  px-3 py-1 rounded-2xl ${email ? "bg-lime-400 hover:bg-blue-700" : "rounded-2xl cursor-not-allowed bg-gray-400"}`}
                    onClick={handelVerify}
                  >
                    Verify
                  </button>
                ) : (

                  <div className=" flex justify-center items-center w-full">
                    <img
                      src={lodingGif}
                      alt="loding Gif"
                      className="h-8 "
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* OTP */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 mt-25">
              OTP
            </label>
            <input
              type="text"
              value={OTP}
              onChange={(e) => setOTP(e.target.value)}
              className="w-full border text-black rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 "
              placeholder="Enter OTP"
              required
            />
          </div>

          {/* New Password */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Password
            </label>
            <input
              type={seePassword ? "text" : "password"}
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
              className="w-full border text-black rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter new password"
              required
            />
            <div
              onClick={togglePasswordVisibility}
              className='absolute inset-y-11.5 right-5 flex items-center cursor-pointer text-gray-600'
            >
              {seePassword ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="button"
            onClick={handelSubmit}
            className="w-full bg-blue-600 flex justify-center text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {!isSubmit ? (
              "Update Password"
            ) : (
              <img src={lodingGif}
                className="h-8"
                alt="loding......" />
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChangePass;
