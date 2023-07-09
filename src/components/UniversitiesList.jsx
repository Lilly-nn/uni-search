import React, { useEffect, useRef, useState } from 'react'
import UniversitiesItem from './UniversitiesItem'
import SearchService from '../API/SearchService';

function UniversitiesList({info}) {
  const lastElement = useRef();
  const observer = useRef();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
   setData(structuredClone(info))
  }, [])

  async function fetchAllUnis() {
    setLoading(true);
    const result = await SearchService.getAllUniversities();   
    setData([...data, ...result]);
    setLoading(false);
  }

  useEffect(() => {
    if(loading) return;
    if(observer.current) observer.current.disconnect();
     const callback = (entries, observer) => {
      if(entries[0].isIntersecting) {
        fetchAllUnis()
      }
     }
     observer.current = new IntersectionObserver(callback);
     observer.current.observe(lastElement.current);
  }, [loading])
  
  return (
    <div className='max-w-5xl mx-auto mt-4 pb-5 flex flex-col gap-y-4'>
        {data.length> 0 && data.map(el => <UniversitiesItem uni = {el} key = {el.domains + (Math.random() * 1000)}/>)}
        <div className='bg-gray-600 w-full h-4' ref={lastElement}  onClick={fetchAllUnis}>load</div>
        {loading && <span>loading...</span>}
    </div>
  )
}

export default UniversitiesList