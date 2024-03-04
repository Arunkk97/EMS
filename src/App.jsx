import './App.css'
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/home' element={<Home />}/>
      </Routes>
      <Footer />


    </>
  )
}

export default App
