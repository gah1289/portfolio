import './Home.css';
import './Home.css';
import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Card, CardGroup, Spinner } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
	return (
		<div>
			<div>
				<h1>Hi, I'm Gabriela McCarthy</h1>
				<h2>Software Engineer | Full Stack Developer</h2>
			</div>
			<div>
				<h2>Skills:</h2>
				<h3>Front-end</h3>
				<ul>
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript</li>
					<li>React</li>
					<li>RESTful API</li>
				</ul>
				<h3>Back-end</h3>
				<ul>
					<li>Python</li>
					<li>SQL</li>
					<li>Node</li>
					<li>Flask</li>
					<li>Express</li>
					<li>SQL</li>
					<li>PostgreSQL</li>
				</ul>
			</div>
		</div>
	);
}
export default Home;
