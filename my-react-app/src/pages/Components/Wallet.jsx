import { useEffect } from 'react'
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { useState, useRef } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import MoneyGif from '../../assets/money gif.gif';

function Wallet() {

  const [isOpen, setIsOpen] = useState(false);
  const [feesOpen, setFeesOpen] = useState(false);
  const [scholorOpen, setScholor] = useState(false);
  const [eventOpen, setEventOPen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div className='min-h-screen flex-col text-black  mx-auto w-full max-w-md flex bg-gradient-to-b from-blue-300 via-white to-violet-300 pb-20'>
      <div className='text-black font-bold text-2xl flex item-center justify-center pt-6'>
        ----Wallet----
      </div>
      {/*  Heading */}
      <div className='px-10 shadow-2xs border border-blue-500 m-4 rounded bg-gradient-to-b from-blue-200 to-blue-300   '>
        <h3
          onClick={() => setIsOpen(!isOpen)}
          className='flex items-center my-3 cursor-pointer text-bold  text-black'>
          <span className='border border-blue-800 p-2 rounded bg-gradient-to-b  from-cyan-200 to-pink-200'>
            {isOpen ? "Hide wallet " : "Show Wallet "}
          </span>
          <FaRegArrowAltCircleUp className={`mx-3 text-lg rounded-2xl bg-pink-200 cursor-pointer  transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`} />
        </h3>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: height, opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className=' overflow-hidden mb-3 '>

              <div ref={contentRef} className='border text-white  border-white p-2 rounded bg-blue-500'>
                <p>Current Amount :-45000 </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className='border border-blue-200 h-full p-2 mb-3 rounded shadow-2xl'>
          <h3 className='text-center underline-offset-4 cursor-pointer underline'>College Fees Payment</h3>
          <div className='flex flex-col justify-center '>
            <span>Total_fees :-</span>
            <span> Paid fees :-</span>
            <span>Date :- </span>    time :-
          </div>
        </div>
        {/* Fees reminder  */}
        <div className='border rounded border-blue-500 h-full p-2 mb-3 ' >
          <h3
            onClick={() => setFeesOpen(!feesOpen)}
            className='underline text-center underline-offset-4  cursor-pointer'>Fees reminder & Alerts </h3>
          <AnimatePresence>
            {feesOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: height, opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className='overflow-y-auto shadow-2xl border rounded border-blue-500 pb-20 mt-1'
              >
                <p>📅 Due Date: 25 Aug 2025</p>
                <p>💰 Amount: ₹5,000</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* scholorship  */}
        <div className='border rounded shadow-2xl border-blue-500 h-full p-2  mb-3' >
          <h3
            onClick={() => setScholor(!scholorOpen)}
            className='underline text-center cursor-pointer underline-offset-4'>Scholorship refund  </h3>
          <AnimatePresence>
            {scholorOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: height, opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className='overflow-y-auto  border rounded border-blue-500 pb-20 mt-1'
              >
                <p>💸Total:- 52000 </p>
                <p>💰Refund :- 25000</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* Event organisation  */}
        <div className='border rounded shadow-2xl border-blue-500 h-full p-2 mb-3' >
          <h3
            onClick={() => setEventOPen(!eventOpen)}
            className='text-center underline underline-offset-4 decoration-yellow-500 text-xl fonl-bold cursor-pointer '>Event fees and Management </h3>
          <AnimatePresence>
            {eventOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 1, opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className='mt-3 p-2 border border-yellow-500 rounded pb-35 '
              >
                <p>Tech :-</p>
                <p>College anual event :-</p>
                <p>Special event :-</p>
                <p>Cultural event:-</p>
                <p>Spoets event :-</p>

              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <img
          src={MoneyGif}
          alt="paisa Gif"
          className='my-6 h-30 mx-auto cursor-pointer mt-40'
        />

      </div>
    </div>
  )
}


export default Wallet