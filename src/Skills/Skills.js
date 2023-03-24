import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Skills.css';
import serverImg from '../Images/server.svg';
import displayCode from '../Images/display-code.svg';
import handshake from '../Images/handshake.svg';
import flask from '../Images/flask.svg';

function Skills() {
	return (
		<div>
			<Container className="skills">
				<Row>
					<h2 className="subtitle">Skills</h2>
					<Col>
						<h3>
							<img className="skills-icon" src={displayCode} alt="fe skills icon" />
						</h3>
						<ul>
							<li>HTML</li>
							<li>CSS</li>
							<li>JavaScript</li>
							<li>React</li>
							<li>RESTful API</li>
						</ul>
					</Col>
					<Col>
						<h3>
							<img className="skills-icon" src={serverImg} alt="be skills icon" />
						</h3>
						<ul>
							<li>Python</li>
							<li>Flask</li>
							<li>Node</li>
							<li>Express</li>
							<li>SQL</li>
							<li>PostgreSQL</li>
						</ul>
					</Col>
					<Col>
						<h3>
							<img className="skills-icon" src={handshake} alt="soft skills icon" />
						</h3>
						<ul>
							<li>Logical & Analytical Thinker</li>
							<li>Works Well Independently & With Others</li>
							<li>Eager & Quick to Learn</li>
							<li>Determined & Goal-Oriented</li>
							<li>Strong Work Ethic</li>
						</ul>
					</Col>
					<Col>
						<h3>
							<img className="skills-icon" src={flask} alt="technical skills icon" />
						</h3>
						<ul>
							<li>DraftSight/2D CAD</li>
							<li>Adobe lllustrator and Photoshop</li>
							<li>Laboratory Research</li>
							<li>Plant Physiology</li>
							<li>Quality Assurance</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
export default Skills;
