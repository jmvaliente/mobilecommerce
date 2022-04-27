import { Routes, Route } from 'react-router-dom'
import Home from './ui/pages/Home'
import ProductDetail from './ui/pages/ProductDetail'
import Header from './ui/components/header/Header'
import './bulma.css'

function App () {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<ProductDetail />} />
      </Routes>
    </div>
  )
}

export default App
