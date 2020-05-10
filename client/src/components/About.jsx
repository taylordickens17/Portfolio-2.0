import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const About = () => {

    return (
        <Container id="about" className="about">
            <Row>
                <Col md="12">
                    <h1>About Me</h1>
                    <p className="about-text">I graduated from the Herron School of Art and Design with a BFA in Printmaking. While at
                                    Herron, I took a few classes in visual communication, which started my passion for design.
                                    After graduating, I went on to further my studies at Ivy Tech. There I dabbled in
                            a few coding languages such as Python, HTML, CSS, and basic JavaScript. </p>
                    <p className="about-text">Once realizing coding was my newfound passion, I enrolled at Eleven Fifty Academy to refine
                        my skills. I have learned a considerable amount and I'm always eager to continue learning.
                        </p>
                </Col>
                <Col md="12">
                    <p id="resumeDescript" className="about-text">See my credentials</p>
                    <a href="../assets/Resume2020.pdf" download><button
                        class="resumeBttn">Resume</button></a>
                </Col>
                <Col>
                    <hr style={{ width: '80%' }} />
                </Col>
            </Row>
        </Container>
    )
}

export default About;