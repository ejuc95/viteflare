import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/home'
import Characters from './pages/characters'

const App = () => {
  return (
    <>
      <Navbar />
      <main className='w-full'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/characters' element={<Characters />} />
        </Routes>
      </main>
    </>
  )
}

export default App
