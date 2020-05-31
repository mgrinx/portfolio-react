import React from 'react';
import { Container, Row, Col } from '../components/Grid';

function Contact() {
    return (
        <Container>
            <Row>
                <Col size="12">
                    <div className="text-center">
                        <a href="mailto:mgringauze@gmail.com">email</a>
                        &nbsp;&nbsp;·&nbsp;&nbsp;
                        <a href="https://www.linkedin.com/in/misha-gringauze-178bb01a2" rel="noopener noreferrer" target="_blank">linkedin</a>
                        &nbsp;&nbsp;·&nbsp;&nbsp;
                        <a href="https://github.com/mgrinx" rel="noopener noreferrer" target="_blank">github</a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;