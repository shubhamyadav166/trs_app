import { Route, Routes } from 'react-router-dom'
import Footer from './componensts/Footer'
import Navbar from './componensts/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Blogs from './pages/Blogs'
import Property from './pages/Property'
import PropertyPage from './pages/PropertyPage'
import Residential from './pages/Residential'
import Commercial from './pages/Commercial'
import Plots from './pages/Plots'


function App() {


  return (
    <div className='relative'>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />

        <Route path="/property/:id" element={<PropertyPage />} />
        <Route path="/residential" element={<Residential />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/plots" element={< Plots />} />



      </Routes>
      <Footer />
    </div>
  )
}

export default App
