import Link from 'next/link'
import React from 'react'

//Will create a page template, includes the navbar and a Border frame
//border frame will place children components in a flex row of divs`

export const Navbar = () => {
  return (
    <div>
    
    <div className='w-screen h-16 bg-blue-700 items-center justify-center'>
        <nav className='flex w-screen items-center justify-center text-white'>
          
          <div className="font-bold flex-1 flex justify-end ml-8 text-xl space-x-4 ">
           
            <Link href= "/About">
            <a className='mx-2'> ABOUT </a>
            </Link>
            
            <Link href= "/Resources">
            <a className='mx-2'> RESOURCES </a> 
            </Link>
          
          </div>

          <Link href= "/"> 
          <div className="font-bold mx-3 text-5xl p-1 rounded-lg border-4 hover:border-dashed space-x-4"> JV.ENG</div>
          </Link> 

          <div className="font-bold flex-1 flex justify-start mr-8 text-xl">

            <Link href= "/Projects"> 
            <a className='mx-2'> PROJECTS </a>
            </Link> 

            <Link href= "/Blogs"> 
            <a className='mx-2'> BLOGS </a>   
            </Link> 

          </div>
        
        </nav>
      </div>

    </div>
  )
}

export const Borderframe = ({children}) => {
  return (
    <div className='min-h-screen h-auto w-auto creen border-[25px] border-solid border-blue-700 bg-slate-100'>
    
 
    {children}

    </div>
  )
}




const Pagetemplate = ({children} ) => {
  return (
  
    <div className=' flex flex-col overflow-auto'> 

    <Navbar />

    <Borderframe>

   {children}  

   </Borderframe>
 
    </div>
    


    )
}

export default Pagetemplate