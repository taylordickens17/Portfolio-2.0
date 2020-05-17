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
        <div className="projects">
            <Container data-aos="fade-up" id="projects">
                <h1>Projects</h1>
                <Row className="projects-row">
                    <Col md="4" className="projects-col">
                        <Card>
                            <CardHeader>PetPals</CardHeader>
                            <CardBody>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go See</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card>
                            <CardHeader>The Book Review</CardHeader>
                            <CardBody>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go See</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card>
                            <CardHeader>Studio Ghibli API</CardHeader>
                            <CardBody>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go See</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row className="projects-row-two">
                    <Col md="4" className="projects-col">
                        <Card>
                            <CardHeader>PetPals</CardHeader>
                            <CardBody>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go See</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card>
                            <CardHeader>The Book Review</CardHeader>
                            <CardBody>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go See</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card>
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