import React from 'react'

const Button = ({styles  ,children}) =>(
  <button className={` text-center py-[10px] rounded-[10px] ${styles} font-bold shadow-lg
   transition-all duration-500 ease-in-out transform hover:shadow-2xl hover:scale-1051`}>
    <span >
    {children}
      </span>

  </button>
  )

export default Button;