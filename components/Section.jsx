import React from 'react'

const Section = ({sectionTitle, sectionContent}) => {
  return (
    <div className='flex flex-1 flex-col mx-4'>
    <details open className='h-8 w-auto bg-blue-700 border-2 border-black'>
      <summary>{sectionTitle} </summary>
        <div className='border-l-2 border-t-0 border-r-2 border-b-2 border-dashed border-black mt-1'>
            <p className='text-black'>
            {sectionContent}
            <table class="table-auto w-full">
  <thead>
    <tr>
      <th className='text-left ml-4'>TITLE</th>
      <th className='text-left'>DESCRIPTION</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
         <a className='text-left ml-4 text-yellow-500 hover: text-underline' href="https://hackaday.com/blog/"> Hackaday </a> 
      </td>
      <td>
        A general hardware blog, posts often 
      </td>
    </tr>
    </tbody>
    </table>  

            </p>
        </div>
    
    </details>

</div>
  )
}

export default Section
