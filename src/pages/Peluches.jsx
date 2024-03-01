import { useContext } from "react";
import { PelucheCard } from "../components/PelucheCard";
import data from "../data/data.json";
import styles from './Peluches.module.css'
import Context from "../context/Context";
import Modal from "../components/Modal";

const Peluches = () => {

  const {modalActive, handleModalActive, novedadesState } = useContext(Context)
  
  return (
    <>
    <div className="container">
      <div className="row">

      <h3>Creaciones Artesanales</h3>
      </div>

      <div className={`row ${styles.cardContainer}`}>
      
      {data &&
        data.filter(f=>f.estado === "principal").map((d) => (


          <PelucheCard key={d.id} d={d} handleModalActive={handleModalActive} />

         
        ))}
      </div>
      

    </div>
    
    {
      modalActive && <Modal d={novedadesState} handleModalActive={handleModalActive} />
    }
    </>
  );
};

export default Peluches;
