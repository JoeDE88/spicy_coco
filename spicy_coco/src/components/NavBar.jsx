import React from 'react'
import eye from '../assets/eye.svg'
import { NavLink } from 'react-router'

export default function NavBar() {
  return (
    <div >
      <nav class="navbar navbar-expand-lg bg-secondary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <NavLink to="/">
              <img src={eye} alt="Eye" width="30" height="24" class="d-inline-block align-text-top"/>
              </NavLink>
            </a>
            <h1 className='text-primary'>
                  Spicy Coco
            </h1>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
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
            <span class="navbar-text">
                <a class="nav-link" href="#">Reservas</a>
            </span>
          </div>
        </div>
      </nav>
    </div>
)
}
