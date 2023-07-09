import React, { useContext, useEffect, useState } from 'react'
import { UnisContext } from '../context'
import { useParams } from 'react-router-dom';
import UniversitiesList from '../components/UniversitiesList';
import SearchService from '../API/SearchService';
import useFilter from '../hooks/useFilter';
import Loader from '../components/Loader';
import Search from '../components/Search';

function Universities() {
  const  [loading, setLoading] = useState(false);
  const {universities, setUniversities} = useContext(UnisContext);
  const filtered = useFilter(universities);
  const params = useParams();
  const searchWord = params.keyword;

  async function observeUpload() {
    if(!universities.length) {
        setLoading(true);
        const result = await SearchService.getUnivercitiesByKeyword('name', searchWord);
        setUniversities(result);
        setLoading(false);
    }else {
      setUniversities(filtered);
    }
  }

  useEffect(() => {
    observeUpload()
  }, [searchWord])
  
  return (
    <section className='min-h-screen bg-slate-200 pt-[7%] '>
        <div className='max-w-5xl mx-auto'>
            <h3 className='text-3xl text-[forestgreen]'>List of universities for keyword <span className='font-bold italic tracking-widest'>{searchWord}</span></h3>
            {!loading && (
               <p className='text-lg'>found<span className='font-bold  px-1 text-xl'>{universities.length}</span>{universities.length > 1 ? "results" : "result"}</p>
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

         {!loading && universities && universities.length > 0 &&  <UniversitiesList info = {filtered}/>}
        
    </section>
  )
}

export default Universities