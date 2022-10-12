import React from 'react'

const Section = ({sectionTitle, sectionContent}) => {
  return (
    <div>
    <div className='fart flex flex-col mx-8 '>
    <details open className=' h-8 w-auto bg-blue-700 border-2 border-black'>
      <summary>{sectionTitle} </summary>
        <div className='border-l-2 border-t-0 border-r-2 border-b-2 border-dashed border-black mt-1'>
            <p className='text-black'>
            {sectionContent}
            </p>

           
        </div>
    
    </details>



   
</div>

</div>

  )
}

export default Section
