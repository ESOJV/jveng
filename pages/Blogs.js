import React from 'react'
import Postsgrid from '../components/Postsgrid' 
import Pagetemplate from '../components/Pagetemplate'
import { getPosts } from '../Services';

const Blogs = ( {posts} ) => {
  return (
  <Pagetemplate>
    
    <Postsgrid props = { posts } />

  </Pagetemplate>
  )
}

export default Blogs

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }

}