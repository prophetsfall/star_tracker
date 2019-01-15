import React from 'react';
import { Link } from 'react-router';
import BackButton from './BackButton.js';

const NavBar = props => {
  return(
    <div>
      <div className="navbar">
        <BackButton />
        <Link to='/'> HOME </Link>
        <Link to='/stars'> Stars </Link>
      </div>
      <div className="content">
        <h1 className="page-title">Cereals</h1>
        {props.children}
      </div>
    </div>
  )
}

export default NavBar;

import NavBar from '../components/NavBar'
<Router history={browserHistory}>
  <Route path='/'  component={NavBar}>
    <IndexRoute  component={StarBank}/>
    <Route path='/stars' component={StarBank} />
  </Route>
</Router>
