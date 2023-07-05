import React from 'react'
import { Link } from 'react-router-dom'
import HeaderItem from '../components/HeaderItem'

function Header() {
  return (
    <header className='fixed z-50 bg-slate-300 w-full px-5 py-4 flex justify-between items-center'>
        <Link to="/" className='text-[22px] text-[#475059] tracking-[2px] cursor-pointer'>UniSearch</Link>
        <div className='flex gap-x-[30px] text-xl mr-[5%] text-end tracking-[1px] '>
            <HeaderItem title="Cities"/>
            <HeaderItem title= "Unis"/>
        </div>
    </header>
  )
}

export default Header