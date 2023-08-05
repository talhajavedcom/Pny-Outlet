import React from 'react'
import './style.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from "react-router-dom"
import About from "./page/About"
import Cart from "./page/Cart"
import Contact from "./page/Contact"
import Home from "./page/Home"
import Shop from "./page/Shop"
import SignIn from "./page/SignIn"
import SignUp from "./page/SignUp"
import Pd from "./page/Pd"
import Jeans from './products/Jeans'
import Shirts from './products/Shirts'
import AllProducts from './products/AllProducts'
import Todo from './components/Todo'




function App() {
  return (
    <>
      <Navbar />
      <Routes>

        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} >
          <Route path='AllProducts' element={<AllProducts />} />
          <Route path='jeans' element={<Jeans />} />
          <Route path='shirts' element={<Shirts />} />
        </Route>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/todo' element={<Todo />} />
        <Route path="/products/:id" element={<Pd />} />
      </Routes>

      <Footer />

    </>
  )
}

export default App 