import './Home.css';
import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import Skills from '../Skills/Skills';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Col, Row } from 'reactstrap';
import headshot from '../Images/headshot3.png';
import Interests from '../Interests/Interests';
import Projects from '../Projects/Projects';
import hank from '../Images/Hank.png';
import hopper from '../Images/Hopper.png';

import Contact from '../Contact/Contact';

function Home() {
	// text morphing - https://codepen.io/sreeharshrajan/pen/bGrYNLe
	let terms = [
		' front-end developer',
		' full stack developer',
		' software engineer'
	];

	return (
		<div className="all-body">
			<div className="home-page">
				<Row className="header">
					<Col className="title-contact">
						<h1 className="title">I'm Gabriela McCarthy</h1>
						<div className="slogan wrapper">
							{' '}
							and I'm a
							{terms.map((title, i) => <span className={`words title${i}`}> {title}</span>)}
						</div>
						<Contact />
					</Col>
					<Col>
						{' '}
						<div className="headshot-container">
							<div className="background-headshot1"> </div>
							<div className="background-headshot2"> </div>
							<div className="background-headshot3"> </div>
							<div className="background-headshot4"> </div>
							<div className="headshot">
								{' '}
								<img className="headshot" src={headshot} />{' '}
							</div>{' '}
						</div>
					</Col>
				</Row>

				<Skills />

				<Projects />
				<Container className="about-me">
					<Row>
						<Col>
							<h2 className="subtitle">About Me</h2>
							<div className="pg">
								I'm a certified software engineer with a background in Biology and Postharvest
								Technology. In February 2023, I completed the Springboard Software Engineering Career
								Track Certificate Program. During that time, I mastered skills in front-end and back-end
								web development, databases, and data structures and algorithms. {' '}
							</div>
							<div className="pg">
								I'm looking for opportunities as a software engineer in the Greater Boston/North Shore
								Area. My ideal environment is one where I can continue to learn, grow, collaborate with
								a team.
							</div>
							<div className="pg">
								When I'm not working I love to spend time with my husband, family, and friends, unwind
								at Lake Winnipesaukee, and try to keep up with my two crazy dogs Hopper and Hank.
							</div>
							<div className="dogs">
								{' '}
								<div className="hopper">
									<img src={hopper} />
									<div id="hopper-text">
										<span className="name">HOPPER, 5</span> <br /> - Loves Bravo TV <br /> -
										Requires an ice tax
										<br /> - Afraid of spoons
									</div>
								</div>
								<div className="hank">
									<img src={hank} />
									<div id="hank-text">
										<span className="name">HANK, 6mo</span>
										<br /> - Part Boxer part shrimp <br /> - Can pick any lock <br /> - Very
										impressive set of lungs
									</div>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			<Interests />
			{/* <Footer /> */}
		</div>
	);
}
export default Home;
