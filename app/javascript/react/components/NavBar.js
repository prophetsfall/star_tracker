import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = props => {
    return(
    <div>
      <div className="navbar">
        <Link to='/'>Home</Link>
      </div>
      <div className="content">
        <h1 className="page-title">Change Me Later</h1>
        {props.children}
      </div>
    </div>
  )
}

export default NavBar;
