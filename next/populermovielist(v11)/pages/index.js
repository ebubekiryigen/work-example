import Head from 'next/head'
import Image from 'next/image';
import Layout from '../components/layout';
import Populer from '../components/populer';

export default function Home({mov}) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='apps'>
        <Layout></Layout>
        {/* <Image src="/images/p.jpg" width="400" height="400" /> */}
        <h2>Popüler Filimler</h2>
        <Populer movs={mov} />
      </main>
    </div>
  )
}

export async function getServerSideProps(){
   const request = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=9eeb0b846ac072f13656e30b7b61de7e&language=en-US&page=1')
   const mov = await request.json()
   return{
     props:{
       mov
     }
   }
}