import React, { useState, useEffect, useRef } from 'react';
import './Footer.css';

import { Container, Navbar, NavbarToggler, UncontrolledDropdown, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { fat } from '@fortawesome/pro-thin-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { CSSTransition } from 'react-transition-group';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
	library.add(fal, far, fat, fab);

	const [
		addressHidden,
		setAddressHidden
	] = useState(true);

	const toggleAddressHidden = () => (addressHidden ? setAddressHidden(false) : setAddressHidden(true));

	const [
		phoneHidden,
		setPhoneHidden
	] = useState(true);

	const togglePhoneHidden = () => (phoneHidden ? setPhoneHidden(false) : setPhoneHidden(true));

	return (
		<div className="footer fixed-bottom">
			<Navbar fill>
				<NavItem>
					<NavLink className="nav-link" onClick={() => toggleAddressHidden()}>
						<div className="icon-div">
							<FontAwesomeIcon
								icon={[
									'fal',
									'location-dot'
								]}
							/>
						</div>
					</NavLink>
					<CSSTransition in={!addressHidden} timeout={300} classNames="hidden" unmountOnExit>
						<div className="hidden">Andover, MA</div>
					</CSSTransition>
				</NavItem>
				<NavItem>
					<NavLink className="nav-link phone" onClick={() => togglePhoneHidden()} href="#">
						<div className="icon-div">
							<FontAwesomeIcon
								icon={[
									'fal',
									'mobile'
								]}
							/>
						</div>
					</NavLink>
					<CSSTransition in={!phoneHidden} timeout={300} classNames="hidden" unmountOnExit>
						<div className="hidden">(603) 490-4664</div>
					</CSSTransition>
				</NavItem>
				<NavItem>
					<NavLink className="nav-link" href="mailto:gabhmccarthy@gmail.com">
						<FontAwesomeIcon
							icon={[
								'fal',
								'envelope'
							]}
						/>
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className="nav-link"
						href="https://www.linkedin.com/in/gabhmccarthy/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon
							icon={[
								'fab',
								'linkedin-in'
							]}
						/>
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className="nav-link"
						href="https://github.com/gah1289"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon
							icon={[
								'fab',
								'github'
							]}
						/>
					</NavLink>
				</NavItem>
			</Navbar>
		</div>
	);
}

export default Footer;
