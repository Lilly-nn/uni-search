import React, { useContext } from 'react'
import { UnisContext } from '../context'
import { useParams } from 'react-router-dom';

function Universities() {
  const {universities, setUniversities} = useContext(UnisContext);
  const params = useParams();
  const searchWord = params.keyword;
  return (
    <section className='min-h-screen bg-slate-200 pt-[7%] '>
        <div className='max-w-5xl mx-auto'>
            <h3 className='text-2xl text-[forestgreen]'>List of universities for keyword <span className='font-bold italic tracking-widest'>{searchWord}</span></h3>
        </div>
 
    </section>
  )
}

export default Universities