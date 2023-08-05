import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import AllProducts from '../products/AllProducts'

function Shop() {
  return (
    <div>

      <br />
      <center><div className='d-flex w-75   justify-content-center' >
        <button className='gbtn'><Link to="AllProducts">All Products</Link></button>
        <button className='gbtn'><Link to="jeans">Jeans</Link></button>
        <button className='gbtn'><Link to="shirts">Shirts</Link></button>
        <button className='gbtn'><Link to="shirts">Men's Clothing</Link></button>
        <button className='gbtn'><Link to="shirts">Women's Clothing</Link></button>
        <button className='gbtn'><Link to="shirts">Jewelery</Link></button>
        <button className='gbtn'><Link to="shirts">Electronics</Link></button>

      </div></center>

      <Outlet />
      <br />
      <AllProducts />
    </div>


  )
}

export default Shop