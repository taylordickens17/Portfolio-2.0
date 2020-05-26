import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

// Animation
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    })

    return (
        <Container data-aos="fade-up" id="about" className="about">
            <Row className="about-section">
                <Col md="7">
                    <h1 className="about-title">Introduction</h1>
                    <p className="about-text">I graduated from the Herron School of Art and Design with a BFA in Printmaking. While at
                    Herron, I took a few classes in visual communication, which started my passion for design.
                    After graduating, I went on to further my studies at Ivy Tech. There I dabbled in
                    a few coding languages such as Python, HTML, CSS, and basic JavaScript.
                    Once realizing coding was my newfound passion, I enrolled at Eleven Fifty Academy to refine
                        my skills. I have learned a considerable amount and I'm always eager to continue learning.</p>
                    <a href={require("../css/assets/Resume2020.pdf")} download className="resume-bttn">Resume <FontAwesomeIcon icon={faLongArrowAltRight} className="arrow" size='1x' /></a>
                </Col>
                <Col md="5">
                    <div className="overlay-container">
                        <img src={require("../css/assets/TaylorDickens1.jpg")} alt="Taylor Dickens" className="about-pic" />
                        <div className="about-overlay-text">
                            <p>"You will face many defeats in life, but never let yourself be defeated." -Maya Angelou</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default About;