import React, { useState } from 'react'
import lodingGif from "./assets/loading.gif";
// import SignupImg from "./assets/undraw_sign-up.png";
import { useNavigate } from "react-router-dom";

import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";

import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
// import { div } from 'framer-motion/client';
// import { button } from 'framer-motion/client';

function Signup() {

  const submitHandeler = (e) => {
    e.preventDefault()
    console.log(Email)
    console.log(OTP)
    console.log(passoword)
    console.log(error)
    console.log(isValidPassword)
    setEmail('')
    setOTP('')
    setPassword('')
    setError('')
    setValidPassowrd('')

  }

  const navigation = useNavigate();

  const handleGetSignin = () => {
    navigation("/Signin")

  };
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev)
  };

  const [Email, setEmail] = useState("");
  const [OTP, setOTP] = useState("");
  const [passoword, setPassword] = useState("")
  const [error, setError] = useState("");
  const [isValidPassword, setValidPassowrd] = useState("");

  const setPasswordd = (e) => {
    const value = e.target.value;
    setPassword(value);

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!regex.test(value)) {
      setError(
        "1. Ensure that password contains both upper and lowercase letters.<br />" +
        "2. Include symbols like @ , _ , # , * and/or numbers."
      );
      setValidPassowrd(false);
    } else if (value.length > 13) {
      setError("password must be not more than 13 characters. ");
      setValidPassowrd(false);
    } else {
      setError("");
      setValidPassowrd(true);
    }
  };
  const handleGetSignUp = () => {
    alert("SignUP Succesfull !!")
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

        <form
          // e is giving u the evenrt  detail's fater submit 
          onSubmit={(e) => {
            submitHandeler(e)
          }}
          className="space-y-4">
          {/* <h3 className='text-black'>.....Create password..... </h3> */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>

            <input
              type={showPassword ? "text" : "password"}
              value={passoword}
              onChange={setPasswordd}
              placeholder="Enter your password"
              required
              pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}"
              title="Password must have at least 1 uppercase, 1 lowercase, 1 number, 1 special character, and be 10–13 characters long"
              className={`text-black w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${error ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-indigo-400"
                }`}
            />

            {error && (
              <div
                className='text-red-600 text-sm mb-2'
                dangerouslySetInnerHTML={{ __html: error }}
              />
            )}

            <div
              onClick={togglePasswordVisibility}
              className='fixed top-32 right-12 flex items-center cursor-pointer text-gray-600'
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </div>
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
                    type="submit"
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
                      className="h-8"
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
          <button onClick={() => {
            handleGetSignUp();
            setTimeout(() => {
              navigation("/Signin")
              // 
            }, 1000);
          }}
            type="submit"
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
        <h2 className="mt-5 text-black text-center">.............OR.............</h2>

        <span className=" text-black border text-4xl justify-center flex mb-4 mt-3 border-b-purple-400 rounded-2xl cursor-pointer hover:text-red-300">< AiFillGoogleCircle /></span>
        <span className=" text-black border text-4xl justify-center flex mb-4 mt-3 border-b-purple-400 rounded-2xl cursor-pointer hover:text-blue-500"><MdFacebook /></span>
        <span className=" text-black border text-4xl justify-center flex mb-4 mt-3 border-b-purple-400 rounded-2xl cursor-pointer hover:text-gray-400"><  AiFillTwitterCircle /></span>
        {/* <img className='mx-auto w-50 pt-10  ' src={SignupImg} alt="signup img" /> */}
      </div>
    </div>
  );
};

export default Signup
