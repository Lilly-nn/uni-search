import React, { useContext, useState } from 'react'
import SearchService from '../API/SearchService';
import SearchSelect from './SearchSelect';
import { useNavigate } from 'react-router-dom';
import { UnisContext } from '../context';
import Loader from './Loader';

function HomeSearch() {
  const {universities, setUniversities} = useContext(UnisContext);
  const [loading, setLoading] = useState(false);
  const [foundData, setFoundData] = useState(null);
  const [selectVisible, setSelectVisible] = useState(false);
  const [selectValue, setSelectValue] = useState('name');
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  async function search(e) {
    if(e.code === "Enter" && value) {
      setLoading(true);
      setFoundData(null)
      setSelectVisible(false)
      
        if(selectValue ==="country, name") {
            const keywords = value.split(" ");
            const unis = await SearchService.getUnivercitiesByKeywords(keywords[0], keywords[1]);
            setUniversities(unis);
            navigate(`/universities/${keywords}`);
            setLoading(false);
            return;
        }
        const unis = await SearchService.getUnivercitiesByKeyword(selectValue, value);
        if(unis.length > 0 && selectValue === "country") {
          navigate(`/universities/country/${value}`)
        }else if(unis.length > 0) {
          navigate(`/universities/${value}`)
        } else {
          setFoundData(false);
          setValue('');
        }
        setLoading(false);
        setSelectVisible(true);
        console.log(unis);
        setUniversities(unis)
    }
  }

  return (
    <div className='w-[35%] flex flex-col justify-center items-center'>
        <input value={value}  onFocus={() => setSelectVisible(true)} onKeyDown={search}  onChange={(e) => setValue(e.target.value)} type='text' placeholder='Search for...' className='mt-[20px] w-full text-xl px-4 py-3 rounded-md shadow-md focus:outline-[#a995bbc2] focus:shadow-md'/>
        {selectValue ==="country, name" && <span className='italic'>france ecole, italy polytechnic, canada college etc</span>}
        <SearchSelect visible = {selectVisible} setSelectValue={setSelectValue} /> 
        {loading && <Loader/>}
        {foundData === false && <span className='mt-2 text-[red]'>no data were found, please try another search</span>}
    </div>
  
  )
}

export default HomeSearch