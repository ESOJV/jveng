import React from 'react'
import Pagetemplate from '../components/Pagetemplate'
import Postsgrid from '../components/Postsgrid'
import { getPosts } from '../Services';

const Projects = () => {
  return (
  <Pagetemplate>

    <Postsgrid/>

  </Pagetemplate>
  )
}

export default Projects


export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }

}