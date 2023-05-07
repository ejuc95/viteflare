import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/home'
import Character from './pages/character'

const App = () => {
  return (
    <>
      <Navbar />
      <main className='w-full'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/character/:id' element={<Character />} />
        </Routes>
      </main>
    </>
  )
}

export default App
