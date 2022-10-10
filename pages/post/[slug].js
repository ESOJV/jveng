import React from 'react'
import Navbutton from '../../components/Navbutton'
import Pagetemplate from '../../components/Pagetemplate'
import moment from 'moment'
import {getPosts, getPostDetails } from '../../Services'
import NavHeader from '../../components/NavHeader'
//fix the top bar so you can scroll 
//make the button scroll all the way to the bottom


function greeting(sectionTitle1, SectionTitle2) {
//Next lets render the entierety of the sections

//test when the array actually is "empty"

//Then figure oout how to display images 


const sectionTitle = sectionTitle1

if(sectionTitle != 'empty') {
  return <NavHeader text = {sectionTitle} />
} 

}



const  PostHeader = ({title, excerpt, postTime}) => {
    return(
     <div className='flex-1 flex-col text-black mt-4 text-center'>
        
        <div className='text-7xl font-extrabold ml-4 mr-4'> {title} </div>
        <div className='text-3xl font-semibold italic mb-2 mt-4 '>{excerpt} </div>

        <div className='text-base mt-2'> {moment({postTime}).format('llll')} </div>
        

     </div>
    )}

const PostText = ({markup}) => {
  return(

<div className='text-black mt-8 mx-48 mb-8 '>{markup}</div>
)}


const PostDetails = ({ post }) => {
  return (
     <div className='selection:bg-yellow-400 '>
        <Pagetemplate>
          <div className='ml-4 mt-4'>
          <Navbutton buttonText={'<- HOME'} />
          </div>
          <PostHeader title = {post.title} excerpt = {post.excerpt} postTime = {post.createdAt} />
          {console.log(post.sectionTitle1)}
          {greeting(post.sectionTitle1)}
          <PostText/>
          <div className='absolute bottom-0 left-0 ml-10'>
          <Navbutton buttonText={'LAST POST'}/>
          </div>

          <div className='absolute bottom-0 right-0 mr-10 '>
          <Navbutton buttonText={'NEXT POST->'} />
          </div>
        </Pagetemplate>
    </div>
  )
}


export default PostDetails


export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  return {
    props: { post: data}
  }
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    //destructured the params
    paths: posts.map(({node: {slug}}) => ({ params: {slug}})),
    fallback: false, 
  }
}