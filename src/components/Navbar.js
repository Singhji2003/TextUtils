import React from 'react'
export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
  <a className="navbar-brand" href="/">
      <img src="https://imgs.search.brave.com/bIILt83rOwJdLzzwJgSBpKyKpO_C8Ae8oLAvZ6_-ctM/rs:fit:100:100:1/g:ce/aHR0cHM6Ly9kb3du/bG9hZC5jbmV0LmNv/bS9hL2ltZy9jYXRh/bG9nLzIwMTcvMTEv/MTQvZDg5NWUxYWMt/ZGIwMi00NDBmLWE2/NjItMzBiNDE0YzQy/NTRkL2ljb25pbWc2/NTA3Ni5wbmc" alt="Logo" width="30" height="30" className="d-inline-block align-text-top mx-2"/>
      {props.title}
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-3">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" href="/">About</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" href="/">Contact</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
