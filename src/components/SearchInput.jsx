import React, { useState } from 'react'
import SearchService from '../API/SearchService';
import SearchSelect from './SearchSelect';

function SearchInput() {
  const [selectVisible, setSelectVisible] = useState(false);
  const [value, setValue] = useState('');
  const [selectValue, setSelectValue] = useState('name');
  async function search(e) {
    if(e.code === "Enter") {
        console.log(value);
        const unis = await SearchService.getAllUniversities();
        console.log(selectValue)
    }
  }

  return (
    <div className='w-[35%] flex flex-col justify-center items-center'>
        <input value={value} onFocus={() => setSelectVisible(true)} onKeyDown={search}  onChange={(e) => setValue(e.target.value)} type='text' placeholder='Search for...' className='mt-[20px] w-full text-xl px-4 py-3 rounded-md shadow-md focus:outline-[#a995bbc2] focus:shadow-md'/>
        <SearchSelect visible = {selectVisible} setSelectValue={setSelectValue} />  
    </div>
  
  )
}

export default SearchInput