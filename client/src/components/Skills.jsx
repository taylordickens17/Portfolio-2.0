import React, { useEffect } from 'react';
import { Card, Container, Button, Row, Col } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNodeJs, faReact, faDocker, faFigma, faAdobe } from '@fortawesome/free-brands-svg-icons';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

// Animation
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    })

    return (
        <div className="skills" id="skills">
            <Container data-aos="fade-up">
                <h1 className="skills-title">Skills</h1>
                <Row>
                    <Col md="2" className="skills-col">
                        <Card className="skills-card">
                            <FontAwesomeIcon className="skill-icon-node" size="4x" icon={faNodeJs} />
                            <a href="https://nodejs.org/en/about/" target="_blank" className="skill-link">NodeJS</a>
                        </Card>
                    </Col>
                    <Col md="2" className="skills-col">
                        <Card className="skills-card">
                            <FontAwesomeIcon className="skill-icon-react" size="4x" icon={faReact} />
                            <a href="https://reactjs.org/docs/getting-started.html" target="_blank" className="skill-link">React</a>
                        </Card>
                    </Col>
                    <Col md="2" className="skills-col">
                        <Card className="skills-card">
                            <FontAwesomeIcon className="skill-icon-docker" size="4x" icon={faDocker} />
                            <a href="https://www.docker.com/company" target="_blank" className="skill-link">Docker</a>
                        </Card>
                    </Col>
                    <Col md="2" className="skills-col">
                        <Card className="skills-card">
                            <FontAwesomeIcon className="skill-icon-heroku" size="4x" icon={faCloudUploadAlt} />
                            <a href="https://www.heroku.com/about" target="_blank" className="skill-link">Heroku</a>
                        </Card>
                    </Col>
                    <Col md="2" className="skills-col">
                        <Card className="skills-card">
                            <FontAwesomeIcon className="skill-icon-adobe" size="4x" icon={faAdobe} />
                            <a href="https://www.adobe.com/about-adobe.html?promoid=2NVQCDBQ&mv=other" target="_blank" className="skill-link">Adobe</a>
                        </Card>
                    </Col>
                    <Col md="2" className="skills-col">
                        <Card className="skills-card">
                            <FontAwesomeIcon className="skill-icon-book" size="4x" icon={faFigma} />
                            <a href="https://www.figma.com/design/" target="_blank" className="skill-link">Figma</a>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Skills;