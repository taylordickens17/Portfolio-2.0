import React, { useEffect } from 'react';
import {
    Card, Container, Button, CardHeader, CardBody,
    CardTitle, CardText, Row, Col
} from 'reactstrap';

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
                        <Card className="project-card">
                            <CardHeader>PetPals</CardHeader>
                            <CardBody>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go See</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="4" className="projects-col">
                        <Card className="project-card">
                            <CardHeader>The Book Review</CardHeader>
                            <CardBody>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go See</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="4" className="projects-col">
                        <Card className="project-card">
                            <CardHeader>Studio Ghibli API</CardHeader>
                            <CardBody>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go See</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio;