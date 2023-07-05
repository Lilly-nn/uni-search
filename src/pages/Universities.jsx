import React, { useContext, useEffect } from 'react'
import { UnisContext } from '../context'
import { useParams } from 'react-router-dom';
import UniversitiesList from '../components/UniversitiesList';
import SearchService from '../API/SearchService';

function Universities() {
  const {universities, setUniversities} = useContext(UnisContext);
  const filtered = [...new Map(universities.map(el => [el.name, el])).values()];
  console.log(filtered)
  const params = useParams();
  const searchWord = params.keyword;

  async function observeUpload() {
    if(!universities.length) {
        const result = await SearchService.getUnivercitiesByKeyword('name', searchWord);
        setUniversities(result);
        console.log(',,', result)
    }
  }

  useEffect(() => {
    observeUpload()
  }, [searchWord])
  
  return (
    <section className='min-h-screen bg-slate-200 pt-[7%] '>
        <div className='max-w-5xl mx-auto'>
            <h3 className='text-3xl text-[forestgreen]'>List of universities for keyword <span className='font-bold italic tracking-widest'>{searchWord}</span></h3>
        </div>
         {universities && universities.length > 0 &&  <UniversitiesList info = {universities}/>}
    </section>
  )
}

export default Universities