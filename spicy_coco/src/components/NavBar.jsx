import React from 'react'
import eye from '../assets/eye.svg'

export default function NavBar() {
  return (
    <div >
      <nav class="navbar bg-secondary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={eye} alt="Eye" width="30" height="24" class="d-inline-block align-text-top"/>
            Bootstrap
          </a>
        </div>
      </nav>
    </div>
)
}
