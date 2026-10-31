import '../src/index.css'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'

function App() {

  return (
    <>
    <div>
      <Navbar />

      <div className='app-layout'>
        <Sidebar />

        <main className='main-content'>

        </main>
      </div>
    </div>
    </>
  )
}

export default App
