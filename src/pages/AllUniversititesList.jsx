import React, { useEffect, useState } from 'react'
import SearchService from '../API/SearchService';
import UniversitiesList from '../components/UniversitiesList';
import Loader from '../components/Loader';
import Search from '../components/Search';

function AllUniversititesList() {
  const [loading, setLoading] = useState(false);
  const [listOfUnis, setListOfUnis] = useState([]);
  const [reset, setReset] = useState(false);
  const [allData, setAllData] = useState([]);

  async function fetchAllUnis() {
    setLoading(true);
    const result = await SearchService.getAllUniversities();
    setListOfUnis(result);
    setLoading(false);
    setAllData(structuredClone(result))
  }

  useEffect(() => {
    if(!listOfUnis.length) {
          fetchAllUnis() 
    }

  }, [])
  return (
    <section className='min-h-screen bg-slate-200 pt-[7%] '>
      <Search data = {listOfUnis} setData = {setListOfUnis} setReset={setReset} />
        <div className='max-w-5xl mx-auto'>
            <h3 className='text-3xl text-[forestgreen]'>List of universities</h3>
        </div>
        {loading && (
        <div className='flex justify-center items-center mt-4'>
          <Loader/>
        </div>
        )}
         {!loading && listOfUnis && listOfUnis.length > 0 &&  <UniversitiesList info = {reset ? allData : listOfUnis}/>}
    </section>
  )
}

export default AllUniversititesList