import React from 'react'
import {BsArrowUpSquare} from "react-icons/bs"

export default function ArrowUp() {
  function scrollUp() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
  }
  return (
    <BsArrowUpSquare onClick={scrollUp} className='fixed bottom-5 right-5 text-[20px] cursor-pointer'/>
  )
}
