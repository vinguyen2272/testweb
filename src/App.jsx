
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import BackToTop from './components/backtotop/BacktoTop'

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <BackToTop />
      <Footer />
    </>
  )
}

export default App
