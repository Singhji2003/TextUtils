import React from 'react'
const capatlize = (text)=>{
  return text.charAt(0).toUpperCase() + text.substring(1)
}
export default function Navbar(props) {
  return (
    <>   
      <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
  <a className="navbar-brand" href="/">
      <img src="https://imgs.search.brave.com/bIILt83rOwJdLzzwJgSBpKyKpO_C8Ae8oLAvZ6_-ctM/rs:fit:100:100:1/g:ce/aHR0cHM6Ly9kb3du/bG9hZC5jbmV0LmNv/bS9hL2ltZy9jYXRh/bG9nLzIwMTcvMTEv/MTQvZDg5NWUxYWMt/ZGIwMi00NDBmLWE2/NjItMzBiNDE0YzQy/NTRkL2ljb25pbWc2/NTA3Ni5wbmc" alt="Logo" width="30" height="30" className="d-inline-block align-text-top mx-2"/>
      {props.title}
    </a>
    <div class="form-check form-switch">
     {/* eslint-disable-next-line */}
  <input class="form-check-input" onClick={props.toogleMode} type="checkbox" role="switch" id="check"/>
  <label class={`form-check-label text-${props.mode==="light"?"dark":"light"}`} for="check">{`${capatlize(props.mode)} mode`}</label>
</div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">    
    </div>
  </div>
</nav>
    </div>
    </>
  )
}
