import React from 'react'

const Navbar = () => {
  return (
    <header className="header-container">
        <img src="https://logodownload.org/wp-content/uploads/2019/11/adidas-originals-logo.png" className="logo-pic" alt="" />
        <nav className="menu-options">
          <a href="#gazelle">GAZELLE</a>
          <a href="#spezial">SPEZIAL</a>
          <a href="#samba">SAMBA</a>
          <a href="#campus">CAMPUS</a>
          {/* <a href="best-sellers">BEST SELLERS</a> */}
          <input placeholder="Search" className="searchBar"/>
          <button type="button" className="searchButton">
            <img src="https://icones.pro/wp-content/uploads/2021/06/icone-loupe-gris.png" className="lupe"alt="" />
          </button>
        </nav>
        <button>
          <div className="btn-face-blue">
            Login
          </div>
          </button>
      </header>
  )
}

export default Navbar
