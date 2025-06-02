import React from 'react'
import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Video from './pages/Video/Video'
<<<<<<< HEAD
import Search from './Components/Navbar/search'
=======
>>>>>>> 66fc2260feb470c2f9e33b1133c8081375e24c94

const App = () => {

  const [sidebar,setSidebar] = useState(true)

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} />} />
        <Route path='/video/:categoryId/:videoId' element={<Video />} />
<<<<<<< HEAD
        <Route path="/search/:input" element={<Search />} />

=======
>>>>>>> 66fc2260feb470c2f9e33b1133c8081375e24c94
      </Routes>
    </div>
  )
}

export default App