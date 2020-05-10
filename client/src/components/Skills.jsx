import React from 'react';
import {
    Container, Row, Col
} from 'reactstrap';

const Skills = () => {
    return (
        <Container id="skills" className="skills">
            <h1>Skills</h1>
            <Row>
                <Col>
                    <hr style={{ width: '80%' }} />
                </Col>
            </Row>
        </Container>
    )
}

export default Skills;