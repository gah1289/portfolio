import React from 'react';
import { Row, Col, CardLink, CardImg, TabPane, Card, CardTitle, CardText } from 'reactstrap';
import './Projects.css';

function ProjectTab({ project }) {
	const { tab, title, description, goals, frontEnd, backEnd, apis, links, imgSrc } = project;

	return (
		<TabPane tabId={tab}>
			<Row className="project-bg">
				<Col sm="6">
					<Card className="project-bg" body>
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
					<Card className="project-bg" body>
						<CardImg src={imgSrc} alt={`picture of ${title}`} top width="100%" />
						<CardText className="project-links">
							<ul>
								{' '}
								{links.map((link) => (
									<CardLink className="site-link" href={link.link}>
										{link.name}
									</CardLink>
								))}
							</ul>
						</CardText>
					</Card>
				</Col>
			</Row>
		</TabPane>
	);
}
export default ProjectTab;
