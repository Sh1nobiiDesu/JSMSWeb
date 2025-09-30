import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Pages/Home'


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' Component={Home} />
        </Routes>
      </Router>
    </>
  )
}

export default App
