import React from 'react'

const NavHeader = ({text}) => {
  
  return(
    <div className='flex-1 flex-col text-center underline mt-2'>
      <div className='text-black hover:text-yellow-400'>
       1. {text} 
      </div>
    </div>
  )}

export default NavHeader