import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function UniversitiesItem({uni}) {
  const navigate = useNavigate();
  return (
    <Link to = {uni.web_pages[0]} target='_blank' className='uni-item shadow-md relative hover:scale-105 transition-all'>
      <div className=' flex flex-col gap-y-3'>
      <span className='uni-item__title text-3xl font-semibold'>{uni.name}</span>
      <div className='flex justify-between w-[35%] uni-item__details'>
        <span onClick={(e)=> {e.preventDefault(); navigate(`/universities/country/${uni.country}`)}} className='hover:opacity-75 cursor-pointer'>{uni.country}</span>
        <span>{uni.domains}</span>
      </div>
    </div>
    <Link to = {uni.web_pages[0]} target='_blank' className='uni-item__btn'>view more</Link>
    </Link>
 
  )
}

export default UniversitiesItem