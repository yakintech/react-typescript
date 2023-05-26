import React from 'react'
import Products from './samples/state/Products'
import { Route, Routes } from 'react-router-dom'
import AddProduct from './samples/state/AddProduct'
import Suppliers from './samples/state/Suppliers'
import Categories from './samples/Categories'

function App() {
  return (<>
    <Routes>
      <Route path='/products' element={<Products />}></Route>
      <Route path='/addproduct' element={<AddProduct />}></Route>
      <Route path='/suppliers' element={<Suppliers />}></Route>
      <Route path='/categories' element={<Categories />}></Route>

    </Routes>
  </>
  )
}

export default App