import React, { useState, useEffect } from 'react';
import './Contact.css';

import { Navbar, NavItem, NavLink, Spinner } from 'reactstrap';
import locationDot from '../Images/location-dot.svg';
import envelope from '../Images/envelope.svg';
import gitHub from '../Images/github.svg';
import linkedIn from '../Images/linkedin-in.svg';
import phone from '../Images/phone.svg';
import download from '../Images/file-arrow-down-light.svg';
import { CSSTransition } from 'react-transition-group';
import axios from 'axios';
import resume from '../files/GMcCarthyResume.pdf';

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

	const [
		isLoading,
		setLoading
	] = useState(true);

	const [
		resume,
		setResume
	] = useState('');

	const togglePhoneHidden = () => (phoneHidden ? setPhoneHidden(false) : setPhoneHidden(true));

	useEffect(() => {
		// useEffect hook
		setTimeout(() => {
			// simulate a delay
			axios.get('/files/GMcCarthyResume.pdf', { responseType: 'blob' }).then((response) => {
				// Get pokemon data
				console.log(response);
				setResume(response.request.responseURL); //set pokemon state
				setLoading(false); //set loading state
			});
		}, 3000);
	}, []);

	console.log({ resume });

	if (isLoading) {
		return (
			<div
				style={{
					display        : 'flex',
					flexDirection  : 'column',
					alignItems     : 'center',
					justifyContent : 'center',
					height         : '100vh'
				}}
			>
				Loading the data {console.log('loading state')}
			</div>
		);
	}

	return (
		<div className="contact">
			<Navbar fill id="contact">
				<NavItem>
					<NavLink className="nav-link" onClick={() => toggleAddressHidden()}>
						<div className="icon-div">
							{' '}
							<img className="contact-icon" src={locationDot} alt="location icon" />
						</div>
					</NavLink>
					<CSSTransition in={!addressHidden} timeout={300} classNames="hidden" unmountOnExit>
						<span id="address">Andover, MA</span>
					</CSSTransition>
				</NavItem>
				<NavItem>
					<NavLink className="nav-link phone" onClick={() => togglePhoneHidden()} href="#">
						<div className="icon-div">
							{' '}
							<img className="contact-icon" src={phone} alt="phone icon" />
						</div>
					</NavLink>
					<CSSTransition in={!phoneHidden} timeout={300} classNames="hidden" unmountOnExit>
						<span id="phone">(603) 490-4664</span>
					</CSSTransition>
				</NavItem>
				<NavItem>
					<NavLink className="nav-link" href="mailto:gabhmccarthy@gmail.com">
						<div className="icon-div">
							{' '}
							<img className="contact-icon" src={envelope} alt="ennvelope icon" />
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
							<img className="contact-icon" src={linkedIn} alt="linkedin icon" />
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
							<img className="contact-icon" src={gitHub} alt="github icon" />
						</div>
					</NavLink>
				</NavItem>
				<NavItem>
					{/* <a className="nav-link" href="/files/GMcCarthyResume.pdf" target="_blank" rel="noreferrer" download>
						<div className="icon-div">
							{' '}
							<img className="contact-icon" src={download} alt="download resume icon" />
						</div>
					</a> */}
					<a className="nav-link" href={resume} target="_blank" rel="noreferrer" download>
						<div className="icon-div">
							{' '}
							<img className="contact-icon" src={download} alt="download resume icon" />
						</div>
					</a>
				</NavItem>
			</Navbar>
		</div>
	);
}

export default Contact;
