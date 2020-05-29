import React from 'react';
import { Container, Row, Col } from '../components/Grid';
import Portrait from '../assets/portrait.png'
import Header from '../components/Header';

function Home() {
    return (
        <>
            <Header page="home" />
            <Container>
                <Row>
                    <Col size='sm-3'>
                        <img alt="portrait" className="img-fluid mx-auto mb-3 d-block" src={Portrait}></img>
                    </Col>
                    <Col size='sm-9'>
                        <p>My name is Misha Gringauze and I am a software developer.</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;