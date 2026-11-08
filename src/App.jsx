import './index.css'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import ProductsPage from './pages/ProductsPage/ProductsPage'

function App() {

  return (
    <>
    <div>
      <Navbar />

      <div className='app-layout'>
        <Sidebar />

        <main className='main-content'>
          <ProductsPage />
        </main>
      </div>
    </div>
    </>
  )
}

export default App
