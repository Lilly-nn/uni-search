import React from 'react'
import SearchInput from '../components/SearchInput'
import SearchSelect from '../components/SearchSelect'
import { Link } from 'react-router-dom'

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
        <SearchInput/> 
        <Link to="/universities" className='mt-[20px]'>or view all universities at once</Link>
     
    </section>
  )
}

export default Home