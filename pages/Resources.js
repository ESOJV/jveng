import React from 'react'
import Pagetemplate from '../components/Pagetemplate'
import Section from '../components/Section'
import Link from 'next/link'
import FileTable from '../components/FileTable'



const  ResourcesHeader = () => {
  return(
   <div className='flex-1 flex-col text-black mt-4 text-center'>
      
      <div className='text-7xl font-extrabold '> RESOURCES </div>
      <div className='text-base mt-4'> Just some cool related websites you might like. For your reference and mine. </div>
      

   </div>
  )}

const NavHeader = () => {
  return(
    <div className='flex-1 flex-col text-center underline mt-2'>
      <div className='text-black hover:text-yellow-400'>
      <Link href = '#Hardware'> 1. Hardware </Link>
      </div>
    </div>
  )}

const Resources = () => {
  return (
    <div>
      <Pagetemplate>
        <div className='flex-1 flex-col'>
          <ResourcesHeader/>
          <NavHeader/>

        <div id='Hardware' className='mt-8'>
          <Section sectionTitle = 'Hardware'>

          <FileTable/>

            </Section>
        </div>

        </div>
      </Pagetemplate>
    </div>
  )
}

export default Resources