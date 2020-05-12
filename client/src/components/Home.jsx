import React from 'react';
import { Row, Col, Nav, Container } from 'reactstrap';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';


const Home = () => {
    return (
        <Container id="home" className="home">
            <Row>
                <Col className="home-bg" md="6">
                    <div className="home-landing-title">
                        <h1 className="home-title"><span className="first-name">Taylor</span> Dickens</h1>
                        <br />
                        <a href="#about" className="home-linkedIn-bttn"><FontAwesomeIcon icon={faLinkedin} size='2x' /></a>
                        <a href="#about" className="home-gitHub-bttn"><FontAwesomeIcon icon={faGithubSquare} size='2x' /></a>
                    </div>
                </Col>
                <Col md="6">
                    <Nav className="sitebar">
                        <div className="menu-wrap">
                            <ul>
                                <li><a href="#home" className="nav-item">Taylor Dickens</a></li>
                                <li><a href="#projects" className="nav-item">Projects</a></li>
                                <li><a href="#about" className="nav-item">About</a></li>
                                <li><a href="#skills" className="nav-item">Skills</a></li>
                                <li><a href="#contact" className="nav-item">Contact</a></li>
                            </ul>
                        </div>
                    </Nav>
                    <h1 className="greeter">Hello There, Friend!</h1>
                    <p className="greeter-paragraph">Cupcake ipsum dolor sit amet. Toffee chocolate cake candy canes jelly-o. Gummi bears gingerbread pastry ice cream carrot cake marzipan sweet roll liquorice.</p>
                    <br />
                    <a href="#about" className="greeter-bttn">Get to know me &nbsp;	&nbsp;<FontAwesomeIcon icon={faLongArrowAltRight} size='1x' /></a>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
