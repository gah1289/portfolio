import './Home.css';
import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import Skills from '../Skills/Skills';

import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { fat } from '@fortawesome/pro-thin-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Col, Row } from 'reactstrap';
import headshot from '../Images/headshot2.jpg';
import Interests from '../Interests/Interests';

function Home() {
	library.add(fal, far, fat);

	return (
		<div className="all-body">
			<div className="home-page">
				<Row className="header">
					<h1>Hi, I'm Gabriela McCarthy</h1>
					<div className="job-title">Software Engineer</div>
					<div className="job-title">Full Stack Developer</div>
				</Row>

				<Container className="about-me">
					<Row>
						<Col>
							<h2>About Me</h2>
							<div className="pg">
								I'm a certified software engineer with a background in Biology and Postharvest
								Technology. In February 2023, I completed the Springboard Software Engineering Career
								Track Certificate Program. During that time, I mastered skills in front-end web
								development, back-end web development, databases, and data structures and algorithms. {' '}
							</div>
							<div className="pg">
								I'm looking for opportunities as a software engineer in the Greater Boston/North Shore
								Area. My ideal environment is one where I can continue to learn, grow, collaborate with
								a team.
							</div>
							<div className="pg">
								When I'm not working I love to spend time with family and friends, unwind at Lake
								Winnipesaukee, and try to keep up with my two crazy dogs Hopper and Hank.
							</div>
						</Col>
						<Col>
							{' '}
							<img className="headshot" src={headshot} />
						</Col>
					</Row>
				</Container>
			</div>
			<Interests />
			<Skills />
			<Footer />
		</div>
	);
}
export default Home;
