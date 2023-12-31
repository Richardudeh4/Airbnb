import React from 'react'
import Image from 'next/image';

import {GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon, SearchIcon} from '@heroicons/react/solid';
const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
<Image src="https://links.papareact.com/qd3"  objectFit="contain" objectPosition="left" layout='fill'/>
      </div>
      {/* middle -search*/}
      <div className="flex items-center border-2 rounded-full  py-2 md:border-2 md:shadow-sm">
<input type="text" placeholder="Start your search " className=" flex-grow pl-5 bg:transparent outline-none text-gray-600 placeholder-gray-400"/>
<SearchIcon className="h-8 hidden md:inline-flex bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"/>
     </div>
      {/* right */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
<p className="hidden md:inline cursor-pointer">Become a host </p>
<GlobeAltIcon className="h-6 cursor-pointer"/>
<div className="p-2 rounded-full items-center space-x-4 border flex">
  <MenuIcon className="h-6"/>
  <UsersIcon className="h-6"/>
  </div>
      </div>
    </header>
  )
}

export default Header
