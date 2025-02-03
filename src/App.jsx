
import './App.css'
import Header from './Header/header'
import { Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Service from './Services/Service'
import About from './About/About'
import Maps from './Map/Leaflet'
import Book from './Booking/Booking'
import Login from './Login/Login'



function App() {

  return (
    <>
      <Header />

      <Routes>

        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Service />} />
        <Route path='/about' element={<About />} />
        <Route path='/services/maps' element={<Maps />} />
        <Route path="/Service/Book" element={<Book />} />
      </Routes>
    </>
  )
}

export default App
