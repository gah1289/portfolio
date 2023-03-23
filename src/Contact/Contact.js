import React, { useState } from 'react';
import './Contact.css';

import { Navbar, NavItem, NavLink } from 'reactstrap';
import locationDot from '../Images/location-dot.svg';
import envelope from '../Images/envelope.svg';
import gitHub from '../Images/github.svg';
import linkedIn from '../Images/linkedin-in.svg';
import phone from '../Images/phone.svg';
import download from '../Images/file-arrow-down-light.svg';
import { CSSTransition } from 'react-transition-group';

function Contact() {
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
		<div className="contact">
			<Navbar fill id="footer">
				<NavItem>
					<NavLink className="nav-link" onClick={() => toggleAddressHidden()}>
						<div className="icon-div">
							{' '}
							<img className="footer-icon" src={locationDot} />
						</div>
					</NavLink>
					<CSSTransition in={!addressHidden} timeout={300} classNames="hidden" unmountOnExit>
						<span id="address">Andover, MA</span>
					</CSSTransition>
				</NavItem>
				<NavItem>
					<NavLink className="nav-link phone" onClick={() => togglePhoneHidden()} href="#">
						<div className="icon-div">
							<div className="icon-div">
								{' '}
								<img className="footer-icon" src={phone} />
							</div>
						</div>
					</NavLink>
					<CSSTransition in={!phoneHidden} timeout={300} classNames="hidden" unmountOnExit>
						<span id="phone">(603) 490-4664</span>
					</CSSTransition>
				</NavItem>
				<NavItem>
					<NavLink className="nav-link" href="mailto:gabhmccarthy@gmail.com">
						<div className="icon-div">
							<div className="icon-div">
								{' '}
								<img className="footer-icon" src={envelope} />
							</div>
						</div>
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className="nav-link"
						href="https://www.linkedin.com/in/gabhmccarthy/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className="icon-div">
							{' '}
							<img className="footer-icon" src={linkedIn} />
						</div>
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className="nav-link"
						href="https://github.com/gah1289"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className="icon-div">
							{' '}
							<img className="footer-icon" src={gitHub} />
						</div>
					</NavLink>
				</NavItem>
				<NavItem>
					<a className="nav-link" href="/files/GMcCarthyResume.pdf" target="_blank" download>
						<div className="icon-div">
							{' '}
							<img className="footer-icon" src={download} />
						</div>
					</a>
				</NavItem>
			</Navbar>
		</div>
	);
}

export default Contact;
