import React, { useState, useRef, useContext } from "react";
import loadingGif from "../../assets/loading.gif";
import SignupImg from "../../assets/loginImg.gif";
import { useTheme } from "../../context/ThemeContext";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import axios from "axios";
import { toast } from "react-toastify";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";


function ChangePass() {
  const [email, setEmail] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [OTP, setOTP] = useState(Array(6).fill(""));
  const [newPass, setNewPass] = useState("");
  const [seePassword, setSeePassword] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  // const [loading, setLoading] = useState(false);


  const navigate = useNavigate();
  const inputRefs = useRef([]);
  const { theme } = useTheme();
  const { backendUrl } = useContext(AppContext); // ✅ Correct constant name (not backendURL)

  axios.defaults.withCredentials = true;

  // 🔹 Step 1 - Send Reset OTP
  const onSubmitEmail = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      const { data } = await axios.post(`${backendUrl}/api/auth/send-reset-otp`, { email });
      setSubmitting(false);
      if (data.success) {
        toast.success(data.message);
        setIsEmailSent(true);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      setSubmitting(false);
      toast.error(error.response?.data?.message || "Failed to send OTP");
    }
  };

  // 🔹 Step 2 - OTP Input Behavior
  const handleInput = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    const newOTP = [...OTP];
    newOTP[index] = value;
    setOTP(newOTP);
    if (value && index < OTP.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !OTP[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text").slice(0, 6);
    const newOTP = paste.split("");
    setOTP(newOTP);
  };

  // 🔹 Step 3 - Reset Password
  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpValue = OTP.join("");
    if (otpValue.length !== 6) return toast.error("Please enter complete 6-digit OTP");

    try {
      setSubmitting(true);
      const { data } = await axios.post(`${backendUrl}/api/auth/reset-password`, {
        email,
        otp: otpValue,
        newPassword: newPass,
      });
      setSubmitting(false);
      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      setSubmitting(false);
      toast.error(error.response?.data?.message || "Password reset failed");
    }
  }
  ;
 // step 4 - Render the component
  const handleNavigatePage = (ev) => {
    ev.preventDefault();
    setSubmitting(true);
    toast.success("Password updated successfully!");
    setTimeout(() => {
      setSubmitting(false);
      navigate('/App/Home');
    }, 1500);
  }
  return (
    <div
      className={`min-h-screen mx-auto max-w-md flex flex-col items-center justify-center px-5 ${
        theme === "dark"
          ? "bg-gray-700 text-white"
          : "bg-[linear-gradient(180deg,_#eaf7f7_0%,_#b6e8f9_40%,_#cfd8fc_70%,_#f7d0f9_100%)] text-black"
      }`}
    >
      <div className="w-full max-w-md border-emerald-800 border-2  rounded-2xl shadow-xl p-6">
        {/* Header */}
        <h2 className="text-center font-extrabold text-2xl mb-2">Change Password</h2>
        <img src={SignupImg} alt="Change Password" className="mx-auto w-48 h-36 mb-4" />

        {/* Step 1 - Email Input */}
        {!isEmailSent ? (
          <form onSubmit={onSubmitEmail} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <button
              type="submit"
              disabled={!email || isSubmitting}
              className={`w-full py-2 rounded-lg text-white font-semibold transition ${
                email && !isSubmitting
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              {isSubmitting ? (
                <img src={loadingGif} alt="Loading..." className="h-6 mx-auto" />
              ) : (
                "Send OTP"
              )}
            </button>
          </form>
        ) : (
          <>
            {/* Step 2 - OTP & Password */}
            <form onSubmit={handleSubmit} className="space-y-5 mt-4">
              {/* OTP Field */}
              <div>
                <label className="block text-sm font-medium mb-1">Enter OTP</label>
                <div
                  className="flex justify-between"
                  onPaste={handlePaste}
                >
                  {OTP.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleInput(e, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      ref={(el) => (inputRefs.current[index] = el)}
                      className="w-10 h-12 text-center text-lg border-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  ))}
                </div>
              </div>

              {/* New Password Field */}
              <div className="relative">
                <label className="block text-sm font-medium mb-1">New Password</label>
                <input
                  type={seePassword ? "text" : "password"}
                  value={newPass}
                  onChange={(e) => setNewPass(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter new password"
                  required
                />
                <span
                  onClick={() => setSeePassword((prev) => !prev)}
                  className="absolute right-8 top-11 transform -translate-y-1/2  cursor-pointer"
                >
                  {seePassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                onClick={handleNavigatePage}
                disabled={isSubmitting}
                className="w-full bg-blue-600 flex justify-center items-center text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
              >
                {isSubmitting ? (
                  <img src={loadingGif} className="h-7" alt="loading..." />
                ) : (
                  "Update Password"
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default ChangePass;
