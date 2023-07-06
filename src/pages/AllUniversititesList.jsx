import React, { useEffect, useState } from 'react'
import SearchService from '../API/SearchService';
import UniversitiesList from '../components/UniversitiesList';
import Loader from '../components/Loader';

function AllUniversititesList() {
  const [loading, setLoading] = useState(false);
  const [listOfUnis, setListOfUnis] = useState([]);
  async function fetchAllUnis() {
    setLoading(true);
    const result = await SearchService.getAllUniversities();
    console.log(result);
    setListOfUnis(result);
    setLoading(false);
    console.log(result)
  }
  useEffect(() => {
    if(!listOfUnis.length) {
          fetchAllUnis() 
    }

  }, [])
  return (
    <section className='min-h-screen bg-slate-200 pt-[7%] '>
        <div className='max-w-5xl mx-auto'>
            <h3 className='text-3xl text-[forestgreen]'>List of universities</h3>
        </div>
        {loading && (
        <div className='flex justify-center items-center mt-4'>
          <Loader/>
        </div>
        )}
         {!loading && listOfUnis && listOfUnis.length > 0 &&  <UniversitiesList info = {listOfUnis}/>}
    </section>
  )
}

export default AllUniversititesList