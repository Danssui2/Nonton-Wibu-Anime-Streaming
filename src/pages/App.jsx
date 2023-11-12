import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Stream from './Stream'
import Search from './Search'

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/stream/:id' element={<Stream/>}/>
        <Route path='/search/:query' element={<Search/>}/>
      </Routes>
    </main>
  )
}

export default App
