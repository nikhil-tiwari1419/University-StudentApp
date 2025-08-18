import React from 'react'
import SignupImg from "./assets/undraw_sign-up.png"
import { useNavigate } from "react-router-dom";

function Signup() {

  const navigation = useNavigate();

  const handleGetSignin = () => {
    navigation("/Signin")
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
              placeholder="••••••••"
              className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
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

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">OPT</label>
            <input
              type="otp"
              placeholder="OTP"
              className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <button onClick={handleGetSignin}
            type="button"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg font-semibold hover:bg-indigo-600 transition"
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
