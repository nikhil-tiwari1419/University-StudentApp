import React, { useState } from "react";
import SignupImg from "./assets/undraw_login.png"
import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";



import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";

function Signin() {

    const submitHandeler = (e) => {
        e.preventDefault()
        console.log(email)
        console.log(password)
        setEmail('')
        setPassword('')
        handelGetMainlayout();
    }


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [seePassword, setSeePassword] = useState(false);
    const togglePasswordVisibility = () => {
        setSeePassword(prev => !prev)
    };

    let navigate = useNavigate();


    const handleGetSignup = () => {
        navigate("/Signup");
    };

    const handelGetMainlayout = () => {
        navigate("/App/Home")
    }

    const handelGetforgotPass = () => {
        navigate("/ForgotPass")
    }

    const handleGetfirst = () => {
        navigate("/")
    }

    return (
        <div className="flex mx-auto max-w-md w-full items-center justify-center min-h-screen bg-gradient-to-b from-blue-300 to-pink-300">
            <div className="h-[650px] w-[360px] backdrop-blur-md bg-white/50 rounded-lg shadow-md p-8">
                <h2 className="text-black text-3xl font-bold text-center mb-2"> Welcome Back</h2>
                <button onClick={handleGetfirst}>
                    <BsArrowLeftShort className='text-black text-3xl cursor-pointer' />
                </button>
                <p className="text-center text-gray-600 mb-6">Sign in to continue</p>

                <form
                    onSubmit={(e) => {
                        submitHandeler(e)
                    }}
                >
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="example@email.com"
                            className="text-black w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                    </div>

                    <div className="mb-4 relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type={seePassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="text-black w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                        <div
                            onClick={togglePasswordVisibility}
                            className="absolute inset-y-11.5 right-5 flex items-center cursor-pointer text-gray-600"
                        >
                            {seePassword ? <FaEye /> : <FaEyeSlash />}
                        </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="w-4 h-4 text-purple-600 border-gray-300 rounded"
                            />
                            <label className="ml-2 text-sm text-gray-700">Remember me</label>
                        </div>
                        <button
                            onClick={handelGetforgotPass}
                            type="button"
                            className="text-sm text-purple-600 hover:underline">
                            Forgot Password?
                        </button>
                    </div>

                    <button onClick={handelGetMainlayout}
                        type="submit"
                        className="cursor-pointer w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md"
                    >
                        Login
                    </button>

                    <p className="text-center text-sm text-gray-600 mt-4">
                        Don’t have an account?{" "}
                        <button type="button"
                            onClick={handleGetSignup}
                            className="text-purple-600 hover:underline">
                            Sign up
                        </button>
                    </p>
                </form>
                <img className='mx-auto h-50 pt-10 w-52' src={SignupImg} alt="login_img" />

            </div>
        </div>
    )
}

export default Signin;