import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import ErrorPage from "../pages/ErrorPage"
import NavBar from "../components/NavBar"
import QuienSoy from "../pages/QuienSoy"
import Peluches from "../pages/Peluches"
import Novedades from "../pages/Novedades"
import Contacto from "../pages/Contacto"
import Footer from "../components/Footer"

const RoutesEva = () => {
  return (
    <>
    <NavBar />
      <div className="bg-primary-subtle principal-div">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiensoy" element={<QuienSoy />} />
        <Route path="/peluches" element={<Peluches />} />
        <Route path="/novedades" element={<Novedades />} />
        <Route path="/contacto" element={<Contacto />} />

        <Route path="/*" element={<ErrorPage />} />
    </Routes>
        </div>
    <Footer />    
    </>
    
  )
}

export default RoutesEva