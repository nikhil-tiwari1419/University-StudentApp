import React, { useContext, useEffect } from 'react'
import image from './assets/loginImg.gif';
import axios from 'axios';
import { AppContext } from './context/AppContext';
import { data, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function EmailVerify() {

  axios.defaults.withCredentials = true;
  const { backendUrl, isLoggedin, userData, getUserData } = useContext(AppContext);


  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const inputRefs = React.useRef([])
  const handelInput = (e, index) => {
    if (e.target.value.length > 0 && index < inputRefs.current.length) {
      inputRefs.current[index + 1].focus();
    }
  }

  const handelKeyDown = (e, index) => {
    if (e.key === 'Backspace' && e.target.value === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  }
  const handelPaste = (e) => {
    const past = e.clipboardData.getData('text');
    const pasteValues = past.split('');
    pasteValues.forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = char;
      }
    });
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const otpArray = inputRefs.current.map(e => e.value);
      const otp = otpArray.join('');

      const { data } = await axios.post(backendUrl + '/api/auth/verify-account', { otp });

      if (data.success) {
        toast.success(data.message);
        getUserData();
        navigate('/Signup');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to verify OTP");
    }
  }

   useEffect(() => {
    if (isLoggedin && userData?.IsAccountVerified) {
      navigate('/');
    }
  }, [isLoggedin, userData, navigate]);

  return (
    <div className=" mx-auto max-w-md w-full flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-300 to-pink-300">
      <div className=' bg-amber-100/30 p-5 rounded-xl text-black'>

        <form
          onSubmit={onSubmitHandler}
          className='bg-white/40 p-8 rounded-lg shadow-lg w-96 text-sm'>
          <h1 className='text-black text-2xl font-semibold text-center mb-5'> Email verify  OTP
          </h1>
          <p className='text-center text-lg mb-6 text-indigo-800'> Enter the 6-digit code sent to your email id . </p>

          <div className='flex justify-between mb-8 ' onPaste={handelPaste}>
            {Array(6).fill(0).map((_, index) => (
              <input
                type="text" maxLength='1'
                key={index} required
                className='w-12 h-12 focus:outline-none focus:ring-2 bg-gray-400 text-black border-none text-center text-xl rounded-xl'
                ref={e => inputRefs.current[index] = e}
                onInput={(e) => handelInput(e, index)}
                onKeyDown={(e) => handelKeyDown(e, index)}
              />
            ))}
          </div>
          <button className='w-full py-3 rounded-2xl  bg-indigo-500 hover:bg-blue-400 text-xl '> Verify OTP</button>
        </form>
        <img
          src={image}
          alt="loading"
          className=' h-40  mx-auto  w-52 '
        />
      </div>
    </div>
  )
}

export default EmailVerify;