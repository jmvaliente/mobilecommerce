import { Routes, Route } from 'react-router-dom'
import Home from './ui/pages/Home'
import ProductDetail from './ui/pages/ProductDetail'
import './App.css'

function App () {
  return (
    <div className='App'>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<ProductDetail />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
