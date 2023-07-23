import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import SearchService from '../API/SearchService';
import Loader from '../components/Loader';
import UniversitiesList from '../components/UniversitiesList';
import Search from '../components/Search';
import Observer from '../components/Observer';

function UniversitiesByCountry() {
  const [loading, setLoading] = useState(false);
  const [universities, setUniversities] = useState([]);
  const [allData, setAllData] = useState([]);
  const params = useParams();
  const searchWord = params.country;
  const [reset, setReset] = useState(false);
  const [searched, setSearched] = useState(false);
  const [limit, setLimit] = useState(20);

  async function loadUniversities() {
    if(!universities.length) {
        setLoading(true);
        const result = await SearchService.getUnivercitiesByKeyword('country', searchWord);
        setUniversities(result);
        setAllData(structuredClone(result));
        setLoading(false);
  }
 }

  useEffect(() => {
    loadUniversities();
  }, [searchWord])

useEffect(() => {
  if(reset) {
    setUniversities(allData);
    setLimit(limit)
  }
}, [reset])
  return (
    <section className='min-h-screen bg-slate-200 pt-[7%] '>
      <Search data = {universities} setData = {setUniversities} setReset={setReset} setSearched = {setSearched} disabled = {loading} />
        <div className='max-w-5xl mx-auto'>
            <h3 className='text-3xl text-[forestgreen]'>List of universities for country <span className='font-bold italic tracking-widest'>{searchWord}</span></h3>
            {!loading && (
                <p className='text-lg'>found<span className='font-bold  px-1 text-xl'>{universities.length}</span>{universities.length > 1 || universities.length === 0  ? "results" : "result"}</p>
            )}
            
        </div>
        {loading && (
        <div className='flex justify-center items-center mt-4'>
          <Loader/>
        </div>
        )}
         {!loading && !universities.length && (
            <div className='flex justify-center items-center mt-[5%]'>
              <span className='text-xl'>no data found, try another keyword</span>
            </div>
         )}

         {!loading && universities && universities.length > 0 &&  <UniversitiesList info = {universities} limit = {limit} setLimit={setLimit}/>}
         {!loading && universities.length >= limit && <Observer limit ={limit} setLimit={setLimit}/>}
    </section>
  )
}

export default UniversitiesByCountry