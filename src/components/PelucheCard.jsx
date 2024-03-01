import { Link } from "react-router-dom";

export const PelucheCard = ({ d, handleModalActive }) => {
  return (
    <div className={`card pelucheCard`} style={{ height: "100%" }}>
      <img
        src={`/imgpeluches/${d.url}`}
        className="card-img-top"
        alt={d.title}
      />
      <div className="card-body">
        <h5 className="card-title">{d.title}</h5>
        <p className="card-text">{d.description}</p>
        
        <button
          
          onClick={()=>handleModalActive(d)}
          className="btn btn-primary"
        
        >
          Ver Mas
        </button>
      </div>
    </div>
  );
};
