import React from 'react'
import {Routes, Route} from "react-router-dom"
import "./app.css"
import { Container } from 'react-bootstrap'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Products from './pages/Products/Products'
import SingleProduct from './pages/SingleProduct/SingleProduct'
import Nav from './components/Nav'
import { ShoppingCardProvider } from './context/ShoppingCardContext'
import Cart from './pages/Cart/Cart'

function App() {
  return (
    <ShoppingCardProvider>
    <Nav/>
    <div >
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/products/:id' element={<SingleProduct/>}/>
      <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
    </ShoppingCardProvider>
  )
}

export default App