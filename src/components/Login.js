import React from 'react'

function Login() {

  return (
    <>
      <video autoPlay loop muted playsInline className='back-video'>
        <source src="./images/bg-login.mp4" type="video/mp4" />
      </video>
      <div className="login-container">
        <div className="login-logo">
          <img src="./images/logo-egt.png" alt="EGT Logo" />
        </div>
        <div className="login-submit">
          <p>Usuario:</p>
          <input 
              type="text"
              placeholder="usuario@correo.com"
          /> <br />
          <p>Contraseña:</p>
          <input
              type="text"
              placeholder="Password"
          /> <br />
          <button className='btn login-button' >
            Login
          </button>
          <p className='newuser-request'>Solicitar nueva cuenta aquí</p>
        </div>
      </div>
      <div className='login-footer'>
        <footer className='text-white py-4'>
            <div className="ant-col txt-white txt-center pb-10 ant-col-xs-24 ant-col-md-24 ant-col-lg-24">
              Todos los derechos reservados
              2022
              Created With Love
              <img src="./images/logo-egt.png" alt="Fotter" className='mx-2' />
            </div>
        </footer>
      </div>
    </>
  )
}

export default Login
