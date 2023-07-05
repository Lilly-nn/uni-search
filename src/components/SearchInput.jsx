import React, { useState } from 'react'
import SearchService from '../API/SearchService';
import SearchSelect from './SearchSelect';
import { useNavigate } from 'react-router-dom';

function SearchInput() {
  const [selectVisible, setSelectVisible] = useState(false);
  const [selectValue, setSelectValue] = useState('name');
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  async function search(e) {
    if(e.code === "Enter" && value) {
        if(selectValue ==="country, name") {
            const keywords = value.split(" ");
            const unis = await SearchService.getUnivercitiesByKeywords(keywords[0], keywords[1]);
            console.log(unis);
            return;
        }
        const unis = await SearchService.getUnivercitiesByKeyword(selectValue, value);
        navigate(`/universities/${value}`)
        console.log(unis);
    }
  }

  return (
    <div className='w-[35%] flex flex-col justify-center items-center'>
        <input value={value}  onFocus={() => setSelectVisible(true)} onKeyDown={search}  onChange={(e) => setValue(e.target.value)} type='text' placeholder='Search for...' className='mt-[20px] w-full text-xl px-4 py-3 rounded-md shadow-md focus:outline-[#a995bbc2] focus:shadow-md'/>
        {selectValue ==="country, name" && <span className='italic'>france ecole, italy polytechnic, canada college etc</span>}
        <SearchSelect visible = {selectVisible} setSelectValue={setSelectValue} />  
    </div>
  
  )
}

export default SearchInput