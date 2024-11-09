
import { BrowserRouter, Route,  Routes, Router  } from 'react-router-dom'
import './App.css'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Products from './components/Products';


function App() {

  return (
    //Router 6.28.0
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
