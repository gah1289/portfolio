import React from 'react';
import { Row, Col, CardLink, CardImg, TabPane, Card, CardTitle, CardText } from 'reactstrap';
import './Projects.css';

function ProjectTab({ project }) {
	const { tab, title, description, goals, frontEnd, backEnd, apis, links, imgSrc } = project;

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
							<ul> {links.map((link) => <CardLink href={link.link}>{link.name}</CardLink>)}</ul>
						</CardText>
					</Card>
				</Col>
			</Row>
		</TabPane>
	);
}
export default ProjectTab;
