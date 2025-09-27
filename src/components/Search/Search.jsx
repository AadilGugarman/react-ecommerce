import React from 'react'
import Button from '@mui/material/Button';
import { BsSearchHeart } from "react-icons/bs";
const Search = () => {
  return (
    <div className='searchbox w-full h-[50px] rounded-md relative bg-gray-50 p-2' >
        <input type="text" className='w-full h-8 focus:outline-none relative bg-inherit text-[15px]' placeholder='Search for Products...' />
          <Button className='!absolute right-0 !rounded-full'><BsSearchHeart className='text-2xl'/></Button>
    </div>
  )
}

export default Search