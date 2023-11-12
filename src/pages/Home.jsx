import React from 'react'
import Footer from '../components/Footer'
import HotAnime from '../components/HotAnime'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <main className='mt-20 px-[4%]'>
      <Navbar/>
      <HotAnime/>
      <Footer/>
    </main>
  )
}

export default Home