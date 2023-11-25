import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import PrivateRoutes from './PrivateRoutes'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/home' element={
            <PrivateRoutes>

                <Home/>
            </PrivateRoutes>
        } />
      </Routes>
    </div>
  )
}

export default AllRoutes
