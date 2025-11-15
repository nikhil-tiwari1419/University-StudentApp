import React, { useContext, useState } from "react";
import loadingGif from "./assets/loading.gif";
import SignupImg from "./assets/loginImg.gif";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { AppContext } from "./context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

function Signup() {
  const { backendUrl, setIsLoggedin, getUserData } = useContext(AppContext);
  const navigation = useNavigate();

  const [mode, setMode] = useState("login"); // "login" or "signup"
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isValidPassword, setValidPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isVerify, setVerify] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const setPasswordd = (e) => {
    const value = e.target.value;
    setPassword(value);

    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!regex.test(value)) {
      setError(
        "1. Ensure that password contains both upper and lowercase letters.<br />" +
        "2. Include symbols like @ , _ , # , * and/or numbers."
      );
      setValidPassword(false);
    } else if (value.length > 15) {
      setError("Password must not be more than 13 characters.");
      setValidPassword(false);
    } else {
      setError("");
      setValidPassword(true);
    }
  };

  const verifybtn = () => {
    setVerify(true);
    setTimeout(() => {
      setVerify(false);
      toast.success("Email verified!");
    }, 2000);
  };

  // Backend logic from hear 
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      axios.defaults.withCredentials = true;

      if (mode === "signup") {
        const { data } = await axios.post(`${backendUrl}/api/auth/register`, {
          name,
          email,
          password,
        });

        if (data.success) {
          toast.success("Account created successfully!");
          setIsLoggedin(true);
          getUserData();
          navigation("/App/Home");
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(`${backendUrl}/api/auth/login`, {
          email,
          password,
        });

        if (data.success) {
          setIsLoggedin(true);
          getUserData();
          toast.success("Logged in successfully!");
          navigation("/App/Home");
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <div className="mx-auto max-w-md w-full flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-300 to-pink-300">
      <div className="w-[360px] backdrop-blur-md bg-white/50 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          {mode === "login" ? "Welcome Back" : "Create Account!"}
        </h2>
        <p className="text-md text-center text-gray-500 mb-6">
          {mode === "login" ? "Login to continue" : "Join us by signing up"}
        </p>

        <form onSubmit={onSubmitHandler} className="space-y-4">
          {mode === "signup" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Your Name"
                required
                className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          )}

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <div className="mt-2">
              {!isVerify ? (
                <button
                  type="button"
                  disabled={!email}
                  onClick={verifybtn}
                  className={`cursor-pointer text-sm px-3 py-1 rounded-2xl ${email
                    ? "bg-lime-400 hover:bg-blue-700"
                    : "bg-gray-400 cursor-not-allowed"
                    }`}
                >
                  Verify
                </button>
              ) : (
                <div className="flex justify-center items-center w-full">
                  <img src={loadingGif} alt="loading" className="h-8" />
                </div>
              )}
            </div>

            <label className="block text-sm font-medium text-gray-700 mt-3 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={setPasswordd}
                placeholder="Enter your password"
                required
                pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}"
                className={`text-black w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${error
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-indigo-400"
                  }`}
              />
              <div
                onClick={togglePasswordVisibility}
                className="absolute top-3 right-3 cursor-pointer text-gray-600"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>

            {error && (
              <div
                className="text-red-600 text-sm mt-1"
                dangerouslySetInnerHTML={{ __html: error }}
              />
            )}
          </div>

          {mode === "login" && (
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-purple-600 border-gray-300 rounded"
                />
                <label className="ml-2 text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <button
                onClick={() => navigation("/App/ChangePass")}
                type="button"
                className="text-sm text-purple-600 hover:underline"
              >
                Forgot Password?
              </button>
            </div>
          )}

          <button
            type="submit"
            disabled={mode === "signup" && !isValidPassword}
            className={`w-full py-2 rounded-lg font-semibold transition ${mode === "signup" && !isValidPassword
              ? "bg-gray-400 text-gray-700 cursor-not-allowed"
              : "bg-purple-800 text-white hover:bg-indigo-600"
              }`}
          >
            {mode === "login" ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          {mode === "login" ? (
            <>
              Don’t have an account?{" "}
              <span
                onClick={() => setMode("signup")}
                className="text-purple-600 cursor-pointer hover:underline"
              >
                Sign up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setMode("login")}
                className="text-purple-600 cursor-pointer hover:underline"
              >
                Login
              </span>
            </>
          )}
        </p>

        <img className="mx-auto h-40 w-52 mt-4" src={SignupImg} alt="login" />
      </div>
    </div>
  );
}

export default Signup;
