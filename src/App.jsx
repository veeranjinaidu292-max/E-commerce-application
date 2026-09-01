import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/NavBar'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Products from './pages/Products'
import Footer from './components/Footer'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Categories from './pages/Categories'

function App() {
  const [count, setCount] = useState(0)
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  }

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home addToCart={addToCart}/>}/>
    <Route path="/products" element={<Products addToCart={addToCart}/>} />
    <Route path="/products/:id" element={<ProductDetails addToCart={addToCart}/>} />
    <Route
  path="/cart"
  element={<Cart cart={cart} setCart={setCart} />}
/>
    <Route path="/categories" element={<Categories/>}/>
    <Route path="/checkout" element={<Checkout/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
    )
  }
export default App
