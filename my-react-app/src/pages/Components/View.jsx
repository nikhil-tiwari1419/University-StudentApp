import React from 'react'
import { useTheme } from '../../context/ThemeContext'
import { use } from 'framer-motion/m'

function View() {
  const {theme} = useTheme();
  return (
    <div className={`min-h-screen mx-auto max-w-md w-full pb-20 rounded ${theme === 'dark' ? "bg-gray-800 text-white":"text-black bg-gradient-to-b from-blue-200 via-violet-100 to-white"} `}>
        <div className={``}> 
          
        </div>
    </div>
  )
}

export default View