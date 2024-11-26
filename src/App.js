import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/public/Home'
import Services from './pages/public/Services'
import Blog from './pages/public/Blogs'
import Price from './pages/public/Price'

const App = () => {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route index element={<Home/>}/>
    <Route path='services' element={<Services/>}/>
    <Route path='blogs' element={<Blog/>}/>
    <Route path='price' element={<Price/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App