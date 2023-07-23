import React from 'react'
import UniversitiesItem from './UniversitiesItem'
import Observer from './Observer'

function UniversitiesList({info,  limit =20}) {
  return (
    <div className='max-w-5xl mx-auto mt-4 pb-2 flex flex-col gap-y-4'>
        {info.slice(0,limit).map(el => <UniversitiesItem uni = {el} key = {el.domains + (Math.random() * 1000)}/>)}
    </div>
  )
}

export default UniversitiesList