import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row } from 'reactstrap';

import './Interests.css';

function Interests() {
	return (
		<div>
			<Container className="interests">
				<Row>
					<div className="my-why">
						<h2 className="subtitle">My "Why"</h2>
						<div>
							<div className="pg">
								I've always had an interest in working with computers and software. It started with
								coding my own MySpace layouts in high school and continued with making small projects
								here and there for fun. I spent the last 13 years building a career as a Postharvest
								Specialist, or someone who researches fruits and vegetables after they've been
								harvested. I enjoyed what I did, but always found myself drawn to exploring whatever
								software my company was using.
							</div>
						</div>
						<div className="pg">
							In 2018, the company I was working with started a project to use lasers to develop
							specialized lidding films for salad trays. Our goal was to provide our customers with a more
							sustainable alternative to current plastic packaging. I was responsible for learning how to
							operate the laser, developing and designing all software jobs, and training the operators.
							Even though I had no experience with lasers or CAD software, I was thrilled at the
							challenge. Soon enough, I was able to successfully design CAD drawings and produce these
							lidding films using our new laser system.
						</div>{' '}
						<div className="pg">
							After that I developed a strong urge to expand my software engineering abilities and
							discovered a passion for web development in the process. I'm skilled in both front-end and
							back-end technologies, but find that I really have a knack for front-end.
						</div>{' '}
						<div className=" pg tldr">
							TL;DR Former Lab Rat Plays with Lasers, Becomes Obsessed with Coding
						</div>{' '}
					</div>
					<div className="industries">
						<h2 className="subtitle">Industries I'm Passionate About</h2>
						<div className="pg">
							After dedicating the last 13 years of my career working towards sustainability, my values
							remain the same. It's important for me to work for a company that makes a positive impact on
							the world and has a connected and progressive culture. Some industries I find exciting are:
						</div>
						<ul>
							<li>AgTech</li>
							<li>Food & Beverage</li>
							<li>Climate Tech</li>
							<li>Biotech</li>
							<li>Life Sciences</li>
							<li>Animal Care</li>
						</ul>
					</div>
				</Row>
			</Container>
		</div>
	);
}
export default Interests;
