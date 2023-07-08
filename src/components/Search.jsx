import React, { useEffect, useState } from 'react'
import {SlMagnifier} from "react-icons/sl"

function Search({data, setData, setReset, setSearched, disabled}) {
  const [value, setValue] = useState('');
  const [isSearched, setIsSearched] = useState(null);
  const [visible, setVisible] = useState(false);

  function filterItems(info) {
    let filteredItems = [];
    info.map(el => {
        if(el.name.toLowerCase().includes(value.toLowerCase())) {
            filteredItems.push(el)
        }
    })
    return filteredItems;
  }

  function search(e) {
    if(e.code === "Enter") {
        setReset(false);
        const filteredList = filterItems(data);
        setValue('');
        if(filteredList.length > 0) {
            setData(filteredList);
            setIsSearched(true); 
        }else{
          setData([]);
        }
        setSearched(true)
    }
  }


  return (
    <div className='absolute left-0 top-[20%] p-2'>
      {!visible && <SlMagnifier onClick={() => setVisible(true)} className='w-[30px] h-[30px] text-gray-400 ml-2 cursor-pointer mb-1'/>}
      {visible && (
        <div className='flex items-end flex-col pt-1'>
          <input type='text' disabled = {disabled} value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={search} className='py-1 px-3 rounded-sm outline-purple-200 shadow-sm'/>
          {!disabled && <button className='block mt-1' type='button' onClick={() => setReset(true)}>reset</button>}
      </div>
      )}
    </div> 

  )
}

export default Search