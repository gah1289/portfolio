import React, { useState, useContext } from 'react';
import { Collapse, Navbar, NavbarToggler, UncontrolledDropdown, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './NavBar.css';

function NavBar() {
	return (
		<Nav fill pills>
			<NavItem>
				<NavLink className="nav-link" active href="#">
					About
				</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="#">Portfolio</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="#">Contact</NavLink>
			</NavItem>
			<NavItem>
				<NavLink disabled href="#">
					Disabled Link
				</NavLink>
			</NavItem>
		</Nav>
	);
}

export default NavBar;
