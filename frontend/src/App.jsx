import React from 'react'
import Navbar from './components/Navbar/Navbar'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AllProducts from './pages/AllProducts'
import Cart from './pages/Cart'
import CheckoutPage from './pages/CheckoutPage'
import OrderHistoryPage from './pages/OrderHistoryPage'

const App = () => {

    React.useEffect(() => {
      AOS.init({
        offset: 100,
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
      });
      AOS.refresh();
    }, []);

  return (
    <>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/produtos' element={<AllProducts />} />
        <Route path='/carrinho' element={<Cart />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/historico' element={<OrderHistoryPage />} />
      </Routes>
      
      <Footer/>
    </>
  )
}

export default App