"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] =useState(false)

  const toggleMenu = () => {  
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <nav className='bg-white sticky top-0 p-4 shadow-sm'>
        <div className='container mx-auto grid grid-cols-12 items-center'>
            <Link href="" className='col-span-2'>
                <Image src="logo.svg" alt="logo" width={150} height={100}/>
            </Link>
            <div className='col-span-8 hidden md:flex border w-full border-primary rounded'>
              <input type="search" placeholder='Search Products' className='w-full focus:outline-none placeholder:p-2 p-2'/>
              <button className='bg-primary text-white p-3'><FaSearch /></button>
            </div>
            <div className="col-span-2 hidden md:flex md:text-3xl md:gap-10 text-primary md:justify-end">
              <MdOutlineShoppingCart />
              <IoNotificationsOutline />
              <FaRegUser />
            </div>
            <div className='md:hidden text-3xl' onClick={toggleMenu}>
             <MdMenu />
            </div>
        </div>

        {isMenuOpen ? (
                <div className=''>
                  <div className='flex flex-row md:hidden border w-full border-primary rounded'>
                      <input type="search" placeholder='Search Products' className='w-full focus:outline-none placeholder:p-2 p-2'/>
                      <button className='bg-primary text-white p-3'><FaSearch /></button>
                    </div>
                    <div className="flex flex-row justify-center md:hidden text-3xl py-2 gap-10 text-primary md:justify-end">
                      <MdOutlineShoppingCart />
                      <IoNotificationsOutline />
                      <FaRegUser />
                    </div>
                </div>
        ) : null}
    </nav>
  )
}

export default Header