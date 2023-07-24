import React, { useEffect, useRef, useState } from 'react'
import SearchService from '../API/SearchService';
import UniversitiesList from '../components/UniversitiesList';
import Loader from '../components/Loader';
import Search from '../components/Search';
import Observer from '../components/Observer';
import {BsArrowUpSquare} from "react-icons/bs";
import ArrowUp from '../components/ArrowUp';
import useObserver from '../hooks/useObserver';

function AllUniversititesList() {
  const [loading, setLoading] = useState(false);
  const [listOfUnis, setListOfUnis] = useState([]);
  const [reset, setReset] = useState(false);
  const [allData, setAllData] = useState([]);
  const [isSearched, setSearched] = useState(false);
  const [limit, setLimit] = useState(21); 
  const lastElement = useRef();

  async function fetchAllUnis() {
    setLoading(true);
    const result = await SearchService.getAllUniversities();
    setListOfUnis(result);
    setLoading(false)
    setAllData(structuredClone(result));
  }
   
  useEffect(() => {
    if(!listOfUnis.length) {
          fetchAllUnis();
    }
  }, [listOfUnis.length])

  
  useObserver(lastElement, () => setLimit(limit + 20), [lastElement.current, limit, isSearched])

  useEffect(() => {
    if(reset) {
      setListOfUnis(allData);
      setLimit(limit);
      setSearched(false);
    }
  }, [reset])

  return (
    <section className='min-h-screen bg-slate-200 pt-[7%] '>
      <Search data = {listOfUnis} setData = {setListOfUnis} setReset={setReset} setSearched = {setSearched} disabled = {loading} />
        <div className='max-w-5xl mx-auto'>
            <h3 className='text-3xl text-[forestgreen]'>List of universities</h3>
            {!loading && (
               <p className='text-lg'>found<span className='font-bold  px-1 text-xl'>{listOfUnis.length}</span>{listOfUnis.length > 1 ? "results" : "result"}</p>
            )}
        </div>
        {loading && (
        <div className='flex justify-center items-center mt-4'>
          <Loader/>
        </div>
        )}
         {!loading && listOfUnis && listOfUnis.length > 0 &&  <UniversitiesList info = { listOfUnis} limit = {limit} setLimit={setLimit}/>}
         {!listOfUnis.length && isSearched && (<div className='min-h-[40vh] flex justify-center items-center'>
          <span className='text-xl'>no data found</span>
         </div>
         )}
          {!loading && !isSearched && limit <= listOfUnis.length && (
              <div className='flex justify-center' ref={lastElement}><Loader/></div>
          )}
        <ArrowUp/>
    </section>
  )
}

export default AllUniversititesList