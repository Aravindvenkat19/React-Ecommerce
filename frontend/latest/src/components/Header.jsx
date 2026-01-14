import React from 'react'
import Search from './Search'
import {Link} from 'react-router-dom'

const Header = ({cartItems}) => {
  return (
     <nav className="navbar navbar-expand-md container-fluid">
        <div className="row w-100 align-items-center">
          {/* Logo */}
          <div className="col-12 col-md-3 text-center text-md-left">
            <Link to="/"><img src="/images/logo.png" width="150" alt="Logo" /></Link>
          </div>

          {/* Search */}
          <div className="col-12 col-md-6 mt-3 mt-md-0">
            <Search/>
          </div>

          {/* Cart */}
          <div className="col-12 col-md-3 mt-3 mt-md-0 text-center">   
            <Link to="/cart">
              <span id="cart" className="ml-3 font-weight-bold">Cart</span>
              <span className="ml-2 badge badge-danger" id="cart_count">{cartItems.length}</span>
            </Link>        
          </div>
        </div>
      </nav>
  )
}

export default Header