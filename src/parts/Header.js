import React from 'react'
import logo from "../assets/images/logo.svg"

export default function Header() {
  return (
    <div className='w-full flex justify-center items-center h-16'>
        <img src={logo} alt='logo' />
    </div>
  )
}
