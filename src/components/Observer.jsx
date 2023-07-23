import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'
import Loader from './Loader';

export default function Observer({limit, setLimit}) {    
 const lastElementRef = useRef();
 const observer = useRef();

 useEffect(() => {
    function observerCallback(entries) {
        if(entries[0].isIntersecting) {
           setLimit(limit + 20);
        }
    }

   observer.current = new IntersectionObserver(observerCallback);
   observer.current.observe(lastElementRef.current);

   return () => {
     observer.current.disconnect();
   }
  }, [limit])
  
  return (
    <div className='flex justify-center h-[50px]' ref={lastElementRef}><Loader/></div>
  )
}
