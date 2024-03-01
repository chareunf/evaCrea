import { useState } from "react";
import Context from "./Context";

const Provider = ({ children }) => {
  const [modalActive, setModalActive] = useState(false);
  const [novedadesState, setNovedadesState] = useState({})

  const handleModalActive = (d) => {
   setModalActive(!modalActive);
   setNovedadesState(d)
  };

  const operationsToProvid = { modalActive, handleModalActive, novedadesState };
  return (
    <Context.Provider value={operationsToProvid}>{children}</Context.Provider>
  );
};

export default Provider;
