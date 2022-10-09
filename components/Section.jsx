import React from 'react'

const Section = ({sectionTitle, sectionContent}) => {
  return (
    <div className='flex flex-1 flex-col mx-4'>
    <details open className='h-8 w-auto bg-blue-700 border-2 border-black'>
      <summary>{sectionTitle} </summary>
        <div className='border-l-2 border-t-0 border-r-2 border-b-2 border-dashed border-black mt-1'>
            <p className='text-black'>
            {sectionContent}
            </p>
        </div>
    
    </details>

</div>
  )
}

export default Section
