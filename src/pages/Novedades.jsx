
import { PelucheCard } from "../components/PelucheCard";
import novedades from "../data/data.json";
import Modal from "../components/Modal";
import { useContext } from "react";
import Context from "../context/Context";

const Novedades = () => {
const {modalActive, handleModalActive, novedadesState } = useContext(Context)



  return (
    <>
    <div className="container pb-3">
      <h1 className="text-center p-3">Novedades de productos</h1>

      <section className="row text-center mb-5">
        <div className="col-12">
          <div className="card-body">
            <h5 className="card-title">MUY PRONTO!</h5>
            <p className="card-text">
              Proximamente novedades sobre nuevos taller on line desde el canal
              de youtube!!
            </p>
          </div>
        </div>

        <div className="col-12">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/MP-vhiqiLjE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              
            ></iframe>
          </div>
        </div>
      </section>

      <section className="row g-3 novedadesSection2">
        {novedades &&
          novedades.filter(f=> f.estado === "novedad").map((da) => (
            
              <PelucheCard key={da.id} d={da} handleModalActive={handleModalActive} />
            
          ))}


      </section>
      
    </div>
    {
      modalActive && <Modal d={novedadesState} handleModalActive={handleModalActive} />
    }
    </>
  );
};

export default Novedades;
