import React from 'react'

//left and right side project bars, theese will display the projects in some form of 3d object or something 
const Modelwrapper = () => {
return(
<div className='border-8 border-dashed '>



</div>
)

}


const Projectbars = ({children}) => {
  return (
<div className="flex flex-row h-screen w-auto bg-slate-100">
        
    <div className="border-r-[35px] border-blue-700  basis-1/4"> left containerss
    
    
    
     </div>

    <div className='basis-1/2'>{children}</div>

    <div className=' border-l-[35px] border-blue-700 basis-1/4'> right container </div>

</div>
  )
}

export default Projectbars






