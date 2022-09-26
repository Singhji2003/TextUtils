import React from 'react'

export default function Navbar(props) {
  return (
    <div>
     <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
  <div className={`container-fluid text-${props.mode==='light' ? "black" :'light'}`}>
    <a className={`navbar-brand text-${props.mode==='light' ? "black" :'light'}`}  href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse text-${props.mode==='light' ? "black" :'light'}`} id="navbarSupportedContent">
      <ul className={`navbar-nav me-auto mb-2 mb-lg-0 text-${props.mode==='light' ? "black" :'light'}`}>
        <li className="nav-item ">
          <a className={` nav-link active text-${props.mode==='light' ? "black" :'light'}`} aria-current="page" href="/">Home</a>
        </li>
       
        <li className="nav-item">
          <a className={`nav-link text-${props.mode==='light' ? "black" :'light'}`} href="/No_change.js">Number Change</a>
        </li>
      </ul>
      <div className="form-check form-switch ">
  <input className="form-check-input" onClick={props.toogleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>
      <form className="d-flex mx-3" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> 
    </div>
  )
}