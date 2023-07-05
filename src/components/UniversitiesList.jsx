import React from 'react'
import UniversitiesItem from './UniversitiesItem'

function UniversitiesList({info}) {
  return (
    <div className='max-w-5xl mx-auto mt-4 flex flex-col gap-y-4'>
        {info.map(el => <UniversitiesItem uni = {el} key = {el.domains + (Math.random() * 1000)}/>)}
    </div>
  )
}

export default UniversitiesList