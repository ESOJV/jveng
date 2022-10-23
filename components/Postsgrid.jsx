import React from 'react'


const Postsgrid = ( {props} ) => {
  return (
    
    
      <div>
         <div className='mt-8 grid grid-cols-5  gri-rows-auto gap-2'>
            {props.map((post) => (
              <div className='h-64 w-64 text-black text-sm border-4 rounded-md border-dashed border-blue-700 mx-4 hover:border-solid hover:bg-blue-700 hover:text-white p-2' >
                
                <div className='font-semibold'>
                {post.node.title}
                </div>

                <div className='mt-2'>
                {post.node.excerpt}
                </div>

                <div>
                Tags:  
                </div>

                </div> 
            ))}
        </div>       
    </div>
  )
}

export default Postsgrid