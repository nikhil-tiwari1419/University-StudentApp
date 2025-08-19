import React from 'react'
import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import ForgootPassword from "./assets/undraw_forgotpassword.png";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";

function ForgotPass() {

    let directionPass = useNavigate();

    const handleTOSignin = () => {
        directionPass("/Signin")
    }
    return (
        <div className="bg-gradient-to-b mx-auto max-w-md w-full from-blue-200 to-pink-100 min-h-screen overflow-hidden px-4 py-5 space-y-6">
            <div className='text-black text-2xl text-bold text-center'>
                <button
                    className='mx-5 left-30 absolute'
                    onClick={handleTOSignin}
                >
                    <BsArrowLeftShort className='text-black text-3xl cursor-pointer' />
                </button>
                Forgot  - passWord
            </div>
            <div className=' border rounded-4xl p-3 bg-violet-400 items-center mb-6 flex-col flex'>
                <img src={ForgootPassword} className='h-25' alt="password img " />
            </div>

            <div className='bg-blue-300 rounded-t-4xl min-h-screen'>
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
                    {/* <label className="block text-sm font-medium text-gray-700 mb-1">
                        SEND :-
                    </label> */}
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
                <div className='text-center '>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Enter Password
                    </label>
                    <input
                        type="password"
                        placeholder='passowrd'
                        className='border-2 w-70 text-center hover:bg-blue-100 rounded-2xl p-2 items-center text-black focus:outline-none'
                    />

                </div>
                <div className='text-center '>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Conform Password
                    </label>
                    <input
                        type="password"
                        placeholder='password '
                        className='border-2 w-70 text-center hover:bg-blue-100 rounded-2xl p-2 items-center text-black focus:outline-none'
                    />

                </div>
                <div className='text-center mt-10 '>
                    <button
                        type="button"
                        onClick={()=> {
                            setTimeout(()=>{
                                alert("Password is changed")
                            },2000);
                        }}
                        placeholder='submit'
                        className='border transform translate active:translate-y-1 active:shadow-2xl border-blue-400 w-50 text-center bg-blue-400 cursor-pointer rounded-xl p-2 items-center text-black focus:outline-none'
                    > Procide  </button>
                </div>
                {/* <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div> */}
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