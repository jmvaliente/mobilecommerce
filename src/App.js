import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './ui/pages/Home'
import ProductDetail from './ui/pages/ProductDetail'
import Header from './ui/components/header/Header'
import './bulma.css'

function App () {
  const [itemsCart, setItemsCart] = useState(JSON.parse(window.sessionStorage.getItem('cart')) || [])

  const updateCart = (device) => {
    setItemsCart([...itemsCart, device])
  }

  return (
    <div className='App'>
      <Header itemsCart={itemsCart} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<ProductDetail updateCart={updateCart} />} />
      </Routes>
    </div>
  )
}

export default App
