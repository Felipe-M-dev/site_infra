import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

function Footer() {
  return (
    <div>
        <footer className='text-white py-4 main-footer'>
            <div className="ant-col txt-white txt-center pb-10 ant-col-xs-24 ant-col-md-24 ant-col-lg-24">
              Todos los derechos reservados
              2022
              Created With Love
              <img src="./images/logo-egt.png" alt="Fotter" className='mx-2' />
            </div>
        </footer>
    </div>
  )
}

export default Footer