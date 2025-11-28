
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



function Contacto() {
  //sacado de code
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passInput, setPassInput] = useState("");
  const [commentId, setCommentId] = useState("");
  const [error, setError] = useState(false);
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



  return (
    <div className='container'>
      <Card className="shadow p-4 border-0 rounded-4 mt-4 mb-4">
        <Card.Body>
          <form className='row mt-3 g-3 needs-validation' noValidate>
            <div className='row'>
              <div >
                <div className="col-12 d-flex justify-content-between  p-1 mb-1"  >
                  <h4 className="fw-bold  mb-0">Contacto</h4>
                  <p className="text-secondary fst-italic ms-3">
                    Cuéntanos de tu proyecto y agenda una asesoría.
                  </p>
                </div>
              </div>
              


              <div className='col'>
                <div className='mb-3'>
                  <label htmlFor='nameInput' className='form-label'>Nombre</label>
                  <input
                    id='nameInput'
                    className='form-control'
                    type='text'
                    placeholder='Escribe tu Nombre'
                    aria-describedby="nameInput"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)} //sacado del codigo
                    required //required, valid-feedback e invalid-feedback son para validacion pero no funcionan
                  />

                  <div className='valid-feedback'>Todo bien</div>
                  <div className='invalid-feedback'>Es necesario ingresar un nombre</div>

                </div>


                <div className='mb-3'>
                  <label htmlFor='emailInput' className='form-label'>Email</label>
                  <input
                    id='emailInput'
                    className='form-control'
                    type='email'
                    placeholder='tuemail@duocuc.cl'
                    aria-describedby="emailInput"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)} //sacado del codigo
                    required //required, valid-feedback e invalid-feedback son para validacion pero no funcionan

                  />

                  <div className='valid-feedback'>Todo bien</div>
                  <div className='invalid-feedback'>Es necesario ingresar un email</div>

                </div>


                <div className='mb-3'>
                  <label className='form-label'>Comentarios:</label>
                  <textarea
                    id='commentId'
                    className='form-control'
                    value={commentId}
                    onChange={(e) => setCommentId(e.target.value)}
                  />

                </div>
                <div className='col-12'>

                  <div className='form-check'>
                    <input className='form-check-input' type='checkbox' id='terms' required />
                    <label htmlFor='terms' className='form-check-label'> Acepto los terminos y condiciones</label>
                    <div className='valid-feedback'>Todo bien</div>
                    <div className='invalid-feedback'>Es necesario aceptar los terminos y condiciones</div>
                  </div>

                </div>

                <div className='col-12 mt-4 d-flex flex-column gap-3'>
                  <button
                    className="btn btn-primary mt-3"
                    type="button"
                    onClick={() => {
                      if (emailInput.trim() === "" || !regex.test(emailInput)) {
                        setError(true);
                      } else {
                        setError(false);
                        alert("mensaje enviado! Gracias por dejar sus comentarios");
                      }
                    }} > Validar</button>
                  <div
                    className={`alert alert-danger mt-2 ${error ? "d-block" : "d-none"}`}
                    role="alert">El correo es obligatorio o no tiene un formato válido.</div>
                  <Button
                    variant="outline-dark"
                    className="px-4 py-2"
                    type="button"
                    onClick={() => {
                      // Reiniciar todos los campos y estados )
                      setNameInput("");
                      setEmailInput("");
                      setPassInput("");
                      setCommentId("");

                    }}>Limpiar</Button>
                </div>
              </div>
            </div>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
}



export default Contacto;

