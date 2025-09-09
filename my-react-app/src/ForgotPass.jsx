import React, { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import ForgootPassword from "./assets/undraw_forgotpassword.png";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";


import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
function ForgotPass() {

    const [seePassword, setSeePassword] = useState(false);
    const togglePasswordVisibility = () => {
        setSeePassword(prev => !prev)
    };

    let directionPass = useNavigate();

    const handleTOSignin = () => {
        directionPass("/Signin")
    }
    return (
        <div className="bg-gradient-to-b mx-auto max-w-md w-full from-blue-200 to-pink-100 min-h-screen overflow-hidden px-4 py-5 ">
            <div className='text-black text-2xl text-bold text-center'>
                Forgot - passWord
            </div>
            <button
                className='mx-10 '
                onClick={handleTOSignin}
            >
                <BsArrowLeftShort className='text-black text-3xl cursor-pointer' />
            </button>
            <div className=' border rounded-xl p-3 bg-violet-400 items-center mb-6 flex-col flex'>
                <img src={ForgootPassword} className='h-25' alt="password img " />
            </div>

            <div className='bg-blue-300 rounded-t-xl pb-25'>
                <div className='text-center '>
                    <label className="block text-sm font-medium text-gray-700 mb-1 pt-3">
                        Email :-
                    </label>
                    <input
                        type="Email"
                        placeholder='Enter Regestered Email-id'
                        className='border-2 w-70 rounded-2xl p-2 text-center hover:bg-blue-100 items-center text-black focus:outline-none '
                    />
                </div>
                <div className='text-center pt-5 '>

                    <button
                        type="button"
                        onClick={() => {
                            setTimeout(() => {
                                alert("OTP send at entered email")
                            }, 2000);
                        }}
                        placeholder='submit'
                        className='border w-50 text-center border-green-400 bg-green-300 transform translate active:translate-y-1 active:shadow-2xl cursor-pointer rounded-2xl p-2 items-center text-black focus:outline-none'
                    > SEND  </button>
                </div>
                <div className='text-center '>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        OTP :-
                    </label>
                    <input
                        type="OTP"
                        placeholder='6 - digit OTP '
                        className='border-2 w-70 text-center hover:bg-blue-100 rounded-2xl p-2 items-center text-black focus:outline-none'
                    />

                </div>
                <div className='text-center relative '>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Enter Password
                    </label>
                    <input
                        type={seePassword ? "text" : "password"}
                        placeholder='passowrd'
                        className='border-2 w-70 text-center hover:bg-blue-100 rounded-2xl p-2 items-center text-black focus:outline-none'
                    />
                    <div
                        onClick={togglePasswordVisibility}
                        className='absolute inset-y-11.5 right-22 flex items-center cursor-pointer text-gray-600'
                    >
                        {seePassword ? <FaEye /> : <FaEyeSlash />}
                    </div>
                </div>
                <div className=' text-center mt-10 '>
                    <button
                        type="button"
                        onClick={() => {
                            handleTOSignin();
                            setTimeout(() => {
                                alert("Password is changed")
                            }, 1000);
                        }}
                        placeholder='submit'
                        className='border transform translate active:translate-y-1 active:shadow-2xl border-blue-400 w-50 text-center bg-blue-400 cursor-pointer rounded-xl p-2 items-center text-black focus:outline-none'
                    > Proceed  </button>
                </div>

                <h5 className='flex items-center justify-center text-black mt-20'>......or......</h5>
                <div className='flex gap-5 mt-2 justify-center text-4xl h-10'>

                    <AiFillGoogleCircle className=' text-black hover:text-red-500 ' />
                    <MdFacebook className=' text-black hover:text-blue-500 ' />
                    <AiFillTwitterCircle className=' text-black hover:text-white ' />
                </div>

                <div className='text-center '>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Do you want to create account ?
                    </label>
                    <button
                        type="Ph no"
                        placeholder='submit'
                        onClick={() => directionPass("/Signup")}
                        className='border-2 w-50 font-bold text-center bg-green-100 cursor-pointer rounded-2xl p-2 items-center text-black focus:outline-none'
                    > Sign-Up  </button>
                </div>
            </div>
        </div>
    )
}

export default ForgotPass;