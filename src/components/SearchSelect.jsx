import React, { useState } from 'react'

function SearchSelect({visible, setSelectValue}) {
  const [keyword, setKeyword] = useState('name');
  function onChange(e) {
    setSelectValue(e.target.value);
  }
  return (
    <div className = {`${visible ? "block" : "hidden"}`} >
    <p className='mt-2'>Select type of search</p>
    <select onChange={onChange}>     
        <option value= 'name'>Uni name</option>
        <option value='country'>Country</option>
   
    </select>
    </div>
 
  )
}

export default SearchSelect