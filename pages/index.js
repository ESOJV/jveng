import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Pagetemplate';
import Postsgrid from '../components/Postsgrid';
import { getPosts } from '../Services';
import Homeposts from '../components/Homeposts';
import Pagetemplate from '../components/Pagetemplate';
import Projectbars from '../components/Projectbars';

export default function Home({posts}) {

  return (
    <div className='selection:bg-yellow-400'>      
      
      <Head>
        
        <title> JV.ENG </title>
      
      </Head>
    
   

    <Pagetemplate>
      <Projectbars>
      
      <Homeposts props = { posts } />

      </Projectbars>
    </Pagetemplate>
  
    </div>

  

    
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }

}