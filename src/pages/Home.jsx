import styles from './Home.module.css'

const Home = () => {
  return (
    <main className={`container   `}>
      <div className="row">
            <section className={`col-sm-12 col-lg-6   text-primary  `}>
                <h1>Bienvenidos</h1>

                <p>Creaciones de personajes de caricaturas e historietas personalizadas y a pedido,
                    totalmente artesanales.
                </p>
                <p> Muñecos sin edad, para grandes y niños, medidas a convenir, siendo las mas
                    comunes y mas solicitadas entre 25-30 cm.
                </p>
                <p> Trabajos realizados en materiales hipoalergénicos, polar antipilin, hilo de
                    algodón reforzado, materiales
                    nobles que permite varios lavados sin sufrir alteraciones. Interés al
                    detalle sin tener piezas sueltas.
                </p>
                <h4> Totalmente para niños!.
                </h4>
                <p> Si bien cada personaje puede parecer igual, están personalizados según el
                    criterio y gusto del cliente, pudiendo cambiar detalles, colores, formas etc.
                </p>
                <p> Al ser trabajos completamente artesanales y a pedido, no se encuentrarn en stock
                    y tienen un tiempo de realizacion que ronda de los 7 dias de la concrecion del pedido hasta
                    recibirlo en tu casa.
                </p>
                <p> Gracias por por darme la oportunidad de mostrarte mis creaciones y trabajos.
                    cualquier duda, consulta o consejo son bien recibidos, al pie de la pagina estan los redes sociales
                    o desde la pagina de contactos me podes escribir. Muchas gracias!
                </p>

            </section>



            <section  className={`col-lg-6   `}>
                <div className={` ${styles.divContainerImg}`}>
                    <div className={` ${styles.divImg}`}>
                        <img src="./img/amarilloyzorro.jpg" 
                            alt="peluche de zorro" />
                    </div>
                    <div className={` ${styles.divImg}`}>
                        <img src="./img/bobymas.jpg" 
                            alt="peluche de bob esponja" />
                    </div>

                    <div className={` ${styles.divImg}`}>
                        <img src="./img/pocoyo.jpg"  alt="peluche de poco yo" />
                    </div>
                    <div className={` ${styles.divImg}`}>
                        <img src="./img/principito.jpg" 
                            alt="peluche de principito" />
                    </div>
                </div>



            </section>
            </div>
        </main>
  )
}

export default Home