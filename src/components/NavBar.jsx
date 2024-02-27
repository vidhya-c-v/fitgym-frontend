import React from 'react'

const NavBar = () => {
  return (
    <div>

<nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
    <img src="https://us.123rf.com/450wm/imogi/imogi1805/imogi180500240/102169959-vintage-fitness-concept.jpg?ver=6" alt="Bootstrap" width="100" height="80" />
                        <font  color="white"><b> &nbsp;&nbsp;FitGym</b></font>

    </a>
  
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><font  color="white">Home</font></a>
        </li>
        
        
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <font  color="white"> Login</font>
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Admin login</a></li>
            <li><a className="dropdown-item" href="#">Trainer login</a></li>
            <li><a className="dropdown-item" href="#">User login</a></li>
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