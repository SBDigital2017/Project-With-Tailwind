import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './components/Navbar'

import Engineering from './pages/Engineering'
import Footer from './components/Footer'
import ITServices from './pages/ITServices'



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
          <Route path="/itservices" element={<ITServices />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
