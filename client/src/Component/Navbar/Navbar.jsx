import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import bars from '../../assets/bars-solid.svg'
import logo from '../../assets/logo.png'
import search from '../../assets/search-solid.svg'
function Navbar() {
  var User=null;
  return (
      <><nav className="main-nav">
      <div className="Navbar">
        <button className="slide-in-icon">
          <img src={bars} alt="bars" width='15' />
        </button>
        <div className="navbar1">
          <Link to='/' className="nav-item nav-logo">
            <img src={logo} alt='logo'></img></Link>
          <Link to='/' className="nav-item nav-btn res-nav">
            About</Link>
          <Link to='/' className="nav-item nav-btn res-nav">
            Products</Link>
          <Link to='/' className="nav-item nav-btn res-nav">
            For Teams</Link>
          <Link to='/' className="nav-item nav-btn res-nav">
            For Teams</Link>
            <form><input type="text" placeholder='Search...' /></form>
        </div>
      </div>


    </nav><div>

      </div></>
  )
}

export default Navbar
