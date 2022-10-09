import React from 'react'
import Borderframe from '../components/Borderframe'
import Navbar from '../components/Pagetemplate'
import Section from '../components/Section'
import { getPosts } from '../Services';


const Testblog = ({posts}) => {
  return (


    <div className='flex flex-1 flex-col bg-white w-screen h-screen'>

        <Navbar/>

        <Borderframe>
        
        
        <div className='text-center text-black font-bold my-4'>
        
        {posts.map((post) => (
             
              <div>
                <div className='font-semibold'>
                {post.node.title}
                </div>

                <div className=' text-slate-600'>
                {post.node.excerpt}
                </div>

            
                <Section 
                    sectionTitle = {post.node.sectionTitle1}
                    sectionContent = {post.node.sectionContent1}
                  />
     
          
                </div> 
            ))}
   
        </div>

      

        </Borderframe>


    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}

export default Testblog

