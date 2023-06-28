import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Search from './Search'
import Movies from './Movies'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/movies' element={<Movies/>}/>
        </Routes>
    </div>
  )
}

export default MainRoutes