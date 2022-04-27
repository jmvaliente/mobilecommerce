import { Routes, Route } from 'react-router-dom'
import Home from './ui/pages/Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<h1>Page Detail</h1>} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
