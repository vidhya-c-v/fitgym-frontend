import React from 'react'

const NavBar = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg bg-info">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">FitGym</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        
        
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Login
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Admin login</a></li>
            <li><a class="dropdown-item" href="#">Trainer login</a></li>
            <li><a class="dropdown-item" href="#">User login</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar