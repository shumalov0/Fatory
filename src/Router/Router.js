
import React from 'react'
import Home from '../Page/Home';
import Error from '../Page/Error';
import {Routes , Route } from 'react-router-dom'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<Error/>} />
    </Routes>
  )
}

export default Router