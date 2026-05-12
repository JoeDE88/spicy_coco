import React from 'react'
import logo from '../assets/logo.svg'
import { NavLink } from 'react-router'
import Button from './Button'

export default function NavBar() {
  return (
    <div >
      <nav class="navbar navbar-expand-lg bg-secondary">
        <div class="container-fluid">
              <NavLink to="/">
              <img src={logo} alt="Logo" width="100" height="100" class="d-inline-block align-text-top logo"/>
              </NavLink>
              <NavLink to="/" className='main-title-mobile'>
                <Button btn={<h1>Spicy Coco</h1>}></Button>
              </NavLink>
          <button class="navbar-toggler btn-menu" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <i class="bi bi-list"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink className="nav-link" to="/quien-soy">Quien soy</NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/carta">Carta</NavLink>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contactos</a>
              </li>
            </ul>
                <a class="nav-link" href="#">Reservas</a>
          </div>
        </div>
      </nav>
    </div>
  )
}
