import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Container, Row, Col } from 'reactstrap';

const About = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    })

    return (
        <Container data-aos="fade-up" id="about" className="about">
            <Row>
                <Col md="6">
                    <h1 className="about-title">Introduction</h1>
                    <p className="about-text">I graduated from the Herron School of Art and Design with a BFA in Printmaking. While at
                                    Herron, I took a few classes in visual communication, which started my passion for design.
                                    After graduating, I went on to further my studies at Ivy Tech. There I dabbled in
                            a few coding languages such as Python, HTML, CSS, and basic JavaScript.
                            Once realizing coding was my newfound passion, I enrolled at Eleven Fifty Academy to refine
                        my skills. I have learned a considerable amount and I'm always eager to continue learning.
                        See my credentials</p>
                    <a href={require("../css/assets/Resume2020.pdf")} download><button
                        class="resumeBttn">Resume</button></a>
                </Col>
                <Col md="6">
                    <img src={require("../css/assets/TaylorDickens1.jpg")} alt="Taylor Dickens" className="about-pic" />
                </Col>
            </Row>
        </Container>
    )
}

export default About;