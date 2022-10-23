import React from 'react'

//get from json 
let resource = {
    ResourceName: 'Hackaday',
    link: 'https://hackaday.com/blog/',
    desc: 'A general hardware blog',

}
let links = []
let desc = []

const FileTable = ({link, post }) => {
  return (
    <div>
        <table class="table-auto w-full text-black ">
            <thead>
                <tr className=' bg-blue-400'>
                    <th className='text-left ml-4'>TITLE</th>
                    <th className='text-left'>DESCRIPTION</th>
                 </tr>
            </thead>
            <tbody>
                <tr className = 'border-b border-black'>
                    <td className='border-r border-black'>
                        <a className='text-left ml-4 text-blue-700 hover:underline' href="https://hackaday.com/blog/"> Hackaday </a> 
                    </td>
                    <td className = 'text-black'>
                        A general hardware blog, posts often 
                    </td>
                </tr>
            </tbody>
        </table>  
    </div>
  )
}

export default FileTable