import styles from './Modal.module.css'

const Modal = ({handleModalActive, d}) => {
  return (
    <>
    
    <div  className={ styles.modalContainer}>
        <div className={styles.modalView}>
            <div className={styles.modalHeader}>
                <div>

                </div>
                <div>
                    {d.title}
                </div>
                <div>
                    <button onClick={()=>handleModalActive()} className={styles.closeButton}>X</button>
                </div>
            </div>
            <div className={styles.modalContent}>
                <div className={styles.modalImgContent}>
                    <img src={`/imgpeluches/${d.url}`} alt={d.title} />
                </div>
                <div className={styles.modalTextContent}>

                {d.description}
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default Modal