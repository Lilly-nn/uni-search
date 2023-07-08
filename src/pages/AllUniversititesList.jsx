import React, { useEffect, useState } from 'react'
import SearchService from '../API/SearchService';
import UniversitiesList from '../components/UniversitiesList';
import Loader from '../components/Loader';
import Search from '../components/Search';
import useFilter from '../hooks/useFilter';
import { getPageCount } from '../utils/pages';
import useCreatePagination from '../hooks/useCreatePagination';
import { PaginatedItems } from '../components/Pagination';

function AllUniversititesList() {
  const [loading, setLoading] = useState(false);
  const [listOfUnis, setListOfUnis] = useState([]);
  const [reset, setReset] = useState(false);
  const [allData, setAllData] = useState([]);
  const [isSearched, setSearched] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [paginatedItems, setPaginatedItems] = useState([]); 

  async function fetchAllUnis() {
    setLoading(true);
    const result = await SearchService.getAllUniversities();
    setListOfUnis(result);
    setLoading(false);
    setTotalPages(getPageCount(result.length, 10));
    setAllData(structuredClone(result))
    setPaginatedItems(result.slice(0,11))
  }

  useEffect(() => {
    if(!listOfUnis.length) {
          fetchAllUnis();
    }

  }, [listOfUnis.length])

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
         {!loading && !paginatedItems.length && listOfUnis && listOfUnis.length > 0 &&  <UniversitiesList info = {reset ? allData : listOfUnis}/>}
        {paginatedItems.length > 0 && <UniversitiesList info = {reset ? allData : paginatedItems}/>}
    
         {!listOfUnis.length && isSearched && (<div className='min-h-[40vh] flex justify-center items-center'>
          <span className='text-xl'>no data found</span>
         </div>
         )}
         <PaginatedItems itemsPerPage={10} items={listOfUnis} setItems={setPaginatedItems}/>
    </section>
  )
}

export default AllUniversititesList