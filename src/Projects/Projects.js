import React, { useState } from 'react';
import { Container, Nav, NavItem, NavLink, TabContent } from 'reactstrap';
import './Projects.css';

import ProjectTab from './ProjectTab';
import myProjects from './myProjects';

function Projects() {
	const { postharvestApp, hiSpotApp, jobly, portfolio } = myProjects;

	const [
		active,
		setActive
	] = useState('1');
	const [
		showProject,
		setShowProject
	] = useState(postharvestApp);

	const changeTab = (project) => {
		setActive(project.tab);
		setShowProject(project);
	};

	console.log('active', active, showProject);

	return (
		<div>
			<Container className="projects">
				<div>
					<h2>Projects</h2>
					<Nav tabs className="project-tabs">
						<NavItem>
							<NavLink
								className={active === postharvestApp.tab ? 'active' : ''}
								onClick={() => changeTab(postharvestApp)}
							>
								Postharvest App
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className={active === hiSpotApp.tab ? 'active' : ''}
								onClick={() => changeTab(hiSpotApp)}
							>
								Hi-Spot Condos{' '}
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className={active === jobly.tab ? 'active' : ''} onClick={() => changeTab(jobly)}>
								Jobly{' '}
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className={active === portfolio.tab ? 'active' : ''}
								onClick={() => changeTab(portfolio)}
							>
								Portfolio{' '}
							</NavLink>
						</NavItem>
					</Nav>
					<TabContent className="project-tab" activeTab={active}>
						<ProjectTab className="project-content" project={postharvestApp} />
						<ProjectTab project={hiSpotApp} />
						<ProjectTab project={jobly} />
						<ProjectTab project={portfolio} />
					</TabContent>
				</div>
			</Container>
		</div>
	);
}
export default Projects;
