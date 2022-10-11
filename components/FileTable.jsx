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
    </div>
  )
}

export default FileTable