import React from 'react'
import { useState } from 'react'
import { currentUrl } from '../config/defaultUrls'

function Navbar() {


  const QuickSearch = () => {

    const [query, setQuery] = useState()

    return (
      <form action="" className='flex gap-3 border-none' onSubmit={(e) => e.preventDefault()}>
        <input onChange={(e) => setQuery(e.target.value)} type="text" placeholder='Search anime..' className='bg-slate-900 text-xs md:text-base rounded outline-none px-4 py-2' />
        <input type="submit" value="Search" className='bg-red-500 px-4 rounded text-xs md:text-base' onClick={() => location.href = currentUrl + "search/" + query}/>
      </form>
    )
  }

  return (
    <div className='flex justify-between fixed top-0 left-0 w-full h-16 px-[4%] bg-slate-800 items-center'>
      <div className='font-semibold text-xs md:text-base' onClick={() => location.href = currentUrl}>Nonton Wibu</div>
      <QuickSearch/>
    </div>
  )
}

export default Navbar