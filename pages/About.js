import React from 'react'
import Pagetemplate from '../components/Pagetemplate'
import Postsgrid from '../components/Postsgrid'
import { getPosts } from '../Services';
import Image from 'next/image';


const About = () => {
  return (
    <div className= 'flex flex-col pl-12'>
     <Pagetemplate>
     <div>

      <div className='flex- flex-col text-black text-4xl '>

        <div className='text-center mt-4 text-8xl font-bold w-1/2 pl-4 -rotate-12 '> HOWDY! </div>

        <p className=' text-2xl font-semibold pt-4 w-1/2 text-center pl-8'>
        JV-ENG is a blog created by me! I am Jose Velasco a texas A&M senior studying Electronic Systems Engineering Technology.
        This blog was made mostly for fun, but also as a place to catalog and record my thoughts projects and Ideas. 
        I hope you find some of the information here useful. Click on any of the icons for my email, Github or LinkedIn. Thank you!

        </p>

      <div className=' text-lg absolute inset-x-0 bottom-0 flex-1 flex-row text-blue-700 underline hover:text-yellow-500 text-center	'>
        <a className='pr-8' href="www.linkedin.com/in/jose-velasco-000">
           LINKED IN 
        </a>

        <a className='pr-8' href="/https://github.com/ESOJV">
           GITHUB 
        </a>

        <a className='pr-8' href="/">
           josevelasco06@hotmail.com 
        </a>

        </div>

        <div className='absolute top-16 right-72'>
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