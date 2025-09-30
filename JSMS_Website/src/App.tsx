import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Pages/Home'
import Footer from './Components/Footer'


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' Component={Home} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
