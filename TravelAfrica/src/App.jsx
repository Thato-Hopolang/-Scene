import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navigation from "./Components/Navigation"
import Footer from './Components/Footer/Footer'
import Home from "./Pages/Home"
import Services from "./Pages/Contact"
import Contact from "./Pages/Contact"

function App() {

  return (
    <>
      <div>
      <Navigation/>
        <div className="middle">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Servicespage" element={<Services />} />
            <Route path="/Contactpage" element={<Contact />} />
          </Routes>
        </div>
      <Footer/>
    </div>
    </>
  )
}

export default App
