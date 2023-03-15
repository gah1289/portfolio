import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Nav, NavItem, CardLink, CardImg, TabPane, Card, CardTitle, CardText } from 'reactstrap';
import './Projects.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { fat } from '@fortawesome/pro-thin-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProjectTab({ project }) {
	library.add(fal, far, fat);
	console.log(project);
	const { tab, title, description, goals, frontEnd, backEnd, apis, links, imgSrc } = project;
	console.log(title);

	return (
		<TabPane tabId={tab}>
			<Row>
				<Col sm="6">
					<Card body>
						<CardTitle className="project-title">{title}</CardTitle>
						<CardText>{description}</CardText>
						<CardText>
							<span className="bolder">Goals</span> {goals}
						</CardText>
						<Row>
							<Col>
								{' '}
								<CardText>
									<span className="bolder">Front-end:</span>{' '}
									<ul>{frontEnd.map((tech) => <li>{tech}</li>)}</ul>
								</CardText>
							</Col>
							<Col>
								{' '}
								<CardText>
									<span className="bolder">Back-end:</span>{' '}
									<ul>{backEnd.map((tech) => <li>{tech}</li>)}</ul>
								</CardText>
							</Col>{' '}
						</Row>
						<CardText>
							<span className="bolder">APIs:</span> <ul>{apis.map((api) => <li>{api}</li>)}</ul>
						</CardText>
					</Card>
				</Col>
				<Col sm="6">
					<Card body>
						<CardImg alt="Card image cap" src={imgSrc} top width="100%" />
						<CardText className="project-links">
							<ul>  {links.map((link) => <CardLink href={link.link}>{link.name}</CardLink>)}</ul>
						</CardText>
					</Card>
				</Col>
			</Row>
		</TabPane>
	);
}
export default ProjectTab;
