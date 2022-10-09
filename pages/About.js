import React from 'react'
import Pagetemplate from '../components/Pagetemplate'
import Postsgrid from '../components/Postsgrid'
import { getPosts } from '../Services';
import Image from 'next/image';


const About = () => {
  return (
    <div className= 'flex flex-col '>
     <Pagetemplate>
     <div>

      <div className='flex- flex-col text-black text-4xl'>

        <div className='text-center mt-4 text-8xl'> Howdy! </div>

        <div className='absolute bottom-100 right-100'>
          <Image src = "/Image.png"
          alt = 'something went horribly wrong'

          height = {800}
          width = {300}
          /> 
        </div>

      </div>
    </div>
    </Pagetemplate>

    </div>
  )
}

export default About