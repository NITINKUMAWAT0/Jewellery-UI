import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Explore from './Pages/Explore/Explore'
import NotFound from './Pages/NotFound/NotFound'
import Footer from './Components/Footer/Footer'
function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/explore' element={<Explore/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
