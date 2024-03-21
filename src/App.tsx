import { useState } from 'react'
import Banner from './components/Banner'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Services from './components/Services'
import "./index.css"
import Cart from './components/Cart'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [openCart, setOpenCart]=useState(false);
  return (
    <>
      <div>
        <Navbar setOpenCart={setOpenCart} />
        {openCart && <Cart setOpenCart={setOpenCart}/>}
        <Home />
        <Services />
        <Product />
        <Banner/>
       <ToastContainer position="bottom-center"/>
      </div>
    </>
  )
}

export default App
