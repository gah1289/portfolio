import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Skills.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { fat } from '@fortawesome/pro-thin-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Skills() {
	library.add(fal, far, fat);

	return (
		<div>
			<Container className="skills">
				<Row>
					<h2>Skills</h2>
					<Col>
						<h3>
							<FontAwesomeIcon className="skills-icon" icon="fa-thin fa-display-code" />
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
							<FontAwesomeIcon className="skills-icon" icon="fa-thin fa-server" />
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
							<FontAwesomeIcon className="skills-icon" icon="fa-thin fa-handshake" />
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
							<FontAwesomeIcon className="skills-icon" icon="fa-thin fa-flask" />
						</h3>
						<ul>
							<li>DraftSight/2D CAD</li>
							<li>Laboratory Research</li>
							<li>Plant Physiology</li>
							<li>Biology</li>
							<li>Quality Assurance</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
export default Skills;
