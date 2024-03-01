import {  NavLink } from "react-router-dom"


const NavBar = () => {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg bg-primary-subtle ">
  <div className="container-fluid">

  <div className="container d-flex justify-content-between">
  <NavLink  className="navbar-brand eva_logo  " to="/">
    EvaCrea 
      <img src="/favicon/faviconPeluche96.png" alt="Bootstrap" width="40"  />
      </NavLink>  



      <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
    

  

    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        {/* <Link className="nav-link active" aria-current="page" to="#">EvaCrea</Link> */}
        <NavLink className="nav-link eva-link" to="/">Home</NavLink>
        <NavLink className="nav-link eva-link" to="/quiensoy">¿Quien soy?</NavLink>
        <NavLink className="nav-link eva-link" to="/peluches">Peluches</NavLink>
        <NavLink className="nav-link eva-link" to="/novedades">Novedades</NavLink>
        <NavLink className="nav-link eva-link" to="/contacto">Conctacto</NavLink>
       
      </div>
    </div>
  </div>
</nav>
    
    </>
  )
}

export default NavBar