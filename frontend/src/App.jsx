import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './components/Navbar'
import ModelPage from './pages/Model'
import Engineering from './pages/Engineering'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/model" element={<ModelPage />} /> */}
          <Route path="/engineering" element={<Engineering />} />
          
        </Routes>
      </Router>
    </>
  )
}

export default App
