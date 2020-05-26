import React from 'react';
import { Card, Container, Button, Row, Col } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNodeJs, faReact, faDocker, faFigma, faAdobe } from '@fortawesome/free-brands-svg-icons';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
    return (
        <div className="skills" id="skills">
            <Container>
                <h1 className="skills-title">Skills</h1>
                <Row>
                    <Col md="2" className="skills-col">
                        <Card className="project-card-pets">
                            <FontAwesomeIcon className="skill-icon-node" size="4x" icon={faNodeJs} />
                            <a href="">NodeJS</a>
                        </Card>
                    </Col>
                    <Col md="2" className="skills-col">
                        <Card className="project-card-space">
                            <FontAwesomeIcon className="skill-icon-react" size="4x" icon={faReact} />
                            <a href="">React</a>
                        </Card>
                    </Col>
                    <Col md="2" className="skills-col">
                        <Card className="project-card-book">
                            <FontAwesomeIcon className="skill-icon-docker" size="4x" icon={faDocker} />
                            <a href="">Docker</a>
                        </Card>
                    </Col>
                    <Col md="2" className="skills-col">
                        <Card className="project-card-pets">
                            <FontAwesomeIcon className="skill-icon-heroku" size="4x" icon={faCloudUploadAlt} />
                            <a href="">Heroku</a>
                        </Card>
                    </Col>
                    <Col md="2" className="skills-col">
                        <Card className="project-card-space">
                            <FontAwesomeIcon className="skill-icon-adobe" size="4x" icon={faAdobe} />
                            <a href="">Adobe</a>
                        </Card>
                    </Col>
                    <Col md="2" className="skills-col">
                        <Card className="project-card-book">
                            <FontAwesomeIcon className="skill-icon-book" size="4x" icon={faFigma} />
                            <a href="">Figma</a>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Skills;