import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Wishlist from './Pages/Wishlist'
import Books from './Pages/Books'
import Details from './Pages/Details'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/books/:mood" element={<Books />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </>
  )
}

export default App
