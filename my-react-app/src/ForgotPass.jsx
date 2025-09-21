import React, { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
// import ForgootPassword from "./assets/undraw_forgotpassword.png";


import { IoIosUnlock } from "react-icons/io";
import { FaMobileAlt } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { CgPassword } from "react-icons/cg";

import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
function ForgotPass() {

    const [step, setstep] = useState(1);
    const [email, setemail] = useState("");
    const [contactMethod, setContactMethod] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handelNext = () => {
        setstep(step + 1);
    };
    const handelprev = () => {
        setstep(step - 1);
    };
    const handelUpdate = () => {
        setstep(4);
    };

    const directionPass = useNavigate();
    const handleTOSignin = () => {
        alert("Redirecting to login page");
        directionPass("/Signin")
    }
    const Signin = () => {
        directionPass("/Signin")
    }

    const [seeNewPassword, setSeeNewPassword] = useState(false);
    const [seeConfirmPassword, setSeeConfirmPassword] = useState(false);

    const toggleNewPasswordVisibility = () => {
        setSeeNewPassword(!seeNewPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setSeeConfirmPassword(!seeConfirmPassword);
    };


    return (
        <div className="bg-gradient-to-b mx-auto max-w-md w-full text-black app-background min-h-screen overflow-hidden px-4 py-5 ">
            {step === 1 && (
                <div
                    className="text-center">
                    <h2 className="text-2xl  font-bold "> Forget Password</h2>
                    <span
                        onClick={Signin}
                        className="text-4xl cursor-pointer">
                        <BsArrowLeftShort />
                    </span>
                    <div className=" text-7xl p-10 mb-10 rounded items-center flex flex-col">
                        <IoIosUnlock />
                        <h1 className="text-4xl font-bold ">FORGET <br /> PASSWORD</h1>
                        <h4 className="text-xl mt-4">provide your account's email for which you want to reset your password </h4>
                    </div>
                    <input type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        className="w-full border-teal-600 px-4 py-2 border-3 focus:outline-none rounded-lg mb-4"
                    />
                    <button
                        disabled={!email.trim()}
                        className={`w-full text-black py-2 rounded-lg  ${email.trim() ? " bg-yellow-400 cursor-pointer" : "opacity-50 bg-yellow-100 cursor-not-allowed"} `}
                        onClick={handelNext}
                    >NEXT
                    </button>
                    <h4 className="flrx flex-col pt-75"> &copy; RTMNU Support / management  </h4>

                </div>
            )}


            {step === 2 && (
                <div className="text-center">
                    {/* <h2 className="text-2xl text-black font-bold mb-5">MAKE SELECTION</h2> */}
                    <span
                        onClick={handelprev}
                        className="text-4xl cursor-pointer ">
                        <BsArrowLeftShort />
                    </span>
                    <h4>select which contact details should we use to reset we your password ?</h4>
                    <button
                        className={`w-full text-black py-2 border border-none cursor-pointer rounded-lg mb-2 ${contactMethod === "sms" ? "bg-gray-200" : ""
                            }`}
                        onClick={() => setContactMethod("sms")}
                    >
                        <span className="text-9xl items-center flex flex-col p-10">
                            <FaMobileAlt />
                        </span>
                        Via SMS (+91-123456789)
                    </button>
                    <button
                        className={`w-full text-black py-2 border border-none cursor-pointer rounded-lg mt-5 ${contactMethod === "mail" ? "bg-gray-200" : ""
                            }`}
                        onClick={() => setContactMethod("mail")}
                    >
                        <span className="text-9xl items-center flex flex-col  p-10">
                            <FaMailBulk />
                        </span>
                        Via Email (support@gmail.com)
                    </button>
                    <button
                        className="mt-4 bg-yellow-400 text-black py-2 pt-5 w-full cursor-pointer rounded-lg mb-32"
                        onClick={handelNext}
                        disabled={!contactMethod}
                    >
                        NEXT
                    </button>
                    <h4> &copy; RTMNU Support / management  </h4>
                </div>
            )}
            {step === 3 && (
                <div className="text-center">
                    <h2 className="text-xl font-bold mb-5">NEW CREDENTIALS</h2>
                    <span
                        onClick={handelprev}
                        className="text-4xl cursor-pointer">
                        <BsArrowLeftShort />
                    </span>
                    <h4>Your identity has been verifyed <br /> Set Your new password</h4>
                    <span className="text-9xl items-center flex flex-col p-20">
                        <CgPassword />
                    </span>
                    <input
                        type={seeNewPassword ? "text" : "password"}
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full focus:outline-none px-4 py-2 border rounded-lg mb-6"
                    />
                    <div
                        onClick={toggleNewPasswordVisibility}
                        className=" fixed top-115 right-13 transform -translate-y-1/2 cursor-pointer text-gray-600"
                    >
                        {seeNewPassword ? <FaEye /> : <FaEyeSlash />}
                    </div>
                    <input
                        type={seeConfirmPassword ? "text" : "password"}
                        placeholder="Confirm New Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full focus:outline-none px-4 py-2 border rounded-lg mb-4"
                    />
                    <div
                        onClick={toggleConfirmPasswordVisibility}
                        className=" fixed top-132 right-13 transform -translate-y-1/2 cursor-pointer text-gray-600"
                    >
                        {seeConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                    </div>
                    <button
                        className="w-full bg-yellow-400 text-black py-2 rounded-lg "
                        onClick={handelUpdate}
                    >
                        UPDATE
                    </button>
                    <h4 className="pt-68"> &copy; RTMNU Support / management  </h4>

                </div>
            )}
            {step === 4 && (
                <div className="text-center">
                    <h2 className="text-xl font-bold mb-5">PASSWORD UPDATED</h2>
                    <span
                        onClick={handelprev}
                        className="text-4xl cursor-pointer">
                        <BsArrowLeftShort />
                    </span>
                    <p>Your password has been updated successfully.</p>
                    <button
                        type="submit"
                        className="mt-4 w-full bg-black text-white py-2  rounded-lg "
                        onClick={handleTOSignin}
                    >
                        LOGIN
                    </button>
                    <h4 className="pt-173"> &copy; RTMNU Support / management  </h4>

                </div>
            )}
        </div>
    )
}

export default ForgotPass;