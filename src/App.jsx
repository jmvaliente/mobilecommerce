import { Routes, Route } from 'react-router-dom'
import './App.css'

function App () {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<h1>Page Home</h1>} />
        <Route path='/:id' element={<h1>Page Detail</h1>} />
      </Routes>
    </div>
  )
}

export default App
