import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Container, Button, Row, Col } from 'reactstrap';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog, faBookOpen, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

// Animation
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    })

    return (
        <div className="projects" id="projects">
            <Container data-aos="fade-up">
                <h1 className="projects-title">Projects</h1>
                <Row>
                    <Col md="4" className="projects-col">
                        <Card className="project-card-pets">
                            <FontAwesomeIcon className="project-icon-pet" size="4x" icon={faDog} />
                            <Link to="/petpals"><Button className="portfolio-bttn">PetPals</Button></Link>
                        </Card>
                    </Col>
                    <Col md="4" className="projects-col">
                        <Card className="project-card-space">
                            <FontAwesomeIcon className="project-icon-space" size="4x" icon={faUserAstronaut} />
                            <Link to="/spacevisualizer"><Button className="portfolio-bttn">Space Visualizer</Button></Link>
                        </Card>
                    </Col>
                    <Col md="4" className="projects-col">
                        <Card className="project-card-book">
                            <FontAwesomeIcon className="project-icon-book" size="4x" icon={faBookOpen} />
                            <Link to="/bookreview"><Button className="portfolio-bttn">Book Review</Button></Link>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio;