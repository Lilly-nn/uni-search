import React from 'react'
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'
import HeaderDropdown from '../components/HeaderDropdown'
import { info } from '../info/info'

function Header() {
  return (
    <header className='fixed z-50 bg-slate-300 w-full px-5 py-4 flex justify-between items-center'>
        <Link to="/" className='text-[22px] text-[#475059] tracking-[2px] cursor-pointer'>UniSearch</Link>
        <div className='flex gap-x-[30px] text-xl mr-[5%] text-end tracking-[1px] '>
          <HeaderDropdown info = {info} name = "countries"/>
          <HeaderDropdown info = {info} name = "specialization"/> 
        </div>
    </header>
  )
}

export default Header