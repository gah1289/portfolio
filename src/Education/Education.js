import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Education.css';
import serverImg from '../Images/server.svg';
import displayCode from '../Images/display-code.svg';
import handshake from '../Images/handshake.svg';
import flask from '../Images/flask.svg';

function Education() {
	return (
		<div>
			<Container className="education">
				<h2 className="subtitle">Education</h2>
				<Row className="education-row">
					<Col className="ed-title">
						<Row>Degree Type</Row>
						<Row>Study</Row>
						<Row>Institution</Row>
						<Row>Location</Row>
						<Row>Graduation Date</Row>
					</Col>
					<Col className="education-col">
						<Row>Certificate</Row>
						<Row>Software Engineering Career Track</Row>
						<Row>Springboard</Row>
						<Row>Remote</Row>
						<Row>Feb 2023</Row>
					</Col>
				</Row>
				<Row className="education-row">
					<Col className="ed-title">
						<Row>Degree Type</Row>
						<Row>Study</Row>
						<Row>Institution</Row>
						<Row>Location</Row>
						<Row>Graduation Date</Row>
					</Col>
					<Col className="education-col">
						<Row>M.S.</Row>
						<Row>Horticulture</Row>
						<Row>Auburn University</Row>
						<Row>Auburn, AL</Row>
						<Row>Aug 2015</Row>
					</Col>
				</Row>
				<Row className="education-row">
					<Col className="ed-title">
						<Row>Degree Type</Row>
						<Row>Study</Row>
						<Row>Institution</Row>
						<Row>Location</Row>
						<Row>Graduation Date</Row>
					</Col>
					<Col className="education-col">
						<Row>B.S.</Row>
						<Row>Biology</Row>
						<Row>University of New Hampshire</Row>
						<Row>Durham, NH</Row>
						<Row>May 2012</Row>
					</Col>
				</Row>
				{/* <Row className="education-row">
					<Col>Certificate</Col>
					<Col>Software Engineering Career Track</Col>
					<Col>Springboard</Col>
					<Col>Remote</Col>
					<Col>Feb 2023</Col>
				</Row>
				<Row className="education-row">
					<Col>M.S.</Col>
					<Col>Horticulture</Col>
					<Col>Auburn University</Col>
					<Col>Auburn, AL</Col>
					<Col>Aug 2015</Col>
				</Row>
				<Row className="education-row">
					<Col>B.S.</Col>
					<Col>Biology</Col>
					<Col>University of New Hampshire</Col>
					<Col>Durham, NH</Col>
					<Col>May 2012</Col> */}
				{/* </Row> */}
				{/* <Row className="ed-title">
					<Col>Degree Type</Col>
					<Col>Study</Col>
					<Col>Institution</Col>
					<Col>Location</Col>
					<Col>Graduation Date</Col>
				</Row>
				<Row className="education-row">
					<Col>Certificate</Col>
					<Col>Software Engineering Career Track</Col>
					<Col>Springboard</Col>
					<Col>Remote</Col>
					<Col>Feb 2023</Col>
				</Row>
				<Row className="education-row">
					<Col>M.S.</Col>
					<Col>Horticulture</Col>
					<Col>Auburn University</Col>
					<Col>Auburn, AL</Col>
					<Col>Aug 2015</Col>
				</Row>
				<Row className="education-row">
					<Col>B.S.</Col>
					<Col>Biology</Col>
					<Col>University of New Hampshire</Col>
					<Col>Durham, NH</Col>
					<Col>May 2012</Col>
				</Row> */}
			</Container>
		</div>
	);
}
export default Education;
