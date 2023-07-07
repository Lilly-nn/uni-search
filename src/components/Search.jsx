import React, { useEffect, useState } from 'react'

function Search({data, setData, setReset}) {
  const [value, setValue] = useState('');
  const [isSearched, setIsSearched] = useState(null);

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
        }
    }
  }


  return (
    <div className='absolute left-0 top-[25%] p-2'>
      <input type='text' value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={search} className='py-1 px-3 rounded-sm outline-purple-200 shadow-sm'/>
      <button type='button' onClick={() => setReset(true)}>reset</button>
    </div> 

  )
}

export default Search