import React from 'react'
import { Link } from 'react-router-dom'
import HomeSearch from '../components/HomeSearch'

function Home() {
  return (
    <section className='min-h-screen bg-slate-200 flex flex-col justify-center items-center'>
        <div className='text-[26px] text-[#6a16b9c2] max-w-3xl text-center'>
            <p>
                Find your dream University~
            </p>  
            <p>
                On our site you can find thousands of universities which are located in different countries
            </p>
        </div>
        <HomeSearch/> 
        <Link to="/universities" className='mt-[20px] block hover:scale-105 transition-all text-lg text-[brown]'>or view all universities at once</Link>
     
    </section>
  )
}

export default Home