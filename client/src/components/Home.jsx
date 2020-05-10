import React from 'react';
import {
    Container, Row, Col
} from 'reactstrap';

const Home = () => {
    return (
        <Container id="home" className="home">
            <Row>
                <Col>
                    <h1 className="home-title">Taylor Dickens</h1>
                    <h1 className="home-subtitle">Web Developer</h1>
                    <img alt="jellyfish" className="home-photo" height="600" width="900" src={require('../css/assets/jelly2.jpeg')} />
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
