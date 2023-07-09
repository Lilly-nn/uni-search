import React, { useEffect, useRef, useState } from 'react'
import SearchService from '../API/SearchService';
import UniversitiesList from '../components/UniversitiesList';
import Loader from '../components/Loader';
import Search from '../components/Search';

function AllUniversititesList() {
  const [loading, setLoading] = useState(false);
  const [listOfUnis, setListOfUnis] = useState([]);
  const [reset, setReset] = useState(false);
  const [allData, setAllData] = useState([]);
  const [isSearched, setSearched] = useState(false);
  
  async function fetchInitialData() {
    setLoading(true);
    const result = await SearchService.getAllUniversities();
    setListOfUnis(result);
    setLoading(false);
    setAllData(structuredClone(result))
  }

  useEffect(() => {
    if(!listOfUnis.length) {
          fetchInitialData()
    }
  }, [])

  

  return (
    <section className='min-h-screen bg-slate-200 pt-[7%] '>
      <Search data = {listOfUnis} setData = {setListOfUnis} setReset={setReset} setSearched = {setSearched} disabled = {loading} />
        <div className='max-w-5xl mx-auto'>
            <h3 className='text-3xl text-[forestgreen]'>List of universities</h3>
        </div>
        {loading && (
        <div className='flex justify-center items-center mt-4'>
          <Loader/>
        </div>
        )}
         {!loading && listOfUnis && listOfUnis.length > 0 &&  <UniversitiesList info = {reset ? allData : listOfUnis}/>}
         {!listOfUnis.length && isSearched && (<div className='min-h-[40vh] flex justify-center items-center'>
          <span className='text-xl'>no data found</span>
         </div>

         )}
        
    </section>
  )
}

export default AllUniversititesList