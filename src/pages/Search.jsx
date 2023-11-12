import React, { useState, useRef, useEffect } from 'react'
import Card from '../components/Card'
import { currentUrl } from '../config/defaultUrls'
import { search } from '../api/api'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Search() {

  const searchInput = useRef()

  const params = useParams()

  const [query, setQuery] = useState(params?.query)
  const [list, setList] = useState()

  const fetch = async () => {
    const datas = await search(query)
    setList(datas)
  }

  useEffect(() => {
    searchInput.current.value = params?.query
    fetch()
  }, []) 
  
  return (
    <>
      <Navbar/>
      <div className='flex items-center justify-center p-10 pt-32 flex-col'>
        <h1 className='text-5xl text-bold my-6'>Search Anime</h1>
        <form action="" className='flex gap-3 border-none mb-16 mt-4 p-4 bg-slate-800 rounded' onSubmit={(e) => e.preventDefault()}>
          <input ref={searchInput} onChange={(e) => setQuery(e.target.value)} type="text" placeholder='Search anime..' className='bg-slate-900 rounded outline-none px-4 py-2' />
          <input type="submit" value="Search" className='bg-red-500 px-4 rounded' onClick={() => fetch(query)}/>
        </form>
        <div className='flex flex-wrap gap-4 w-full justify-center'>
          {list?.results !== null ? list?.results?.map((data, i) => (<Card key={i} func={() => location.href = currentUrl + "stream/" + data.id} img={data.image} title={data.title}/>)) : "Not Found"}
        </div>
      </div>
    </>
  )
}

export default Search