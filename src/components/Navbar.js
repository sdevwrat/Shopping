import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return(
		<nav class="navbar navbar-inverse">
		  <div class="container-fluid">
		    <div class="navbar-header">
		      <Link class="navbar-brand" to="/">Shopping</Link>
		    </div>
	
		    <ul class="nav navbar-nav navbar-right">
		      <li><Link to="/Shopping">Shop</Link></li>
		      <li><Link to="/cart"><span className="glyphicon glyphicon-shopping-cart"></span> Cart </Link></li>
		    </ul>
		  </div>
		</nav>
	);
}

export default Navbar;