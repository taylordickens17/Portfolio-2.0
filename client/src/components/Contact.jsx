import React from 'react';
import {
    Container, Button, FormGroup, Form, Input, Col
} from 'reactstrap';

const Contact = () => {
    return (
        <Container>
            <h1>Contact</h1>
            <Form action="https://formspree.io/mbjalklw" method="POST">
                <FormGroup>
                    <Input
                        type="text"
                        name="name"
                        id="contactName"
                        placeholder="Your Name"
                        required data-validation-required-message="Please enter your name"
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                        type="email"
                        name="email"
                        id="contactEmail"
                        placeholder="Your Email"
                        required data-validation-required-message="Please enter your email"
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                        type="textarea"
                        name="text"
                        id="contactMessage"
                        placeholder="Leave a Comment"
                        required data-validation-required-message="Please leave a message"
                    />
                </FormGroup>
                <Button>Send Message</Button>
            </Form>
        </Container>
    )
}

export default Contact;