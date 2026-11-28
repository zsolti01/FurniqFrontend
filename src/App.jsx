import './app.css'
import MainPage from './pages/MainPage/MainPage'
import ProductsPage from './pages/ProductsPage/ProductsPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import CartPage from './pages/CartPage/CartPage'
import { BrowserRouter, Routes, Route } from 'react-router'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/products' element={<ProductsPage />}/>
          <Route path='/profile' element={<ProfilePage />}/>
          <Route path='/cart' element={<CartPage />}/>
        </Routes>
      </BrowserRouter>

      <div className='app-layout'>
        <main className='main-content'>
          <MainPage />
        </main>
      </div>
    </>
  )
}

export default App
