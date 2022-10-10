import React from 'react'
import Link from 'next/link'
import PostDetails from '../pages/post/[slug]'

const Homeposts = ({props}) => {
  return (
        
       <div>
        
      

          {props.map((post) => (
             
             <div className='mt-8 text-sm border-4 rounded-md border-dashed border-blue-700 mx-4 hover:border-solid hover:bg-blue-700  p-2'>
                  <div className="basis-1/2 text-black hover:text-yellow-400">
             <Link href = {`/post/${post.node.slug}`} >
             <div>
               <div className='font-semibold'>
               {post.node.title}
               </div>

               <div>
               {post.node.excerpt}
               </div>

            </div>
            </Link>
             

            </div>
            </div>
              
           ))}
          
        
       
        </div> 
  )
}



export default Homeposts



