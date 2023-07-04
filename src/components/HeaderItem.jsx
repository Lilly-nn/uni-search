import React from 'react'

function HeaderItem({title}) {
  return (
      <a className='hover:text-[#020202] cursor-pointer text-[#475059]'>{title}</a>
  )
}

export default HeaderItem