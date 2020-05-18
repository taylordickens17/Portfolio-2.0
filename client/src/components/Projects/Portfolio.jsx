import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Row, Col } from 'reactstrap';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog, faBookOpen, faUserAstronaut } from '@fortawesome/free-solid-svg-icons'

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
                <Row className="project-row">
                    <Col md="4" className="projects-col">
                        <FontAwesomeIcon className="project-icon" size="4x" icon={faDog} />
                        <Link to="/petpals"><Button className="portfolio-bttn">See More</Button></Link>
                    </Col>
                    <Col md="4" className="projects-col">
                        <FontAwesomeIcon className="project-icon" size="4x" icon={faUserAstronaut} />
                        <Link to="/spacevisualizer"><Button className="portfolio-bttn">See More</Button></Link>
                    </Col>
                    <Col md="4" className="projects-col">
                        <FontAwesomeIcon className="project-icon" size="4x" icon={faBookOpen} />
                        <Link to="/bookreview"><Button className="portfolio-bttn">See More</Button></Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio;