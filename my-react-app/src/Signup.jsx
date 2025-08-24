import React, { useState } from 'react'
import lodingGif from "./assets/loading.gif";
import SignupImg from "./assets/undraw_sign-up.png"
import { useNavigate } from "react-router-dom";
import { button } from 'framer-motion/client';

function Signup() {

  const navigation = useNavigate();

  const handleGetSignin = () => {
    navigation("/Signin")
  };

  const [Email, setEmail] = useState("");
  const [OTP, setOTP] = useState("");
  const [passoword, setPassword] = useState("")
  const [error, setError] = useState("");
  const [isValidPassword, setValidPassowrd] = useState("");

  const setPasswordd = (e) => {
    const value = e.target.value;
    const regex = /^[A-Za-z0-9]*$/;
    setPassword(value);

    if (regex.test(value)) {
      if (value.length < 8) {
        setError("password must be at least 8  charactors  ");
        setValidPassowrd(false);
      }
      else if (value.length > 12) {
        setError("Password cannot be more than 12 charactors .");
        setValidPassowrd(false);
      } else {
        setError("")
        setValidPassowrd(true);
      }
    }
  };
  const handleSignUp = () => {
    alert("Sign UP Succesfull !!")
  }

  const [isVerify, setVerify] = useState(false);
  const verifybtn = () => {
    setVerify(true);

    setTimeout(() => {
      setVerify(false);
      alert("OTP has send")
    }, 3000);
  };


  return (
    <div className="mx-auto max-w-md w-full flex items-center justify-center min-h-screen bg-gradient-to-b from-pink-300 to-cyan-300">
      <div className="h-950px] w-[360px] backdrop-blur-md bg-white/50 p-8 rounded-t-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Account</h2>

        <form className="space-y-4">
          {/* <h3 className='text-black'>.....Create password..... </h3> */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={passoword}
              onChange={setPasswordd}
              placeholder="Enter your password "
              required
              pattern="[A-Za-z0-9]{6,}"
              title="Password must be at least 6 characters long and contain only letters and numbers"
              className={`text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 ${error ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-indigo-400"}`}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <div className="relative mt-2">
              <div className="h-10 flex items-center">
                {!isVerify ? (
                  <button
                    type="button"
                    disabled={!Email}
                    className={`cursor-pointer text-sm  px-3 py-1 rounded-2xl ${Email ? "bg-lime-400 hover:bg-blue-700" : "rounded-2xl cursor-not-allowed bg-gray-400"}`}
                    onClick={verifybtn}
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

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 mt-4">
              OTP
            </label>
            <input
              type="number"
              value={OTP}
              onChange={(e) => setOTP(e.target.value)}
              className="w-full border text-black rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 "
              placeholder="Enter OTP"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <button onClick={handleGetSignin}
            type="button"
            disabled={!isValidPassword}
            className={`w-full py-2 rounded-lg font-semibold transition ${isValidPassword
                ? "bg-indigo-500 text-white hover:bg-indigo-600"
                : "bg-gray-400 text-gray-700 cursor-not-allowed"
              }`}
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?
          <button onClick={handleGetSignin}>
            <span className="text-indigo-600 cursor-pointer hover:underline">Login</span>
          </button>
        </p>
        <img className='mx-auto w-50 pt-10  ' src={SignupImg} alt="signup img" />
      </div>
    </div>
  );
};

export default Signup
