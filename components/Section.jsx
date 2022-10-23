import React from 'react'
import { useState } from 'react'

const Section = ({sectionTitle, sectionContent, children}) => {
  
  //The state for the accordion section
  const [isOpen, setIsOpen] = useState(true)

  const handleClick = () => {
    isOpen == true ? setIsOpen(false) : setIsOpen (true)

  }

  const toggleIcon = () => {
    if(isOpen == true){
      return("+")
    }
    else {
      return('-') 
    }
  }

  const ToggleText = () => {
    if(isOpen == true){
      return( 
      <p className='border-l-2 border-t-0 border-r-2 border-b-2 border-dashed border-black mt-1 text-black py-2 px-4'>
         {sectionContent} 
         {children}
      </p>)
    }
  
    return('')


  }

  return (
    <div className='flex flex-col mx-8 mb-8 mt-2'>
        <div className='relative h-8 w-auto bg-blue-700 border-2 border-black' 
        onClick={() => handleClick()}>  

      <span className='absolute right-3 text-white'> {toggleIcon()} </span>
          {sectionTitle} </div>
        
      <ToggleText/>
    </div>
  )
}

export default Section
