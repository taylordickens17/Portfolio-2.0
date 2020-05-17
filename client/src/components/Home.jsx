import React from 'react';
import { Row, Col, Container } from 'reactstrap';

import Sitebar from './Sitebar';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

//Animations
import { Spring } from 'react-spring/renderprops';



const Home = () => {
    return (
        <Container id="home" className="home">
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ delay: 500, duration: 1000 }}
            >
                {props => (
                    <div style={props}>
                        <Row>
                            <Col className="home-bg" md="6">
                                <div className="home-landing-title">
                                    <h1 className="home-title"><span className="first-name">Taylor</span> Dickens</h1>
                                    <br />
                                    <a href="#about" className="home-linkedIn-bttn"><FontAwesomeIcon icon={faLinkedin} size='2x' /></a>
                                    <a href="#about" className="home-gitHub-bttn"><FontAwesomeIcon icon={faGithubSquare} size='2x' /></a>
                                    <a href="mailto:justindickens17@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="home-email-bttn" size="2x" icon={faEnvelopeSquare} /></a>
                                </div>
                            </Col>
                            <Col md="6">
                                <Sitebar />
                                <div className="greeting">
                                    <h1 className="greeter">Hello There, Friend!</h1>
                                    <p className="greeter-paragraph">Cupcake ipsum dolor sit amet. Toffee chocolate cake candy canes jelly-o. Gummi bears gingerbread pastry ice cream carrot cake marzipan sweet roll liquorice.</p>
                                    <br />
                                    <a href="#about" className="greeter-bttn">Get to know me &nbsp;	&nbsp;<FontAwesomeIcon icon={faLongArrowAltRight} size='1x' /></a>
                                </div>
                            </Col>
                        </Row>
                    </div>)}
            </Spring>
        </Container>
    );
}

export default Home;
