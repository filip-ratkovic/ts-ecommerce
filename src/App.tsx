import React from 'react'
import {Routes, Route} from "react-router-dom"
import "./app.css"
import { Container } from 'react-bootstrap'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Products from './pages/Products/Products'
import SingleProduct from './pages/SingleProduct/SingleProduct'
import Nav from './components/Nav'

function App() {
  return (
    <>
    <Nav/>
    <Container className='mb-4'>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/products/:id' element={<SingleProduct/>}/>
      </Routes>
    </Container>
    </>
  )
}

export default App