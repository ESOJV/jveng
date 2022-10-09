import React from 'react'

const Navbutton = ({buttonText, marginLeft, marginRight, marginTop}) => {
  return (
    <div>
    <button className='border-4 border-dashed rounded-full border-blue-700 text-black p-2 text-sm font-bold'>
        {buttonText}
    </button>

    </div>
  )
}

export default Navbutton