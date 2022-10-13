import React from 'react'
import Navbutton from '../../components/Navbutton'
import Pagetemplate from '../../components/Pagetemplate'
import moment from 'moment'
import {getPosts, getPostDetails } from '../../Services'
import NavHeader from '../../components/NavHeader'
import Section from '../../components/Section'
//fix the top bar so you can scroll 
//make the button scroll all the way to the bottom





const  PostHeader = ({title, excerpt, postTime}) => {
    return(
     <div className='flex-1 flex-col text-black mt-4 text-center'>
        
        <div className='text-7xl font-extrabold ml-4 mr-4'> {title} </div>
        <div className='text-3xl font-semibold italic mb-2 mt-4 '>{excerpt} </div>

        <div className='text-base mt-2'> {moment({postTime}).format('llll')} </div>
        

     </div>
    )}



const PostDetails = ({ post }) => {

  const sectionTitles = [post.sectionTitle1, post.sectionTitle2] 

  const sectionContents = [post.sectionContent1, post.sectionContent2]
   
  
  return (
     <div className='selection:bg-yellow-400 '>
        <Pagetemplate>
          <div className='ml-4 mt-4'>
          <Navbutton buttonText={'<- HOME'} />
          </div>
          <PostHeader title = {post.title} excerpt = {post.excerpt} postTime = {post.createdAt} />
          
           {sectionTitles.map((title, index) => {return(
           <>
           <NavHeader text={title} num={index} />
           </>)
           })}

          
           <div className='flex flex-col'>
          {sectionTitles.map((e, index) => {return(
            
            <div>
          
          <Section sectionTitle={e} sectionContent = {sectionContents[index]}/>

          
          </div>
          
          )})}
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