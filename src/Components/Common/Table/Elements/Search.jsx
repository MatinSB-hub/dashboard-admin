import React from 'react'
import { HiSearch } from 'react-icons/hi'

function Search() {
  return (
    <div className="flex items-center w-[256px] relative px-3">
        <HiSearch className="absolute"/>
        <input type="text" placeholder="جستجو کنید" className="absolute size-full outline-none px-8 text-sm left-0 right-0"/>
    </div>
  )
}

export default Search