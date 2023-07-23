import React, { useContext, useEffect, useState } from 'react'
import { UnisContext } from '../context'
import { useParams } from 'react-router-dom';
import UniversitiesList from '../components/UniversitiesList';
import SearchService from '../API/SearchService';
import useFilter from '../hooks/useFilter';
import Loader from '../components/Loader';
import Search from '../components/Search';
import Observer from '../components/Observer';

function Universities() {
  const  [loading, setLoading] = useState(false);
  const {universities, setUniversities} = useContext(UnisContext);
  const [allData, setAllData] = useState([]);
  const filtered = useFilter(universities);
  const params = useParams();
  const searchWord = params.keyword;
  const [limit, setLimit] = useState(20);
  const [reset, setReset] = useState(false);
  const [isSearched, setSearched] = useState(false);
  async function observeUpload() {
    if(!universities.length) {
        setLoading(true);
        const result = await SearchService.getUnivercitiesByKeyword('name', searchWord);
        setUniversities(result);
        setAllData(result);
        setLoading(false);
    }else {
      setUniversities(filtered);
    }
  }

  useEffect(() => {
    observeUpload()
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

         {!loading && universities && universities.length > 0 &&  <UniversitiesList info = {filtered} limit = {limit} setLimit={setLimit}/>}
         {!loading && universities.length >= limit && <Observer limit ={limit} setLimit={setLimit}/>}
        
    </section>
  )
}

export default Universities