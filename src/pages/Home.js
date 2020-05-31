import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from '../components/Grid';
import Portrait from '../assets/portrait.png'

function Home() {
    return (
        <Container>
            <Row>
                <Col size='sm-1' />
                <Col size='sm-3'>
                    <img alt="portrait" className="img-fluid mx-auto mb-3 d-block rounded" src={Portrait} />
                </Col>
                <Col size='sm-7'>
                    <p>Hi, my name is Misha Gringauze and I am a <Link to="/portfolio">full stack web developer</Link> from Seattle, Washington.</p>
                    <p>This page was built using <a href="https://reactjs.org/">React.js</a> and <a href="https://getbootstrap.com/">Bootstrap</a>.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;