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
                    <Col size='sm-3 offset-sm-1'>
                        <img alt="portrait" className="img-fluid mx-auto mb-3 d-block" src={Portrait}></img>
                    </Col>
                    <Col size='sm-7'>
                        <p>Hi, my name is Misha Gringauze and I am a <a href="/portfolio">full stack web developer</a> from Seattle, Washington.</p>
                        <p>This website was built using <a href="https://getbootstrap.com/">Bootstrap</a> and <a href="https://reactjs.org/">React.js</a>.</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;