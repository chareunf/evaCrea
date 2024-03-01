
const Contacto = () => {
  return (
    <div className="container ">
    
    <div className="mb-3">
  <label htmlFor="emailAdress" className="form-label">Direccion de correo</label>
  <input type="email" className="form-control" id="emailAdress" autoFocus placeholder="correo@ejemplo.com" />
</div>
<div className="mb-3">
  <label htmlFor="textArea" className="form-label">Envie su mensaje!</label>
  <textarea className="form-control" id="textArea" rows="3"></textarea>
</div>

<div className="d-grid gap-2">
  <button className="btn btn-primary">Enviar</button>
</div>
    </div>
  )
}

export default Contacto